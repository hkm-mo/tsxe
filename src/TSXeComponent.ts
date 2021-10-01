import { TSXeNode, TSXeProperties } from "./interfaces";

interface ComponentProps {
}

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

    public abstract render(): Node;

    public innerRender(): TSXeNode {
        if (!this._node) {
            this._node = this.render() as TSXeNode;
            this._node.___tsxe_component = this;
        }

        return this._node;
    }

    public static isComponent(obj: any): obj is Component<any> {
        return Boolean(obj && obj.___tsxe_component && obj.___tsxe_component === true);
    }

    public static getComponentFromNode(obj: Node) {
        return (obj as TSXeNode)?.___tsxe_component || null;
    }

    public static createComponent<P extends TSXeProperties, T extends Component<P>>(name: { new(props: P): T }) : T;
    public static createComponent<P extends TSXeProperties, T extends Component<P>>(name: { new(props: P): T }, props: P) : T;
    public static createComponent<P extends TSXeProperties, T extends Component<P>>(
        name: { new(props: P): T },
        props: P, ...content: (string | Node | Component<any>)[]):T;
    public static createComponent<P extends TSXeProperties, T extends Component<P>>(
        name: { new(props: P): T },
        props?: P, ...content: (string | Node | Component<any>)[]) {
        const _props = props || ({} as P);
        _props.children = content;

        let component = new name(_props);
        component.innerRender();
        return component;
    }
}
