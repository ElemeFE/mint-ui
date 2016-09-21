var path = require('path');
var cooking = require('cooking');
var webpack = require('webpack');

cooking.set({
  entry: {
    app: path.join(__dirname, '../example/entry.js'),
    vendor: ['vue', 'vue-router', 'fastclick']
  },
  dist: './example/dist',
  template: path.join(__dirname, '../example/index.tpl'),
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
  alias: {
    'src': path.join(__dirname, '../src'),
    'mint-ui': path.join(__dirname, '..')
  }
});

cooking.add('preLoader.js.exclude', /node_modules|lib/);
cooking.add('preLoader.vue.exclude', /node_modules|lib/);

if (process.env.NODE_ENV === 'production') {
  cooking.remove('entry.vendor');
  cooking.add('externals.vue', 'Vue');
  cooking.add('externals.vue-router', 'VueRouter');
  cooking.add('fastclick', 'FastClick');
} else {
  cooking.add('plugins.Define', new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }));
}

module.exports = cooking.resolve();
