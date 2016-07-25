var path = require('path');
var cooking = require('cooking');
var Components = require('./components.json');
var webpack = require('webpack');

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
  'main': path.join(__dirname, 'src'),
  'packages': path.join(__dirname, 'packages')
});
cooking.add('output.filename', '[name]/index.js');

var externals = {};
Object.keys(Components).forEach(function (key) {
  externals[`packages/${key}/index.js`] = `mint-ui/lib/${key}`;
  externals[`packages/${key}/style.css`] = `mint-ui/lib/${key}/style.css`;
});

cooking.add('externals', Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals));

cooking.add('plugin.defiendImportCSS', new webpack.DefinePlugin({
  'process.env.IMPORTCSS': JSON.stringify(true)
}));
cooking.add('preLoader.js.exclude', /node_modules|lib/);
cooking.add('preLoader.vue.exclude', /node_modules|lib/);

module.exports = cooking.resolve();
