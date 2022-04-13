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
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ""}
                    },
                    "css-loader"
                ],
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
}