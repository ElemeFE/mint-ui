var path = require('path');
var cooking = require('cooking');

cooking.set({
  use: 'vue',
  entry: {
    app: './example/entry.js',
    vendor: ['vue']
  },
  dist: './example/dist',
  template: './example/index.html',
  devServer: {
    port: 8789,
    log: false,
    hostname: require('my-local-ip')()
  },

  clean: true,
  hash: true,
  chunk: 'vendor',
  publicPath: '/mint-ui/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: true,
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

// 开发模式不需要将不存在的 style.css 打包进去
cooking.add('externals', {
  'cell/style.css': 'null'
});

module.exports = cooking.resolve();
