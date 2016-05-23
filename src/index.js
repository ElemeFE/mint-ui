const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
const modules = requireAll(require.context('src/components', true, /\.vue$/));

// published components
import Loadmore from 'vue-loadmore';
import Actionsheet from 'vue-actionsheet';

// published services
import Toast from 'vue-toast-mobile';
import Indicator from 'vue-indicator';
import MessageBox from 'babel!vue-msgbox/src';
require('./style/message-box.css');

// published directives
const infiniteScroll = require('vue-infinite-scroll');

module.exports = {
  install(Vue) {
    Object.keys(modules).forEach(key => {
      const module = modules[key];
      Vue.component(module.name, module);
    });
    Vue.component('kb-loadmore', Loadmore);
    Vue.component('kb-actionsheet', Actionsheet);
    Vue.use(infiniteScroll);
  },
  Toast,
  Indicator,
  MessageBox
};
