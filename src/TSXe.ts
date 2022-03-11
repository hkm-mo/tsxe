
export { Fragment as Fragment } from "./Fragment";
export { RefObject, FunctionComponent,
    ClassComponent, PropsWithChildren } from "./interfaces"
export { Component } from "./Component";
export { createElement, createRef, render } from "./utilities";

import { Component } from "./Component";

/**
 * @deprecated To align with React, please use `TSXe.Component` instead
 */
export const TSXeComponent = Component;

/**
 * @deprecated To align with React, please use `JSX.Element` instead
 */
 export type TSXeNode = JSX.Element;