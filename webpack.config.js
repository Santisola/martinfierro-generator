const path = require("path");

module.exports = {
  entry: "./src/lib/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/lib"),
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
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};