const { resolve } = require('path')
const path = require('path')

module.exports = {
  productionSourceMap: false, // prod環境是否生成map
  publicPath: './',
  outputDir: 'dist', //build輸出文件目錄
  assetsDir: 'assets', //放置靜態文件夾目錄
  devServer: {
    port: 8090,
    host: '0.0.0.0',
    https: false,
    open: false,
    // proxy: {
    //   '/api': {
    //     target: process.env.VUE_APP_BASEURL,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/',
    //     },
    //   },
    // },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      // 模板
      template: 'public/index.html',
      // 打包輸出名稱
      filename: 'index.html',
      // template 中的 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Google Sheet api demo',
    },
  },
  //設置img
  chainWebpack: config => {
    config
    .module
    .rule("images")
    .test(/\.(jpe?g|png|gif)$/i)
    .use("url-loader")
    .loader("url-loader")
    .end()
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      },
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/_mixin.scss')
      ]
    }
  },
}
