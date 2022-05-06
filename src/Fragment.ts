import { Component } from "./Component";
import { appendChilden, flatten } from "./utilities";

/**
 * A class for building HTML Fragment.
 */
export class Fragment extends Component {
    render(): Node {
        const fragment = document.createDocumentFragment();

        if (this.props.children)
            appendChilden(fragment, flatten(this.props.children));

        return fragment;
    }
}