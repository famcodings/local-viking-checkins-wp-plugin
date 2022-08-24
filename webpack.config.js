const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, argv) => ({
  entry: {
    index: "./src/index.js",
    settings: "./src/settings.js",
    styles: ["./src/css/index.css"],
  },
  output: {
    filename: "js/[name]-bundle.js",
    path: path.resolve(__dirname, "./public"),
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
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          "postcss-loader"
        ],
      }
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name]-bundle.css"
    }),
  ],
});
