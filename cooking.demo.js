var path = require('path');
var cooking = require('cooking');
var Components = require('./components.json');

cooking.set({
  use: 'vue',
  entry: './example/entry.js',
  dist: './example/dist',
  template: './example/index.html',
  devServer: {
    port: 8789,
    hostname: require('my-local-ip')(),
    publicPath: '/',
    log: false
  },

  clean: true,
  hash: true,
  publicPath: '/mint-ui/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: true,
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('resolve.alias', {
  'main': path.join(__dirname, 'src'),
  'src': path.join(__dirname, 'src'),
  'packages': path.join(__dirname, 'packages')
});

cooking.add('preLoader.js.exclude', /node_modules|lib/);
cooking.add('preLoader.vue.exclude', /node_modules|lib/);

var externals = {};
Object.keys(Components).forEach(function (key) {
  externals[`packages/${key}/style.css`] = 'null';
});

// 开发模式不需要将不存在的 style.css 打包进去
cooking.add('externals', Object.assign({
  'vue-router': 'VueRouter',
  'vue': 'Vue'
}, externals));

module.exports = cooking.resolve();
