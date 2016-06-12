var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: './example/main.js',
    vendor: ['vue']
  },
  dist: './dist',
  template: './example/index.tpl',

  devServer: {
    port: 8080,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  chunk: 'vendor',
  publicPath: '/dist/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  extends: ['vue', 'lint', 'saladcss']
});

module.exports = cooking.resolve();
