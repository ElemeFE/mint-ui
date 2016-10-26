var cooking = require('cooking');
var Components = require('./components.json');
var path = require('path');
var config = require('../../build/config');
var WebpackShellPlugin = require('webpack-shell-plugin');

var entrys = {};
Object.keys(Components).forEach(function(key) {
  entrys[key] = [path.join(__dirname, Components[key])];
});

cooking.set({
  entry: entrys,
  dist: path.join(__dirname, 'lib'),
  template: false,
  format: 'umd',
  moduleName: 'MintSpinner',
  extractCSS: '[name]/style.css',
  extends: config.extends,
  alias: config.alias,
  externals: config.externals
});

cooking.add('output.filename', '[name]/index.js');
cooking.add('plugin.WebpackShell', new WebpackShellPlugin({
  onBuildExit: [`mv ${__dirname}/lib/index/* ${__dirname}/lib/ && rm -rf ${__dirname}/lib/index`]
}));
module.exports = cooking.resolve();
