var path = require('path');
var cooking = require('cooking');
var Components = require('../components.json');
var webpack = require('webpack');
var entries = {};

Object.keys(Components).forEach(compo => {
  entries[compo] = path.join(__dirname, '../', Components[compo]);
});

cooking.set({
  use: 'vue',
  entry: Components,
  dist: './lib/',
  clean: false,
  template: false,
  format: 'umd',
  moduleName: ['MINT', '[name]'],
  extractCSS: '[name]/style.css',
  extends: ['vue', 'lint', 'saladcss']
});

cooking.remove('output.publicPath');

cooking.add('resolve.alias', {
  'mint-ui': path.join(__dirname, '..')
});
cooking.add('output.filename', '[name]/index.js');

var externals = {};
Object.keys(Components).forEach(function (key) {
  externals[`mint-ui/packages/${key}/index.js`] = `mint-ui/lib/${key}`;
  externals[`mint-ui/packages/${key}/style.css`] = `mint-ui/lib/${key}/style.css`;
});

cooking.add('externals', Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals));

cooking.add('preLoader.js.exclude', /node_modules|lib/);
cooking.add('preLoader.vue.exclude', /node_modules|lib/);

cooking.add('plugins.Define', new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('component')
}));

module.exports = cooking.resolve();
