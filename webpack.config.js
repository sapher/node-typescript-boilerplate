const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    target: "node",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
}