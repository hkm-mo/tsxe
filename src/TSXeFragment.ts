import { TSXeNode } from "./interfaces";
import Component from "./TSXeComponent";
import { appendChilden, flatten } from "./utilities";

export class TSXeFragment extends Component<any> {
    render(): Node {
        let fragment = document.createDocumentFragment();

        if (this.props.children)
            appendChilden(fragment, flatten(this.props.children));

        return fragment;
    }
    safeRender(): TSXeNode {
        return this.render();
    }
}