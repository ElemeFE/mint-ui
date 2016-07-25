var path = require('path');
var cooking = require('cooking');
var Components = require('./components.json');
var webpack = require('webpack');

cooking.set({
  use: 'vue',
  entry: {
    app: './example/entry.js',
    vendor: ['vue', 'vue-router', 'fastclick']
  },
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
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('resolve.alias', {
  'main': path.join(__dirname, 'src'),
  'src': path.join(__dirname, 'src'),
  'packages': path.join(__dirname, 'packages')
});

cooking.add('preLoader.js.exclude', /node_modules|lib/);
cooking.add('preLoader.vue.exclude', /node_modules|lib/);

cooking.add('plugin.defiendImportCSS', new webpack.DefinePlugin({
  'process.env.IMPORTCSS': JSON.stringify(false)
}));
if (process.env.NODE_ENV === 'production') {
  cooking.remove('entry.vendor');
  cooking.add('externals.vue', 'Vue');
  cooking.add('externals.vue-router', 'VueRouter');
  cooking.add('fastclick', 'FastClick');
}

module.exports = cooking.resolve();
