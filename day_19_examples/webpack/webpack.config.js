const MiniCssExtractPlugin = require("mini-css-extract-plugin")
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
            }
        ]
    },
    target,
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3005, 
        open: true,
        hot: true,
    },
    plugins: [new MiniCssExtractPlugin()],
}