let HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
    },
    // entry: {
    //    app: path.resolve(__dirname, 'src', 'index.tsx')
    // },
    // output: {
    //   filename: '[name].js',
    //   path: path.resolve(__dirname, 'dist')
    // },
  
    devtool: "source-map",
  
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
  
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        { test: /\.css$/, loader: 'style-loader!css-loader' }
      ]
    },

    plugins: [
    //   new HtmlWebpackPlugin({
    //     template: path.resolve(__dirname, 'src', 'index.html')
    //   })
    ]
  };