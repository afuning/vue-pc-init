const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // 静态资源相对于outputDir路径
  assetsDir: 'static',
  // 禁用生产构建时 eslint-loader
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 禁止生产环境的 source map
  productionSourceMap: false,

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    // 开发环境时浏览器同时显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    open: true,
    // 开发环境代理
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_URL,
        changeOrigin: true
      }
    }
  },

  // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  // 会通过 webpack-merge 合并到最终的配置中
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },

  // https://cli.vuejs.org/guide/webpack.html#chaining-advanced
  // 对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [resolve('src/assets/styles/_variables.scss')]
        })
        .end()
    })
  }
}
