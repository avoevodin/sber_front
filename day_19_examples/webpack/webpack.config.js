const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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
    plugins: [new MiniCssExtractPlugin()],
}