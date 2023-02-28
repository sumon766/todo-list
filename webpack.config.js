const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './dist/main.js',
        clean: true
    },

    devServer: {
        static: './dist',
    },

    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
        })
    ],

    // optimization: {
    //     runtimeChunk: 'single',
    // },
}