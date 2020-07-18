const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
module.exports = {
  devServer: {
    contentBase: './dist',
    inline: true
    //这里可以配置端口号
    // port:8080
  }
};