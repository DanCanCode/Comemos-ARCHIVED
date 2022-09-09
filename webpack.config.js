const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "./public"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new Dotenv({ path: "./.env" }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_FIREBASE_API_KEY": JSON.stringify(
        process.env.REACT_APP_FIREBASE_API_KEY
      ),
      "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN": JSON.stringify(
        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
      ),
      "process.env.REACT_APP_FIREBASE_PROJECT_ID": JSON.stringify(
        process.env.REACT_APP_FIREBASE_PROJECT_ID
      ),
      "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET": JSON.stringify(
        process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
      ),
      "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(
        process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
      ),
      "process.env.REACT_APP_FIREBASE_APP_ID": JSON.stringify(
        process.env.REACT_APP_FIREBASE_APP_ID
      ),
    }),
  ],
};
