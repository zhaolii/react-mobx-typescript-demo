let htmlPlugin = require('html-webpack-plugin'), // html打包插件
  path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');
// 引入js压缩插件
const uglify = require('uglifyjs-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin"); //css分离
// const config = require('./webpack.common.config');

var website ={
  publicPath:"http://localhost:8888/"
  // publicPath:"http://192.168.1.103:8888/"
}

module.exports = {
  mode: 'development',
  // 入口文件的配置
  entry: {
    main: './src/index.tsx'
  },
  // 出口文件的配置
  output: {
    // 打包的路径
    path: __dirname + "/dist",
    // 打包的文件名称
    filename: "[name].js",
    publicPath:website.publicPath  //publicPath：主要作用就是处理静态文件路径的。
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
      //图片 loader
      {
        test:/\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
        use:[{
            loader:'url-loader', //是指定使用的loader和loader的配置参数
            options:{
                limit:500,  //是把小于500B的文件打成Base64的格式，写入JS
                outputPath:'images/',  //打包后的图片放到images文件夹下
            }
        }]
      },
      {
        test: /\.(htm|html)$/i,
        use:[ 'html-withimg-loader'] 
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
      },
      {
        test: /\.less$/,
        use: extractTextPlugin.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "less-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        }),
      },
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      // {
      //   test: /\.(css|less|scss)$/,
      //   loader: 'style-loader!css-loader!less-loader!sass-loader'
      // },
    ]
  },
  plugins: [
    new uglify(),
    new extractTextPlugin("css/index.css"),
    new htmlPlugin({
      minify:{ //是对html文件进行压缩
          removeAttributeQuotes:true  //removeAttrubuteQuotes是却掉属性的双引号。
      },
      hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
      template:'./index.html' //是要打包的html模版路径和文件名称。
  })
    //   new HtmlWebpackPlugin({
    //     template: path.resolve(__dirname, 'src', 'index.html')
    //   })
  ]
};