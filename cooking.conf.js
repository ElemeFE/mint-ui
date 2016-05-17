var path = require('path');
var cooking = require('cooking');
var Components = require('./components.json');

var entrys = {};
Object.keys(Components).forEach(function (key) {
  entrys['kb-' + key + '/index'] = Components[key];
});

cooking.set({
  use: 'vue',
  entry: entrys,
  dist: './lib',
  template: false,

  clean: true,
  publicPath: '/lib/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].css',
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

module.exports = cooking.resolve();
