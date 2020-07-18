const path = require('path');//'path'是node的一个全局变量，webpack以来node环境，并且webpack是基于commonJS规范的
module.exports = {
  //webpack打包入口：可以使字符串、数组、对象，因为我们的入口只有main.js，所以只是一个字符串
  entry:'./main.js',
  //webpack打包出口：output通常是一个对象，至少包含两个属性，一个是绝对路径，一个是文件名
  //注意：dirname前面是两个下划线_ _，不是一个
  output:{
    path:path.resolve(__dirname,'dist'),//path是一个绝对路径
    filename: "bundle.js",
    publicPath: 'dist/'
  },
  //该配置项可以将Vue的版本设置为Vue-template，不设置的话默认是vue-runtime版本，在访问页面时会报错
  resolve: {
    alias: {
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时, 是从右向左
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        // exclude: 排除
        // include: 包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
};