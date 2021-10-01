

import { TSXeProperties } from "./interfaces";
import Component from "./TSXeComponent";
import { TSXeFragment } from "./TSXeFragment";
import { appendChilden, flatten } from "./utilities";

/**
 * @author hkm-mo
 * @see {@link https://github.com/hkm-mo/tsxe|GitHub}
 * @license MIT
 */

const eventAttr = /^on([A-Z][a-zA-Z]*?)(Capture)?$/;

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

export const TSXe = {
    createElement<P extends TSXeProperties, T extends Component<P>>(
        name: string | { new(props: P): T },
        props: P, ...content: (string | Node | Component<any>)[]) {

        if (typeof name === "string") {
            props = props || {};
            props.children = content;
            return renderIntrinsicElement(name, props);
        } else {
            let component = Component.createComponent(name, props, ...content);
            return component.innerRender();
        }
    },
    Fragment: TSXeFragment,
    Component: Component,
    render(component: string | Node | Component<any>, root: Node) {
        if (component instanceof Node) {
            root.appendChild(component);
        } else if (Component.isComponent(component)) {
            root.appendChild(component.innerRender());
        } else {
            root.appendChild(document.createTextNode(String(component)));
        }
    }
};

export const Fragment = TSXeFragment;
export default TSXe;

export const TSXeComponent = Component;