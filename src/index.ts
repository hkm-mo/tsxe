/// <reference path="../global.d.ts" />

/**
 * @author hkm-mo
 * @see {@link https://github.com/hkm-mo/tsxe|GitHub}
 * @license MIT
 */

const eventAttr = /^on([A-Z][a-zA-Z]*?)(Capture)?$/;

interface TSXeProperties {
    children?: (string | Node | TSXeComponent<any>)[],
    [key: string]: any
}

export interface TSXeNode extends Node {
    ___tsxe_component?: TSXeComponent<any>
}

// non recursive flatten deep using a stack
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
// also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
function flatten<T>(input: T[]): T[] {
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

interface TSXeComponentProps {
}

export abstract class TSXeComponent<T = TSXeComponentProps> {
    private readonly ___tsxe_component = true;

    private _node: TSXeNode | null = null;
    public get node(): TSXeNode | null {
        return this._node;
    }

    protected props: TSXeProperties & T;
    constructor(props: T) {
        this.props = props;
    }

    public abstract render(): Node;

    public innerRender(): TSXeNode {
        if (!this._node) {
            this._node = this.render() as TSXeNode;
            this._node.___tsxe_component = this;
        }

        return this._node;
    }

    public static isComponent(obj: any): obj is TSXeComponent<any> {
        return Boolean(obj && obj.___tsxe_component && obj.___tsxe_component === true);
    }

    public static getComponentFromNode(obj: Node) {
        return (obj as TSXeNode)?.___tsxe_component || null;
    }

    public static createComponent<P extends TSXeProperties, T extends TSXeComponent<P>>(name: { new(props: P): T }) : T;
    public static createComponent<P extends TSXeProperties, T extends TSXeComponent<P>>(name: { new(props: P): T }, props: P) : T;
    public static createComponent<P extends TSXeProperties, T extends TSXeComponent<P>>(
        name: { new(props: P): T },
        props: P, ...content: (string | Node | TSXeComponent<any>)[]):T;
    public static createComponent<P extends TSXeProperties, T extends TSXeComponent<P>>(
        name: { new(props: P): T },
        props?: P, ...content: (string | Node | TSXeComponent<any>)[]) {
        const _props = props || ({} as P);
        _props.children = content;

        let component = new name(_props);
        component.innerRender();
        return component;
    }
}

function renderIntrinsicElement<P extends TSXeProperties>(name: string, props: P) {
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

class TSXeFragment extends TSXeComponent<any> {
    render(): Node {
        let fragment = document.createDocumentFragment();

        if (this.props.children)
            appendChilden(fragment, flatten(this.props.children));

        return fragment;
    }
    innerRender(): TSXeNode {
        return this.render();
    }
}

function appendChilden(element: Element | DocumentFragment, content: (string | Node | TSXeComponent<any>)[]) {
    let e = element as Node;
    let docFrag = document.createDocumentFragment();

    content.forEach((argItem) => {
        TSXe.render(argItem, docFrag);
    });

    e.appendChild(docFrag);
}


export const TSXe = {
    createElement<P extends TSXeProperties, T extends TSXeComponent<P>>(
        name: string | { new(props: P): T },
        props: P, ...content: (string | Node | TSXeComponent<any>)[]) {

        if (typeof name === "string") {
            props = props || {};
            props.children = content;
            return renderIntrinsicElement(name, props);
        } else {
            let component = TSXeComponent.createComponent(name, props, ...content);
            return component.innerRender();
        }
    },
    Fragment: TSXeFragment,
    Component: TSXeComponent,
    render(component: string | Node | TSXeComponent<any>, root: Node) {
        if (component instanceof Node) {
            root.appendChild(component);
        } else if (TSXeComponent.isComponent(component)) {
            root.appendChild(component.innerRender());
        } else {
            root.appendChild(document.createTextNode(String(component)));
        }
    }
};

export const Fragment = TSXeFragment;
export default TSXe;