const path = require("path");

const config = {
    entry: {
        index: __dirname + "/src/index.ts",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        library: {
            name: "tsxe",
            type: "umd",
            umdNamedDefine: true
        },
        clean: true,
    },
    watchOptions: {
        aggregateTimeout: 600,
        ignored: /node_modules/,
    },
    plugins: [
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: /src(\\|\/)/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            instance: "todo",
                            configFile: "tsconfig.json"
                        }
                    },
                ],
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    }
};

module.exports = (env, argv) => {
    if (argv.mode === "development") {
        config.devtool = "source-map";
    } else if (argv.mode === "production") {
        // * add some prod rules here
    } else {
        throw new Error("Specify env");
    }

    return config;
};