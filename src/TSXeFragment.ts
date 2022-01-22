import { TSXeNode } from "./interfaces";
import Component from "./TSXeComponent";
import { appendChilden, flatten } from "./utilities";

/**
 * A class for building HTML Fragment.
 */
export class TSXeFragment extends Component<any> {
    render(): Node {
        let fragment = document.createDocumentFragment();

        if (this.props.children)
            appendChilden(fragment, flatten(this.props.children));

        return fragment;
    }
}