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
  moduleName: ['MINT', '[name]'],
  extractCSS: '[name]/style.css',
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});
cooking.add('output.filename', '[name]/index.js');
cooking.add('externals', {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  },
  'src/components/cell': {
    root: 'MINT.index.cell',
    commonjs: 'mint-ui/lib/cell',
    commonjs2: 'mint-ui/lib/cell',
    amd: 'mint-ui/lib/cell'
  },
  'cell/style.css': {
    commonjs: 'mint-ui/lib/cell/style.css',
    commonjs2: 'mint-ui/lib/cell/style.css',
    amd: 'mint-ui/lib/cell/style.css'
  },
  'src/assets/font/iconfont.css': {
    commonjs: 'mint-ui/lib/font/style.css',
    commonjs2: 'mint-ui/lib/font/style.css',
    amd: 'mint-ui/lib/font/style.css'
  }
});

module.exports = cooking.resolve();
