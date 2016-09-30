var cooking = require('cooking');
var config = require('./config');

cooking.set({
  entry: './src/index.js',
  dist: './lib/',
  clean: false,
  template: false,
  format: 'umd',
  moduleName: 'MINT',
  extractCSS: 'style.min.css',
  extends: ['vue2', 'saladcss', 'buble'],
  alias: config.alias,
  externals: { vue: config.externals.vue }
});

cooking.remove('output.publicPath');
cooking.add('output.filename', 'index.js');
cooking.add('loader.js.exclude', config.jsexclude);

module.exports = cooking.resolve();
