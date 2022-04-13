const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let mode = 'development'

if (process.env.NODE_ENV === "production") {
    mode = "production"
}

module.exports = {
    mode,
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ""}
                    },
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
}