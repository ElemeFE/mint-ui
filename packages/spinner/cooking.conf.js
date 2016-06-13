var cooking = require('cooking');
var Components = require('./components.json');
var path = require('path');

var entrys = {};
Object.keys(Components).forEach(function (key) {
  entrys[key] = path.join(__dirname, Components[key]);
});

cooking.set({
  entry: entrys,
  dist: path.join(__dirname, 'lib'),
  template: false,
  format: 'umd',
  moduleName: 'MintSpinner',
  extractCSS: '[name]/style.css',
  extends: ['vue', 'saladcss']
});

cooking.add('resolve.alias', {
  'main': path.join(__dirname, '../../src'),
  'packages': path.join(__dirname, '../../packages')
});

cooking.add('output.filename', '[name]/index.js')

cooking.add('externals', {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
});

module.exports = cooking.resolve();
