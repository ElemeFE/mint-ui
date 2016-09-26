var path = require('path');
var cooking = require('cooking');
var Components = require('../components.json');
var webpack = require('webpack');

cooking.set({
  entry: path.join(__dirname, '../src/index.js'),
  dist: './lib/',
  clean: false,
  template: false,
  format: 'cjs',
  minimize: false,
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
cooking.add('output.filename', 'mint-ui.common.js');

var externals = {};
Object.keys(Components).forEach(function (key) {
  externals[`mint-ui/packages/${key}/index.js`] = `mint-ui/lib/${key}`;
  externals[`mint-ui/packages/${key}/style.css`] = `mint-ui/lib/${key}/style.css`;
});

cooking.add('externals', Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals));
cooking.add('preLoader.js.exclude', /node_modules|lib/);
cooking.add('preLoader.vue.exclude', /node_modules|lib/);

cooking.add('plugins.Define', new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('component')
}));

module.exports = cooking.resolve();
