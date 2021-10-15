# TSXe


Create HTML elements by TSX syntax without React. 

TSXe is not another React. It was designed for adopting TSX syntax but without learning curve of React. 
If you want to enjoy the React ecosystem, please use React instead.


---
**Breaking Change**

From version 1.0.0, JSX.Element type was changed to `Node` from `HTMLElement`.

---


## Featues

* Supports Visual Studio Code's IntelliSense
* Supports custom components
* Supports fragments (Short Syntax only available on TypeScript 4.0+)
* Type checking for HTML tags and attributes
* Type checking for CSS properties and values (by [CSSType](https://www.npmjs.com/package/csstype))

## Install

```sh
$ npm install tsxe
```

## Setup

Update your tsconfig.json:

```json
{
    "compilerOptions": {
        "jsx": "react",
        "jsxFactory": "TSXe.createElement",
        /* TypeScript 4.0+ Only */
        "jsxFragmentFactory": "TSXe.Fragment",
    }
}
```

## Usage

### Getting Started

#### TSX/JSX code

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

#### Equivalent

```ts
const appWrapper = document.createElement("div");
appWrapper.className = "appWrapper";

const appTitle = document.createElement("h1");
appTitle.textContent = "My Great App";

const appBody = document.createElement("div");
appBody.className = "appBody";
appBody.setAttribute("data-appData", "Hello");

const button = document.createElement("button");
button.textContent = "Say Hello";
button.style.color = "red";
button.addEventListener("click", () => { alert("Hello World"); });

// Append them together
appBody.append(button);
appWrapper.append(appTitle, appBody);

document.body.appendChild(appWrapper);
```

### Custom Component
```tsx
import { TSXe, TSXeComponent } from "tsxe";

interface MyComponentProps {
    title: string
}

class MyComponent extends TSXeComponent<MyComponentProps> {
    render(): Node {
        return <h1>{this.props.title}</h1>
    }
}

document.body.appendChild(<MyComponent title="My Awsome Component"/>);
```

### Fragment
```tsx
import { TSXe, Fragment } from "tsxe";

var fragment = (
    <Fragment>
        <label for="password">Password</label>
        <input id="password" type="password" />
    </Fragment>
);

document.body.appendChild(<div>{fragment}</div>)
```

## Supported Browsers

Modern browsers and Internet Explorer 11 

## License

Copyright (c) 2020 hkm-mo

Licensed under the MIT license.

HTML document by [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML) is licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).