import Component from "./TSXeComponent";


export interface TSXeNode extends Node {
    ___tsxe_component: Component<any>
}

export interface TSXeProperties {
    children?: (string | Node | Component<any>)[],
    [key: string]: any
}

/**
 * @internal You shouldn't need to use this type since you never see these attributes
 * inside your component or have to validate them.
 */
export interface Attributes {
}


export interface RefObject<T> {
    readonly current: T | null;
}

export type RefCallback<T> = { bivarianceHack(instance: T | null): void }["bivarianceHack"];

export type Ref<T> = RefCallback<T> | RefObject<T> | null;

export interface RefAttributes<T> extends Attributes {
    ref?: Ref<T> | undefined;
}

export interface ClassAttributes<T> extends Attributes {
    ref?: Ref<T> | undefined;
}