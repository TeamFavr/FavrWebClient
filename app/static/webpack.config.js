var webpack = require("webpack")

module.exports = {
  entry: "./js/app.js",
  output: {
      path: __dirname,
      filename: "./js/favr.bundle.js"
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
  ]
};
