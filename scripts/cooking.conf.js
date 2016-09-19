var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: path.join(__dirname, '../src/index.js'),
  dist: './lib/',
  clean: false,
  template: false,
  format: 'umd',
  moduleName: 'MINT',
  extractCSS: 'style.css',
  extends: ['vue', 'lint', 'saladcss'],
  alias: {
    'mint-ui': path.join(__dirname, '..')
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
});

cooking.remove('output.publicPath');
cooking.add('output.filename', 'index.js');
cooking.add('preLoader.js.exclude', /node_modules|lib/);
cooking.add('preLoader.vue.exclude', /node_modules|lib/);

module.exports = cooking.resolve();
