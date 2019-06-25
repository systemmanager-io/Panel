const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/js/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "build"),
        // publicPath: "",
        filename: "index.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "build/"),
        headers: { 'Access-Control-Allow-Origin': '*' },
        port: 3000,
        inline: true,
        hotOnly: true
    },
    plugins: [new HtmlWebpackPlugin()]
};
