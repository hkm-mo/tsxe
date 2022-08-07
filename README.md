# TSXe

Create DOM objects by JSX syntax without React. 

JSX syntax have the advantages of easy to write, read and maintenance for complicated HTML elements creation in JavaScript and JSX usually mixed with React JS.

However, if you may want to control the DOM directly or don't want to deal with React lifecycle, TSXe will be an option.
It makes possible to create DOM objects with JSX syntax without React and supports most browsers, includes IE 11.

## Featues

* Supports Visual Studio Code's IntelliSense
* Supports custom components, both Function Component and Class Component
* Supports fragments (Short Syntax only available on TypeScript 4.0+)
* Supports Refs
* Type checking for HTML tags and attributes
* Type checking for CSS properties and values (by [CSSType](https://www.npmjs.com/package/csstype))

## Install

```sh
npm install tsxe csstype
```


## Setup
TSXe supports both TSX and JSX style of syntax. 
To enable your code run in browsers, a transpiler and JavaScript module bundler are required.


### TSX: webpack + TypeScript


Install the packages you neeeded

```sh
npm install --save-dev typescript webpack webpack-cli
```

Create / Update your tsconfig.json:

```JSONC
{
    "compilerOptions": {
        "module": "CommonJS",
        "jsx": "react",
        "jsxFactory": "TSXe.createElement",
        /* TypeScript 4.0+ Only */
        "jsxFragmentFactory": "TSXe.Fragment",
    }
}
```


Create / Update your webpack.config.js:

```JavaScript
const path = require("path");

module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: {
        index: __dirname + "/src/index.tsx",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js"
    },
    plugins: [
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: /src(\\|\/)/,
                use: ["ts-loader"],
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts"],
    }
};
```


### JSX: webpack + Babel

Install the packages you neeeded

```sh
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli babel-loader
```

Create / Update your webpack.config.js

```JavaScript
const path = require("path");

return {
    // This is a partial configuration
    // For the details, please refer webpack and Babel official documents
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                [
                                    "@babel/preset-react",
                                    {
                                        pragma: "TSXe.createElement",
                                        pragmaFrag: "TSXe.Fragment"
                                    }
                                ]
                            ]
                        }
                    },
                ],
            }
        ],
    },
    resolve: {
        extensions: [".jsx", ".js"],
    }
};
```

## Examples

### Elements Creation

```tsx
import TSXe from "tsxe";

document.body.appendChild(
    <div class="appWrapper">
        <h1>My Great App</h1>
        <div class="appBody" dataset={{appData: "Hello"}}>
            <button onClick={()=>{ alert("Hello World"); }} style={{color: "red"}}>
                Say Hello
            </button>
        </div>
    </div>
);
```


### Class Component
```tsx
import TSXe from "tsxe";

interface MyComponentProps {
    title: string
}

class MyComponent extends TSXe.Component<MyComponentProps> {
    render(): Node {
        return <h1>{this.props.title}</h1>
    }
}

document.body.appendChild(<MyComponent title="My Awsome Component"/>);
```

### Function Component
```tsx
import TSXe from "tsxe";

interface FuncProps {
    name: string
}
function FuncRender(props: TSXe.PropsWithChildren<FuncProps>) {
    return (
        <div>
            <h1>{props.name}</h1>
            {props.children}
        </div>
    );
}

document.body.appendChild(
    <FuncRender name="Function Render">
        <div>Some text here</div>
    </FuncRender>
);
```

### Fragment
```tsx
import TSXe from "tsxe";

var fragment = (
    <TSXe.Fragment>
        <label for="password">Password</label>
        <input id="password" type="password" />
    </TSXe.Fragment>
);

document.body.appendChild(<div>{fragment}</div>);
```


### Event
```tsx
import TSXe from "tsxe";

interface WelcomeProps {
    name: string
}
class Welcome extends TSXe.Component<WelcomeProps> {
    private count = 0;
    getTextContent() {
        return `Hello, ${this.props.name}. You clicked me ${this.count} times.`;
    }
    update() {
        this.node.textContent = this.getTextContent();
    }
    addCount() {
        this.count++;
        this.update();
    }
    render() {
        return <h1 onClick={this.addCount.bind(this)}>{this.getTextContent()}</h1>;
    }
}

document.body.appendChild(<Welcome name="Alex" ref={welcomeComponent}></Welcome>)
```


## APIs

### TSXe.render(component: string | Node | Component&lt;any&gt;, container: Node): void

Render Text / Node / Component into the container node.


### TSXe.Component&lt;T&gt;

Base class of class component, all class components should inherit from this class.

### TSXe.Component.createComponent(name: Component&lt;P&gt;, props?: TSXeProperties, ...content: (string | Node Component&lt;any&gt;)[]): Node

Create component with specificed component class. This method is a low level method. 

### TSXe.createRef&lt;T&gt;()

Create reference object.

Example:
```TSX
import TSXe from "tsxe";

interface WelcomeProps {
    name: string
}
class Welcome extends TSXe.Component<WelcomeProps> {
    updateName(name: string) {
        this.node.textContent = `Hello, ${name}`;
    }
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

const welcomeComponent = TSXe.createRef<Welcome>();
document.body.appendChild(<Welcome name="Boo" ref={welcomeComponent}></Welcome>);

welcomeComponent.current.updateName("Alex");
```


## Supported Browsers

Modern browsers and Internet Explorer 11 


## Roadmap

* And eslint to ensure the code quality
* Add unit tests
* Add async rendering
* Add dependency injection
* Create automatic tools to update JSX content
* Create command line tools to create new projects


## License

Copyright (c) 2020 - 2022 hkm-mo

Licensed under the MIT license.

HTML document by [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML) is licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).