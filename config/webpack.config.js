const path = require("path");
const hwp = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.js"
    },

    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: "index.js"
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            }
        ]
    },

    plugins: [
        new hwp({
            title: "三角形",
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            chunks:['index'],
            filename: "index.html"
        })
    ]
}