import { TSXeNode, TSXeProperties } from "./interfaces";

interface ComponentProps {
}

/**
 * An abstract class for building custom component.
 */
export default abstract class Component<T = ComponentProps> {
    private readonly ___tsxe_component = true;

    private _node: TSXeNode | null = null;
    public get node(): TSXeNode | null {
        return this._node;
    }

    protected props: TSXeProperties & T;

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
            this._node = this.render() as TSXeNode;
            this._node.___tsxe_component = this;
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

    public static isComponent(obj: any): obj is Component<any> {
        return Boolean(obj && obj.___tsxe_component && obj.___tsxe_component === true);
    }

    /**
     * Get component instance from DOM object
     * @param node A node 
     * @returns An instance of TSXe.Component or null
     */
    public static getComponentFromNode<C extends Component = Component<any>>(node: Node): C {
        return (node as TSXeNode)?.___tsxe_component as C || null;
    }

    /**
     * Create component with specificed component class
     * @param name 
     * @returns Component DOM output
     */
    public static createComponent<P extends TSXeProperties, T extends Component<P>>(name: { new(props: P): T }) : T;
    /**
     * Create component with specificed component class
     * @param name Specificed component class
     * @param props Properties for constructing the component
     * @returns Component DOM output
     */
    public static createComponent<P extends TSXeProperties, T extends Component<P>>(name: { new(props: P): T }, props: P) : T;
    /**
     * Create component with specificed component class
     * @param name Specificed component class
     * @param props Properties for constructing the component
     * @param content Contents wrapped by the component
     * @returns Component DOM output
     */
    public static createComponent<P extends TSXeProperties, T extends Component<P>>(
        name: { new(props: P): T },
        props: P, ...content: (string | Node | Component<any>)[]):T;
    /**
     * Create component with specificed component class
     * @param name Specificed component class
     * @param props Properties for constructing the component
     * @param content Contents wrapped by the component
     * @returns Component DOM output
     */
    public static createComponent<P extends TSXeProperties, T extends Component<P>>(
        name: { new(props: P): T },
        props?: P, ...content: (string | Node | Component<any>)[]) {
        const _props = props || ({} as P);
        _props.children = content;
        
        let component = new name(_props);
        component.safeRender();
        return component;
    }
}
