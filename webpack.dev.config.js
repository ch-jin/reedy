var path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: {
    client: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client?path=http://localhost:4000/" +
        "__webpack_hmr",
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
        loaders: ["react-hot-loader/webpack", "babel-loader"],
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
  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
};
