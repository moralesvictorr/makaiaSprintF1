const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { loader } = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        dev: path.resolve(__dirname, "./src/index.js")
        },
        output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './build')
        },
        devServer: {
        open: true
        },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.s?css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./",
                        },
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: ["file-loader?name=assets/[name].[ext]", "image-webpack-loader"],
            },
            {
                test: /\.(woff)$/i,
                use: ["file-loader?name=assets/[name].[ext]"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
}; 