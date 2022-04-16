import TSXe from "../src";

const helloWorld = "Hello World";

beforeEach(() => {
    document.body.innerHTML = "";
});

test("create element", () => {
    const content = ["Hello"," ", "World"];

    document.body.appendChild(<div>{content}</div>);

    expect(document.body.innerHTML).toMatchSnapshot();
});

test("nested array", () => {
    const children = [
        ["Hello "],
        [["World", [<span>!</span>]]]
    ];

    document.body.appendChild(<div>{children}</div>);

    expect(document.body.innerHTML).toMatchSnapshot();
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

    expect(document.body.innerHTML).toMatchSnapshot();
});

test("styles string", () => {
    const ref = TSXe.createRef<HTMLDivElement>();
    document.body.appendChild(<div ref={ref} style="margin-left: 10px"></div>);

    expect(document.body.innerHTML).toMatchSnapshot();
});

test("styles object", () => {
    const ref = TSXe.createRef<HTMLDivElement>();
    document.body.appendChild(<div ref={ref} style={{marginLeft: "10px"}}></div>);

    expect(document.body.innerHTML).toMatchSnapshot();
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