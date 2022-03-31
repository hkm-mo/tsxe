import TSXe from "../src";

const helloWorld = "Hello World";

beforeEach(() => {
    document.body.innerHTML = "";
});

test("create element", () => {
    const elmId = "hello";

    document.body.appendChild(<div id={elmId}>{helloWorld}</div>);

    const elm = document.getElementById(elmId);
    
    expect(elm).not.toBeNull();
    expect(elm?.textContent).toBe(helloWorld);
});

test("nested array", () => {
    const children = [
        ["Hello "],
        [["World", [<span>!</span>]]]
    ];

    document.body.appendChild(<div id="nestedArray">{children}</div>);

    const elm = document.getElementById("nestedArray");

    expect(elm?.innerHTML).toBe("Hello World<span>!</span>");
});


test("create Ref object", () => {
    const elmId = "refObjDiv";
    const ref = TSXe.createRef<HTMLDivElement>();

    document.body.appendChild(<div id={elmId} ref={ref}></div>);

    const elm = document.getElementById(elmId);

    expect(elm).toBe(ref.current);
});


test("create Ref func", () => {
    const elmId = "refFuncDiv";
    const ref = (ref: HTMLDivElement) => {
        const elm = document.getElementById(elmId);
        expect(elm).toBe(ref);
    };

    document.body.appendChild(<div id={elmId} ref={ref}></div>);
});

test("fragment", () => {
    // <span/> should not count as <body/>'s child
    document.body.appendChild(
        <>
            <div></div>
            <div></div>
            <div><span></span></div>
        </>
    );

    expect(document.body.childNodes.length).toBe(3);
});