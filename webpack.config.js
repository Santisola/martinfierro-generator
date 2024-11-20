const path = require("path");

module.exports = {
  entry: "./src/lib/index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/lib"),
    libraryTarget: "commonjs2",
    clean: false
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
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};