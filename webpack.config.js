const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => ({
  entry: {
    index: "./src/index.js",
    layout1: "./src/layout1.js",
    settings: "./src/settings.js"
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "./public/js"),
  },
  resolve: {
    alias: {
      root: path.resolve(__dirname, "../"),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
});
