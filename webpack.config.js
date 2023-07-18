const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
     mode: "development",
     entry: {
          index: "./src/script-files/index.js",
     },
     devtool: "inline-source-map",
     devServer: {
          static: "./dist",
          hot: true,
     },
     plugins: [
          new HtmlWebpackPlugin({
               title: "Todo List",
               template: "./src/index.html",
          }),
     ],
     output: {
          filename: "bundle.js",
          path: path.resolve(__dirname, "dist"),
          clean: true,
     },
     module: {
          rules: [
               {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
               },
               {
                    test: /\.(svg|jpg|jpeg|png|tif|)$/i,
                    type: "asset/resource",
               },
          ],
     },
};
