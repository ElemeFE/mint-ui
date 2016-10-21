var cooking = require('cooking');
var path = require('path');

cooking.set({
  entry: {
    index: path.join(__dirname, 'index.js')
  },
  dist: path.join(__dirname, 'lib'),
  template: false,
  format: 'umd',
  moduleName: 'MintPaletteButton',
  extractCSS: 'style.css',

  extends: ['vue', 'saladcss']
});

cooking.add('resolve.alias', {
  'main': path.join(__dirname, '../../src'),
  'mint-ui': path.join(__dirname, '..')
});

cooking.add('externals', {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
});

module.exports = cooking.resolve();
