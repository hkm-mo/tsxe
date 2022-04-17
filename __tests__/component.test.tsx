import TSXe from "../src";

const helloWorld = "Hello World";

interface ClassComponentProps {
    name: string
}

interface FuncComponentProps {
    name: string
}

class ClassComponent extends TSXe.Component<ClassComponentProps> {
    private _nameDiv?: HTMLDivElement;

    constructor(props: ClassComponentProps) {
        super(props);
    }

    private setNameDiv(div: HTMLDivElement) {
        this._nameDiv = div;
    }

    setName(name: string) {
        if (this._nameDiv) {
            this._nameDiv.textContent = name;
        }
    }

    public render(): Node {
        return (
            <div>
                <div ref={this.setNameDiv}>{this.props.name}</div>
                {this.props.children}
            </div>
        );
    }
}

const FuncComponent = (props: TSXe.PropsWithChildren<FuncComponentProps>) => {
    return (
        <div>
            <div>{props.name}</div>
            {props.children}
        </div>
    );
};



describe("class component", () => {
    var funcComponentRef = TSXe.createRef<ClassComponent>();
    beforeAll(() => {
        document.body.innerHTML = "";
        document.body.appendChild(<ClassComponent ref={funcComponentRef} name={helloWorld} />);
    });

    test("class component creation", () => {
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    test("class component ref", () => {
        expect(funcComponentRef.current).toBeInstanceOf(ClassComponent);

        funcComponentRef.current?.setName("New name");
        expect(document.body.innerHTML).toMatchSnapshot();
    });

    test("class component and node", () => {
        // Assure first node is the component node
        var componentNode = document.body.childNodes[0];

        expect(componentNode).toEqual(funcComponentRef.current?.node);
    });

    test("class component from node", () => {
        // Assure first node is the component node
        var componentNode = document.body.childNodes[0];
        var componentInstance = TSXe.Component.getComponentFromNode(componentNode);

        expect(componentInstance).toEqual(funcComponentRef.current);
    });

    test("check if class component", () => {
        expect(TSXe.Component.isComponent(funcComponentRef.current)).toBeTruthy();

        // Control case
        expect(TSXe.Component.isComponent({})).toBeFalsy();
    });

    // TSXe.Component.prototype.innerRender is a legacy function. 
    // This test case should be kept until it's removed.
    test("class component innerRender", () => {
        const spy = jest.spyOn(global.console, "warn").mockImplementation(jest.fn());

        // Assure first node is the component node
        var componentNode = document.body.childNodes[0];

        expect(funcComponentRef.current?.innerRender()).toEqual(componentNode);
        expect(console.warn).toBeCalled();

        spy.mockReset();
    });

    test("class component manual creation", () => {
        const component = TSXe.Component.createComponent(ClassComponent, {name : "Test"}, <div></div>);
        
        document.body.innerHTML = "";
        document.body.appendChild(component.safeRender());

        expect(document.body.innerHTML).toMatchSnapshot();
    });
});


describe("function component", () => {
    beforeAll(() => {
        document.body.innerHTML = "";
    });

    test("function component creation", () => {
        document.body.appendChild(<FuncComponent name={helloWorld} />);

        expect(document.body.innerHTML).toMatchSnapshot();
    });
})

