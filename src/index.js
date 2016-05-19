const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
const modules = requireAll(require.context('src/components', true, /\.vue$/));

// published components
import Loadmore from 'vue-loadmore';

// published services
import Toast from 'vue-toast-mobile';
import Indicator from 'vue-indicator';

// published directives
const infiniteScroll = require('vue-infinite-scroll');

module.exports = {
  install(Vue) {
    Object.keys(modules).forEach(key => {
      const module = modules[key];
      Vue.component(module.name, module);
    });
    Vue.component('kb-loadmore', Loadmore);
    Vue.use(infiniteScroll);
  },
  Toast,
  Indicator
};
