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

const ___tsxe_component_fingerprint = new Object();
export abstract class TSXeComponent<T = void> {
    private readonly ___tsxe_component_fingerprint = ___tsxe_component_fingerprint;
    protected props: TSXeProperties & T;
    constructor(props: T) {
        this.props = props;
    }

    abstract render(): Node;

    public static IsComponent(obj: any): obj is TSXeComponent<any> {
        return Boolean(obj && obj.___tsxe_component_fingerprint && obj.___tsxe_component_fingerprint === ___tsxe_component_fingerprint && "render" in obj);
    }
}

class TSXeElement extends TSXeComponent<TSXeProperties> {
    protected name: string;
    constructor(name: string, props: TSXeProperties) {
        super(props);
        this.name = name;
    }
    render(): Node {
        let element = document.createElement(this.name);

        Object.keys(this.props)
            .forEach(key => {
                const value = this.props[key];
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
                    }
                    else if (key === "dataset") {
                        for (const key in value) {
                            if (value.hasOwnProperty(key))
                                element.setAttribute("data-" + key, value[key]);
                        }
                    }
                    else if (key === "style" && typeof value === "object")
                        Object.assign(element.style, value);
                    else if (typeof value === "boolean") {
                        if (value)
                            element.setAttribute(key, key);
                    }
                    else if (key === "children") {
                        appendChilden(element, flatten(value));
                    }
                    else if (key !== "children")
                        element.setAttribute(key, value as string);
                }
            });

        return element;
    }
}

class TSXeFragment extends TSXeComponent<any> {
    render(): Node {
        let fragment = document.createDocumentFragment();

        if (this.props.children)
            appendChilden(fragment, flatten(this.props.children));

        return fragment;
    }
}

function appendChilden(element: Element | DocumentFragment, content: (string | Node | TSXeComponent<any>)[]) {
    let e = element as Node;
    let docFrag = document.createDocumentFragment();

    content.forEach((argItem) => {
        if (argItem instanceof Node) {
            docFrag.appendChild(argItem);
        } else if (TSXeComponent.IsComponent(argItem)) {
            docFrag.appendChild(argItem.render());
        } else {
            docFrag.appendChild(document.createTextNode(String(argItem)));
        }
    });

    e.appendChild(docFrag);
}

export const TSXe = {
    createElement<P extends TSXeProperties, T extends TSXeComponent<P>>(
        name: string | { new(props: P): T },
        props: P, ...content: (string | Node | TSXeComponent<any>)[]) {
        props = props || {};
        props.children = content;

        if (typeof name === "string") {
            let element = new TSXeElement(name, props);
            return element.render();
        } else {
            let component = new name(props);
            return component.render();
        }
    },
    Fragment: TSXeFragment,
    Component: TSXeComponent,
};


export const Fragment = TSXeFragment;
export default TSXe;