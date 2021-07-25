module.exports = {
  publicPath: "./",
  assetsDir: "static",
  outputDir: 'dist',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '挂单报告：黄金上方助力明显 欧美下方有密集支撑'
        return args
      })

    config.set('externals', {
      vue: 'Vue',
      echarts: 'echarts'
    })
  }
}