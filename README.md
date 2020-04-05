# TSXe

Create HTML elements by TSX/JSX syntax without React.

## Install

```sh
$ npm install tsxe --save-dev
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
            <button onClick={()=>{ alert("Hello World"); }}>Say Hello</button>
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
button.addEventListener("click", () => { alert("Hello World"); });

// Append them together
appBody.append(button);
appWrapper.append(appTitle, appBody);

document.body.appendChild(appWrapper);
```

## License

Copyright (c) 2020 hkm-mo

Licensed under the MIT license.