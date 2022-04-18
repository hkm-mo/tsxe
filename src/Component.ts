import { ClassComponent, Properties } from "./interfaces";

const componentMap = new WeakMap();

interface ComponentProps {
}

/**
 * An abstract class for building custom component.
 */
export abstract class Component<T = ComponentProps> {

    private _node: JSX.Element | null = null;
    public get node(): JSX.Element | null {
        return this._node;
    }

    protected props: Properties & T;

    constructor(props: T) {
        this.props = props;
    }

    /**
     * This method is going to build DOM objects / Nodes
     */
    public abstract render(): Node;

    /**
     * This method render component and make sure it's to be rendered once.
     * @returns The `Node` object just rendered
     */
    public safeRender(): Node {
        if (!this._node) {
            this._node = this.render();
            componentMap.set(this._node, this);
        }

        return this._node;
    }

    /**
     * @deprecated Component.innerRender was replaced by Component.safeRender
     */
    public innerRender(): Node {
        console.warn("[Deprecated] Component.innerRender was replaced by Component.safeRender");
        return this.safeRender();
    }

    /**
     * Determines whether the passed value is `TSXe.Component`
     * @param obj The value to be checked.
     * @returns `true` if the value is a `TSXe.Component`; otherwise, `false`.
     */
    public static isComponent<C extends Component = Component<any>>(obj: any): obj is C {
        return Boolean(obj && obj instanceof Component);
    }

    /**
     * Get component instance from DOM object
     * @param node A node 
     * @returns An instance of TSXe.Component or null
     */
    public static getComponentFromNode<C extends Component = Component<any>>(node: Node): C {
        return componentMap.get(node);
    }

    /**
     * Create component with specificed component class
     * @param name 
     * @returns Component DOM output
     */
    public static createComponent<P extends Properties, T extends Component<P>>(name: ClassComponent<P, T>) : T;
    /**
     * Create component with specificed component class
     * @param name Specificed component class
     * @param props Properties for constructing the component
     * @returns Component DOM output
     */
    public static createComponent<P extends Properties, T extends Component<P>>(name: ClassComponent<P, T>, props: P) : T;
    /**
     * Create component with specificed component class
     * @param name Specificed component class
     * @param props Properties for constructing the component
     * @param content Contents wrapped by the component
     * @returns Component DOM output
     */
    public static createComponent<P extends Properties, T extends Component<P>>(
        name: ClassComponent<P, T>,
        props: P, ...content: (string | Node | Component<any>)[]):T;
    /**
     * Create component with specificed component class
     * @param name Specificed component class
     * @param props Properties for constructing the component
     * @param content Contents wrapped by the component
     * @returns Component DOM output
     */
    public static createComponent<P extends Properties, T extends Component<P>>(
        name: ClassComponent<P, T>,
        props?: P, ...content: (string | Node | Component<any>)[]) {
        const _props = props || ({} as P);
        _props.children = content;
        
        let component = new name(_props);
        component.safeRender();
        return component;
    }
}


