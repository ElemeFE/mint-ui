var Components = require('../components.json');
var path = require('path');
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`mint-ui/packages/${key}/index.js`] = `mint-ui/lib/${key}`;
  externals[`mint-ui/packages/${key}/style.css`] = `mint-ui/lib/${key}/style.css`;
});

externals['vue-popup'] = 'vue-popup';

exports.externals = Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals);

exports.alias = {
  'mint-ui': path.join(__dirname, '..'),
  'src': path.join(__dirname, '../src')
};

exports.jsexclude = /node_modules|lib/;
