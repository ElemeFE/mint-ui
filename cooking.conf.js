var path = require('path');
var cooking = require('cooking');
var Components = require('./components.json');

var entrys = {};
Object.keys(Components).forEach(function (key) {
  entrys[key] = Components[key];
});

cooking.set({
  use: 'vue',
  entry: entrys,
  dist: './lib/',
  template: false,

  clean: true,
  format: 'umd',
  moduleName: ['KEBAB', '[name]'],
  extractCSS: '[name]/style.css',
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});
cooking.add('output.filename', '[name]/index.js');
cooking.add('externals.vue', 'vue');

module.exports = cooking.resolve();
