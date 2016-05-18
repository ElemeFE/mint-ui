import Vue from 'vue';
import App from './app';
import routes from './route';

var VueRouter = require('vue-router');
Vue.use(VueRouter);
var router = new VueRouter();
router.map(routes);
router.start(Vue.extend({
  components: {
    app: App
  }
}), 'body');

//  register components
Vue.component('KbHeader', require('src/components/header'));
Vue.component('KbPulldown', require('src/components/pulldown'));
