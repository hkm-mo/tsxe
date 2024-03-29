import { ClassComponent, FunctionComponent, Properties, RefObject } from "./interfaces";
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

// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
export function flatten<T>(input: T[]): T[] {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        // pop value from stack
        const next = stack.pop();
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        } else {
            res.push(next as T);
        }
    }
    // reverse to restore input order
    return res.reverse();
}

const objectAssign = Object.assign ?
    Object.assign :
    (target: any, source: any) => {
        // Assume target always is an object
        if (typeof source === "object" && source !== null) {
            for (const key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key))
                    target[key] = source[key];
            }
        }

        return target;
    };

const eventAttr = /^on([A-Z][a-zA-Z]*?)(Capture)?$/;
function renderIntrinsicElement<P extends Properties>(name: string, props: P) {
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
                } else if (key === "dataset")
                    objectAssign(element.dataset, value);
                else if (key === "style" && typeof value === "object")
                    objectAssign(element.style, value);
                else if (key === "className")
                    element.className = value;
                else if (typeof value === "boolean") {
                    if (value)
                        element.setAttribute(key, key);
                }
                else if (key === "children")
                    appendChilden(element, flatten(value));
                else if (key !== "ref") // ref property should be handled by createElement()
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
    let node: JSX.Element;
    let component: JSX.Element | Component;

    if (typeof type === "string") {
        props.children = children;
        component = node = renderIntrinsicElement(type, props);
    } else if (isClassComponentConstructor<P, T>(type)) {
        component = Component.createComponent(type, props, ...children);
        node = component.safeRender();
    } else {
        props.children = children;
        component = node = type(props);
    }

    if (props.ref) {
        if (typeof props.ref === "function") {
            setTimeout(props.ref, 0, component);
        } else {
            Object.defineProperty(props.ref, "current", {
                value: component,
                writable: false
            });
        }
    }

    return node;
}

/**
 * Render Nodes into the container node.
 * @param component Text, `Node` or `Component` to render
 * @param root Container of the component
 */
export function render(component: string | Node | Component<any>, root: Node) {
    if (component instanceof Node) {
        root.appendChild(component);
    } else if (Component.isComponent(component)) {
        root.appendChild(component.safeRender());
    } else if (component !== null && (typeof component === "string" || typeof component === "number")) {
        // only string and number can be rendered.
        root.appendChild(document.createTextNode(String(component)));
    }
}

/**
 * Create RefObject to enable atteching `Node` or `Component` object by ref attribute
 * @returns `TSXe.RefObject`
 */
export function createRef<T>(): RefObject<T> {
    return { current: null };
}

