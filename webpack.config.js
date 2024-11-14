const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/dev/index.tsx", // Punto de entrada para desarrollo
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/dev/index.html",
    }),
  ],
  externals: process.env.NODE_ENV === "production" 
    ? {
        react: "react",
        "react-dom": "react-dom",
      }
    : {},
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 8080,
    hot: true,
  },
};