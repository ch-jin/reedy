var path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: {
    client: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client?path=http://localhost:4000/" +
        "__webpack_hmr",
      "react-error-overlay",
      "./frontend/components/reedy.jsx",
    ],
  },
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle1.js",
    publicPath: "http://localhost:4000/",
  },

  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loaders: [
          "react-hot-loader/webpack",
          "babel-loader",
          "eslint-loader",
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};
