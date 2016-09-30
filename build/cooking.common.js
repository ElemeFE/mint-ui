var cooking = require('cooking');
var webpack = require('webpack');
var config = require('./config');

cooking.set({
  entry: './src/index.js',
  dist: './lib/',
  clean: false,
  template: false,
  format: 'cjs',
  minimize: false,
  moduleName: 'MINT',
  extractCSS: 'style.css',
  extends: ['vue2', 'saladcss', 'buble'],
  alias: config.alias,
  externals: config.externals
});

cooking.remove('output.publicPath');
cooking.add('output.filename', 'mint-ui.common.js');
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('plugins.Define', new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('component')
}));

module.exports = cooking.resolve();
