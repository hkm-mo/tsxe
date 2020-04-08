/// <reference path="../global.d.ts" />

/**
 * @author hkm-mo
 * @see {@link https://github.com/hkm-mo/tsxe|GitHub}
 * @license MIT
 */

const eventAttr = /^on([A-Z][a-zA-Z]*?)(Capture)?$/;

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


// Polyfill Element Append
const appendElement = typeof Element.prototype.append === "function" ?
    Element.prototype.append :
    function (this: Element, ...args: (string | Node)[]) {
        // Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
    }

export const TSXe = {
    createElement(name: string, props: any, ...content: (string | Node)[]) {
        props = props || {};
        let element = document.createElement(name);

        Object.keys(props)
            .forEach(key => {
                const value = props[key];
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
                else if (key === "className")
                    element.setAttribute("class", value as string);
                else if (key === "style" && typeof value === "object")
                    Object.assign(element.style, value);
                else if (typeof value === "boolean") {
                    if (value)
                        element.setAttribute(key, key);
                }
                else
                    element.setAttribute(key, value as string);

            });

        appendElement.apply(element, flatten(content));
        return element;
    }
};

export default TSXe;