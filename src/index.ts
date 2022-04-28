/// <reference path="./JSX.ts" />

/**
 * @author hkm-mo
 * @see {@link https://github.com/hkm-mo/tsxe|GitHub}
 * @license MIT
 */
import * as TSXeObj from "./TSXe";
export * from "./TSXe";
export default TSXeObj;

/**
 * @deprecated Please use `import TSXe from "tsxe"` instead
 */
export const TSXe = TSXeObj;

/**
 * @deprecated Please use `import TSXe from "tsxe"` instead
 */
export namespace TSXe {
    export type TSXeNode = TSXeObj.TSXeNode;
    export type Fragment = TSXeObj.Fragment;
    export type Component = TSXeObj.Component;
}