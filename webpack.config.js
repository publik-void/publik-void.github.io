const path = require("path");

// const scripts_to_bundle = ["tra"]; // TODO: Make this list here instead of
                                      // repeating file names below

module.exports = {
  entry: [
    path.resolve(__dirname, "src", "trajectory-plot-0.js")
  ],
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "trajectory-plot-0.js",
    publicPath: ""
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname),
    },
    watchFiles: {
      options: {
        ignored: [/node_modules/, /\.git/]
      }
    },
    devMiddleware: {
      writeToDisk: true
    }
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Optional: for ES6+ syntax support
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
