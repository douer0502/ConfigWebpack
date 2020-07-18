//'path'是node的一个全局变量，webpack以来node环境，并且webpack是基于commonJS规范的
const path = require('path');
//使用vue文件进行组件化开发，编译的时候，要依赖vue-loader和vue-template-compiler编译.vue文件
//但是在这个配置文件中配置loader的时候，只需要配置vue-loader，不需要配置vue-template-compiler
//当vue-loader的版本为15.x以上的时候，需要配置vue-load自带的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//配置版权插件，该插件为webpack自带插件，无需另外安装
const BannerPlugin = require('webpack/lib/BannerPlugin');
//打包html插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //webpack打包入口：可以使字符串、数组、对象，因为我们的入口只有main.js，所以只是一个字符串
  entry:'./src//main.js',
  //webpack打包出口：output通常是一个对象，至少包含两个属性，一个是绝对路径，一个是文件名
  //注意：dirname前面是两个下划线_ _，不是一个
  output:{
    path:path.resolve(__dirname,'dist'),//path是一个绝对路径
    filename: "bundle.js"
    //安装html打包插件以后，这里不需要配置dist，因为index.html已经打包到dist，直接引用相同目录下的资源
    // publicPath: 'dist/'
  },
  resolve: {
    extensions: ['.js','.vue','.css','.less'],
    alias: {
      //该配置项可以将Vue的版本设置为Vue-template，不设置的话默认是vue-runtime版本，在访问页面时会报错
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
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [   //这里配置插件的时候记得使用new关键字
    new VueLoaderPlugin(),
    new BannerPlugin("最终版权归刘佳宾所有"),
    new HtmlWebpackPlugin({template:'index.html'})
  ],
  devServer: {
    contentBase: './dist',
    inline: true
    //这里可以配置端口号
    // port:8080
  }
};