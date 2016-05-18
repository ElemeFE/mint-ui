var path = require('path');
var cooking = require('cooking');

cooking.set({
  use: 'vue',
  entry: {
    app: './example/entry.js',
    vendor: ['vue']
  },
  dist: './example/dist',
  template: './example/index.tpl',
  devServer: {
    port: 8789
  },

  clean: true,
  chunk: 'vendor',
  publicPath: '/kebab-ui/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: true,
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

module.exports = cooking.resolve();
