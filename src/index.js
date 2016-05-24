const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
const modules = requireAll(require.context('src/components', true, /\.vue$/));

// published components
import Loadmore from 'vue-loadmore';
import Actionsheet from 'vue-actionsheet';
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');

// published services
import Toast from 'vue-toast-mobile';
import Indicator from 'vue-indicator';
import MessageBox from 'babel!vue-msgbox/src';
require('./style/message-box.css');

// published directives
import infiniteScroll from 'vue-infinite-scroll';
import lazyload from 'vue-lazyload';

module.exports = {
  install(Vue) {
    Object.keys(modules).forEach(key => {
      const module = modules[key];
      Vue.component(module.name, module);
    });
    Vue.component('kb-loadmore', Loadmore);
    Vue.component('kb-actionsheet', Actionsheet);
    Vue.component('kb-swipe', Swipe);
    Vue.component('kb-swipe-item', SwipeItem);
    Vue.use(infiniteScroll);
    Vue.use(lazyload, {
      loading: require('./assets/loading-spin.svg'),
      try: 3
    });
  },
  Toast,
  Indicator,
  MessageBox
};
