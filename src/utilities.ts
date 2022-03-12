import { ClassComponent, FunctionComponent, Properties, RefObject } from "./interfaces";
import { RefObjectImplement } from "./RefObjectImplement";
import { Component } from "./Component";


function isClassComponentConstructor<P, T extends Component<P>>(obj: any): obj is ClassComponent<P, T> {
    if (typeof obj == "function" && obj.prototype && typeof obj.prototype.safeRender == "function") {
        return true;
    }
    return false;
}

export function appendChilden(element: Element | DocumentFragment, content: (string | Node | Component<any>)[]) {
    let e = element as Node;
    let docFrag = document.createDocumentFragment();

    content.forEach((argItem) => {
        render(argItem, docFrag);
    });

    e.appendChild(docFrag);
}

// non recursive flatten deep using a stack
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
// also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
export function flatten<T>(input: T[]): T[] {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        // pop value from stack
        const next = stack.pop();
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        } else if (next) {
            res.push(next);
        }
    }
    // reverse to restore input order
    return res.reverse();
}

const eventAttr = /^on([A-Z][a-zA-Z]*?)(Capture)?$/;
export function renderIntrinsicElement<P extends Properties>(name: string, props: P) {
    let element = document.createElement(name);

    Object.keys(props)
        .forEach(key => {
            const value = props[key];
            if (typeof value !== "undefined") {
                if (typeof (value) === "function") {
                    let match = eventAttr.exec(key);
                    if (match && match[1]) {
                        element.addEventListener(
                            match[1].toLowerCase(),
                            value,
                            (key != "onGotPointerCapture" && key != "onLostPointerCapture") ? Boolean(match[2]) : false
                        );
                    }
                } else if (key === "ref") {
                    if (value instanceof RefObjectImplement) {
                        value.current = element;
                    } else if (typeof value === "function") {
                        value(element);
                    }
                } else if (key === "dataset")
                    for (const key in value) {
                        if (value.hasOwnProperty(key))
                            element.setAttribute("data-" + key, value[key]);
                    }
                else if (key === "style" && typeof value === "object")
                    Object.assign(element.style, value);
                else if (key === "className")
                    element.className = value;
                else if (typeof value === "boolean") {
                    if (value)
                        element.setAttribute(key, key);
                }
                else if (key === "children")
                    appendChilden(element, flatten(value));
                else
                    element.setAttribute(key, value as string);
            }
        });

    return element;
}

/**
 * Create DOM `node` or `TSXe.Component` of the given type.
 * @param type A HTML tag name or TSXe.Component type
 * @param props Properties of given type
 * @param children Any objects to be place under the element to be created 
 * @returns A DOM `node`
 */
export function createElement<P extends Properties, T extends Component<P>>(
    type: string | ClassComponent<P, T> | FunctionComponent<P>,
    props: P, ...children: (string | Node | Component<any>)[]) {
    props = props || {};
    if (typeof type === "string") {
        props.children = children;
        return renderIntrinsicElement(type, props);
    } else if (isClassComponentConstructor<P, T>(type)) {
        let component = Component.createComponent(type, props, ...children);
        if (props.ref) {
            props.ref.current = component;
        }
        return component.safeRender();
    } else {
        props.children = children;
        if (props.ref) {
            return props.ref.current = type(props);
        } else {
            return type(props);
        }
    }
}

export function render(component: string | Node | Component<any>, root: Node) {
    if (component instanceof Node) {
        root.appendChild(component);
    } else if (Component.isComponent(component)) {
        root.appendChild(component.safeRender());
    } else {
        root.appendChild(document.createTextNode(String(component)));
    }
}

export function createRef<T>(): RefObject<T> {
    return new RefObjectImplement<T>();
}

