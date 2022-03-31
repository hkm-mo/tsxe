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

test("styles string", () => {
    const ref = TSXe.createRef<HTMLDivElement>();
    document.body.appendChild(<div ref={ref} style="margin-left: 10px"></div>);

    expect(ref.current?.style.marginLeft).toBe("10px");
});

test("styles object", () => {
    const ref = TSXe.createRef<HTMLDivElement>();
    document.body.appendChild(<div ref={ref} style={{marginLeft: "10px"}}></div>);

    expect(ref.current?.style.marginLeft).toBe("10px");
});


test("data attributes", () => {
    const ref = TSXe.createRef<HTMLDivElement>();
    document.body.appendChild(<div ref={ref} data-test-info={helloWorld}></div>);

    expect(ref.current?.dataset.testInfo).toBe(helloWorld);
});

test("dataset object", () => {
    const ref = TSXe.createRef<HTMLDivElement>();
    document.body.appendChild(<div ref={ref} dataset={{testInfo: helloWorld}}></div>);

    expect(ref.current?.dataset.testInfo).toBe(helloWorld);
});