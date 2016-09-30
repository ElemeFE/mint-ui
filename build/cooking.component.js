var cooking = require('cooking');
var Components = require('../components.json');
var webpack = require('webpack');
var config = require('./config');

cooking.set({
  entry: Components,
  dist: './lib/',
  clean: false,
  template: false,
  minimize: false,
  format: 'cjs',
  extractCSS: '[name]/style.css',
  extends: ['vue2', 'saladcss', 'buble'],
  alias: config.alias,
  externals: config.externals
});

cooking.remove('output.publicPath');
cooking.add('output.filename', '[name]/index.js');
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('plugins.Define', new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('component')
}));

module.exports = cooking.resolve();
