import uppercamelcase from 'uppercamelcase';

const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
const modules = requireAll(require.context('src/components', true, /\.vue$/));
const components = {};

modules.forEach(item => {
  const name = uppercamelcase(item.name.replace(/mt-/, ''));
  components[name] = item;
});

// published components
import Loadmore from './components/loadmore.js';
import Actionsheet from './components/actionsheet.js';
import Popup from './components/popup.js';
import Swipe from './components/swipe.js';
import SwipeItem from './components/swipe-item.js';
import Range from './components/range.js';
import Picker from './components/picker.js';
import Progress from './components/progress.js';

// published services
import Toast from 'vue-toast-mobile';
import 'vue-toast-mobile/lib/index.css';
import Indicator from 'mint-indicator';
import 'mint-indicator/lib/index.css';
import MessageBox from 'babel!vue-msgbox/src';
import './style/message-box.css';

// published directives
import infiniteScroll from 'vue-infinite-scroll';
import lazyload from 'vue-lazyload';

module.exports = Object.assign({}, {
  install(Vue) {
    Object.keys(modules).forEach(key => {
      const item = modules[key];
      Vue.component(item.name, item);
    });
    Vue.component(Loadmore.name, Loadmore);
    Vue.component(Actionsheet.name, Actionsheet);
    Vue.component(Popup.name, Popup);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    Vue.component(Range.name, Range);
    Vue.component(Picker.name, Picker);
    Vue.component(Progress.name, Progress);
    Vue.use(infiniteScroll);
    Vue.use(lazyload, {
      loading: require('./assets/loading-spin.svg'),
      try: 3
    });
  },
  Toast,
  Indicator,
  MessageBox,
  Popup,
  Loadmore,
  Actionsheet,
  Swipe,
  SwipeItem,
  'InfiniteScroll': infiniteScroll,
  'Lazyload': lazyload,
  Range,
  Picker,
  Progress
}, components);
