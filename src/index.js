import uppercamelcase from 'uppercamelcase';

const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
const modules = requireAll(require.context('components', true, /^((?!node_modules).)*index\.js$/));

const components = {};

modules.forEach(item => {
  const name = uppercamelcase(item.name.replace(/mt-/, ''));
  components[name] = item;
});

// published services
import Toast from 'services/toast';
import Indicator from 'services/indicator';
import MessageBox from 'services/message-box';

// published directives
import InfiniteScroll from 'directives/infinite-scroll';
import Lazyload from 'directives/lazyload';

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
