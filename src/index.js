const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
const modules = requireAll(require.context('src/components', true, /\.vue$/));
const components = {};

modules.forEach(item => {
  components[item.name.replace(/mt-/, '')] = item;
});

// published components
import Loadmore from 'mint-loadmore';
require('mint-loadmore/lib/index.css');
import Actionsheet from 'mint-actionsheet';
require('mint-actionsheet/lib/index.css');
import Popup from 'mint-popup';
require('mint-popup/lib/index.css');
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
import { MintRange } from 'mint-range';
require('mint-range/dist/index.css');
import Picker from 'mint-picker';
require('mint-picker/lib/index.css');
import { MintProgress } from 'mint-progress';
require('mint-progress/dist/index.css');

// published services
import Toast from 'vue-toast-mobile';
require('vue-toast-mobile/lib/index.css');
import Indicator from 'mint-indicator';
require('mint-indicator/lib/index.css');
import MessageBox from 'babel!vue-msgbox/src';
require('./style/message-box.css');

// published directives
import infiniteScroll from 'vue-infinite-scroll';
import lazyload from 'vue-lazyload';

module.exports = Object.assign({}, {
  install(Vue) {
    Object.keys(modules).forEach(key => {
      const item = modules[key];
      Vue.component(item.name, item);
    });
    Vue.component('mt-loadmore', Loadmore);
    Vue.component('mt-actionsheet', Actionsheet);
    Vue.component('mt-popup', Popup);
    Vue.component('mt-swipe', Swipe);
    Vue.component('mt-swipe-item', SwipeItem);
    Vue.component('mt-range', MintRange);
    Vue.component('mt-picker', Picker);
    Vue.component('mt-progress', MintProgress);
    Vue.use(infiniteScroll);
    Vue.use(lazyload, {
      loading: require('./assets/loading-spin.svg'),
      try: 3
    });
  },
  Toast,
  Indicator,
  MessageBox
}, components);
