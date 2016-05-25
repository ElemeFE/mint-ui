const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
const modules = requireAll(require.context('src/components', true, /\.vue$/));

// published components
import Loadmore from 'vue-loadmore';
require('vue-loadmore/lib/index.css');
import Actionsheet from 'vue-actionsheet';
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
import { MintRange } from 'mint-range';
require('mint-range/dist/index.css');

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
    Vue.component('mt-loadmore', Loadmore);
    Vue.component('mt-actionsheet', Actionsheet);
    Vue.component('mt-swipe', Swipe);
    Vue.component('mt-swipe-item', SwipeItem);
    Vue.component('mt-range', MintRange);
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
