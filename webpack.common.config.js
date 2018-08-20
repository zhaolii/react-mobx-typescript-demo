let HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path');
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath:'/dist/'
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [{
        test: /\.(jsx|tsx|js|ts)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'lib',
              style: 'css'
            })]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        },
        exclude: /node_modules/
      },
      // {
      //   enforce: "pre",
      //   test: /\.(tsx|js)$/,
      //   loader: "source-map-loader"
      // },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(css|less|scss)$/,
        loader: 'style-loader!css-loader!less-loader!sass-loader'
      },
    ]
  },
  plugins: [
    //   new HtmlWebpackPlugin({
    //     template: path.resolve(__dirname, 'src', 'index.html')
    //   })
  ]
};