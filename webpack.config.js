const path = require("path"); // eslint-disable-line
const HtmlWebpackPlugin = require("html-webpack-plugin"); // eslint-disable-line
const { EnvironmentPlugin } = require("webpack"); // eslint-disable-line
const DotenvWebpackPlugin = require("dotenv-webpack"); // eslint-disable-line

// eslint-disable-next-line
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"), // eslint-disable-line
    },
    resolve: {
        extensions: [".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack", "url-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("./public/index.html"),
            favicon: path.resolve("./public/shopping-bag.svg"),
        }),
        new DotenvWebpackPlugin(),
        new EnvironmentPlugin({}),
    ],
};
