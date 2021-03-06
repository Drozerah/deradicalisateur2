const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

module.exports = {
  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './src/index.html'),
          path.join(__dirname, './**/*.vue'),
          path.join(__dirname, './src/**/*.js')
        ])
      })
    ]
  }
  // ,
  // chainWebpack: config => {
  //   config.module // remove hash in .jpeg files names
  //   .rule('images')
  //   .test(/\.(jpe?g)(\?.*)?$/)
  //   .use('url-loader')
  //   .loader('file-loader')
  //   .tap(options => {
  //     // modify the options...
  //     options.name = 'img/[name].[ext]' // default is => 'img/[name].[hash:8].[ext]'
  //     return options
  //   })
  // }
}
