var cooking = require('cooking');
var webpack = require('webpack');
var config = require('./config');

cooking.set({
  entry: './example/entry.js',
  dist: './example/dist',
  template: './example/index.tpl',
  devServer: {
    port: 8789,
    hostname: require('my-local-ip')(),
    publicPath: '/',
    log: false
  },
  clean: true,
  hash: true,
  publicPath: '/mint-ui/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: true,
  sourceMap: true,
  extends: ['vue', 'lint', 'saladcss'],
  alias: config.alias
});

cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('loader.vue.exclude', config.jsexclude);

if (process.env.NODE_ENV === 'production') {
  cooking.add('externals.vue', 'Vue');
  cooking.add('externals.vue-router', 'VueRouter');
  cooking.add('fastclick', 'FastClick');
} else {
  cooking.add('plugins.Define', new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }));
}

module.exports = cooking.resolve();
