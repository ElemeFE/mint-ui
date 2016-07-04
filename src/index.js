import uppercamelcase from 'uppercamelcase';

const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
const modules = requireAll(require.context(
  'packages',
  true,
  /^((?!node_modules|lib|toast|indicator|message-box|infinite-scroll|lazyload).)*[^_]index\.js$/));

const components = {};

modules.forEach(item => {
  const name = uppercamelcase(item.name.replace(/mt-/, ''));
  components[name] = item;
});

// published services
import Toast from 'packages/toast/index.js';
import 'vue-toast-mobile/lib/index.css';
import Indicator from 'packages/indicator/index.js';
import 'packages/indicator/src/style.css';
import MessageBox from 'packages/message-box/index.js';
import 'vue-msgbox/lib/vue-msgbox.css';
import 'packages/message-box/src/message-box.css';

// published directives
import InfiniteScroll from 'packages/infinite-scroll/index.js';
import Lazyload from 'packages/lazyload/index.js';

module.exports = Object.assign({}, {
  install(Vue) {
    Object.keys(modules).forEach(key => {
      const item = modules[key];
      Vue.component(item.name, item);
    });
    Vue.use(InfiniteScroll);
    Vue.use(Lazyload, {
      loading: require('./assets/loading-spin.svg'),
      try: 3
    });
  },
  Toast,
  Indicator,
  MessageBox,
  InfiniteScroll,
  Lazyload
}, components);
