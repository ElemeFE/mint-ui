const MintRange = require('./src/index.vue');

MintRange.install = function(Vue) {
  Vue.component(MintRange.name, MintRange);
};

module.exports = MintRange;
