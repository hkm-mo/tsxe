import Component from "./TSXeComponent";


export interface TSXeNode extends Node {
    ___tsxe_component?: Component<any>
}

export interface TSXeProperties {
    children?: (string | Node | Component<any>)[],
    [key: string]: any
}