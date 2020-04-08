# TSXe

Create HTML elements by TSX/JSX syntax without React.

## Featues

* Supports Visual Studio Code's IntelliSense
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
    }
}
```

## Usage

TSX/JSX code:

```tsx
import TSXe from "tsxe";

document.body.appendChild(
    <div class="appWrapper">
        <h1>My Great App</h1>
        <div class="appBody">
            <button onClick={()=>{ alert("Hello World"); }} style={{color: "red"}}>Say Hello</button>
        </div>
    </div>
);
```

Equivalent:

```ts
const appWrapper = document.createElement("div");
appWrapper.className = "appWrapper";

const appTitle = document.createElement("h1");
appTitle.textContent = "My Great App";

const appBody = document.createElement("div");
appBody.className = "appBody";

const button = document.createElement("button");
button.textContent = "Say Hello";
button.style.color = "red";
button.addEventListener("click", () => { alert("Hello World"); });

// Append them together
appBody.append(button);
appWrapper.append(appTitle, appBody);

document.body.appendChild(appWrapper);
```

## Limitation

* Support HTML elements only
* Do NOT support Fragments
* Do NOT support data-* attributes

## License

Copyright (c) 2020 hkm-mo

Licensed under the MIT license.