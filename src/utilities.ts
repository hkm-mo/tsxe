import { TSXe } from ".";
import { TSXeProperties } from "./interfaces";
import RefObjectImplement from "./RefObjectImplement";
import Component from "./TSXeComponent";


export function appendChilden(element: Element | DocumentFragment, content: (string | Node | Component<any>)[]) {
    let e = element as Node;
    let docFrag = document.createDocumentFragment();

    content.forEach((argItem) => {
        TSXe.render(argItem, docFrag);
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
export function renderIntrinsicElement<P extends TSXeProperties>(name: string, props: P) {
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

export function createElement<P extends TSXeProperties, T extends Component<P>>(
    name: string | { new(props: P): T },
    props: P, ...content: (string | Node | Component<any>)[]) {
    if (typeof name === "string") {
        props = props || {};
        props.children = content;
        return renderIntrinsicElement(name, props);
    } else {
        let component = Component.createComponent(name, props, ...content);
        return component.safeRender();
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