/// <reference path="./JSX.ts" />

import Component from "./TSXeComponent";
import { TSXeFragment } from "./TSXeFragment";
import { createElement, createRef, render } from "./utilities";

/**
 * @author hkm-mo
 * @see {@link https://github.com/hkm-mo/tsxe|GitHub}
 * @license MIT
 */

export const TSXe = {
    createElement: createElement,
    Fragment: TSXeFragment,
    Component: Component,
    render: render,
    createRef: createRef
};

export const Fragment = TSXeFragment;
export default TSXe;

export const TSXeComponent = Component;