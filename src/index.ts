/// <reference path="./JSX.ts" />

import _Component from "./TSXeComponent";
import { TSXeFragment } from "./TSXeFragment";
import { createElement as _createElement, createRef as _createRef, render as _render } from "./utilities";
import { TSXeNode as _TSXeNode, RefObject as _RefObject } from "./interfaces";

/**
 * @author hkm-mo
 * @see {@link https://github.com/hkm-mo/tsxe|GitHub}
 * @license MIT
 */


export namespace TSXe {
    export type RefObject<T> = _RefObject<T>;
    export type TSXeNode = _TSXeNode;
    export const createElement = _createElement;
    export const Fragment = TSXeFragment;
    export const Component = _Component;
    export const render = _render;
    export const createRef = _createRef
}

export const Fragment = TSXeFragment;
export default TSXe;

export const TSXeComponent = _Component;

export type TSXeNode = _TSXeNode;
export type RefObject<T> = _RefObject<T>;