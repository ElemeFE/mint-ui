var path = require('path');
var cooking = require('cooking');
var webpack = require('webpack');

cooking.set({
  entry: './src/index.js',
  dist: './lib/',
  clean: false,
  template: false,
  format: 'umd',
  moduleName: 'MINT',
  extractCSS: 'style.css',
  extends: ['vue', 'lint', 'saladcss']
});

cooking.remove('output.publicPath');

cooking.add('plugin.defiendImportCSS', new webpack.DefinePlugin({
  'process.env.IMPORTCSS': JSON.stringify(false)
}));
cooking.add('resolve.alias', {
  'main': path.join(__dirname, 'src'),
  'packages': path.join(__dirname, 'packages')
});
cooking.add('output.filename', 'index.js');
cooking.add('externals.vue', {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
});
cooking.add('preLoader.js.exclude', /node_modules|lib/);
cooking.add('preLoader.vue.exclude', /node_modules|lib/);

module.exports = cooking.resolve();
