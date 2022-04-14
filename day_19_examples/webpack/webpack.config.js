const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

let mode = 'development'
let target = 'web'

if (process.env.NODE_ENV === "production") {
    mode = "production"
    target = "browserslist"
}

module.exports = {
    mode,
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ""}
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.jsx?/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    }
                }
            }
        ]
    },
    target,
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3005, 
        open: true,
        hot: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html",
        })
    ],
}