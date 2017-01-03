import InfiniteScroll from './directive';
import 'mint-ui/src/style/empty.css';

const install = function(Vue) {
  Vue.directive('InfiniteScroll', InfiniteScroll);
};

if (typeof window!=='undefined' && window.Vue) {
  window.infiniteScroll = InfiniteScroll;
  Vue.use(install); // eslint-disable-line
}

InfiniteScroll.install = install;
export default InfiniteScroll;
