import InfiniteScroll from './directive';
import 'mint-ui/src/style/empty.css';
import Vue from 'vue';

const install = function(Vue) {
  Vue.directive('InfiniteScroll', InfiniteScroll);
};

if (window.Vue && !Vue.prototype.$isServer) {
  window.infiniteScroll = InfiniteScroll;
  Vue.use(install); // eslint-disable-line
}

InfiniteScroll.install = install;
export default InfiniteScroll;
