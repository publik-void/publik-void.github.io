const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    "trajectory-plot": path.resolve(__dirname, "src", "trajectory-plot-0.js"),
    mathjax: path.resolve(__dirname, "node_modules",
      "mathjax-full/es5/tex-mml-chtml.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: ""
  },
  mode: "development",
  performance: {
    maxAssetSize: 5000000,
    maxEntrypointSize: 5000000
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
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(
            __dirname,
            "node_modules/mathjax-full/es5/output/chtml/fonts/woff-v2"
          ),
          to: path.resolve(__dirname, "dist/output/chtml/fonts/woff-v2")
        },
      ],
    }),
  ],
};
