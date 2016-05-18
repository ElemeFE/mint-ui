import Vue from 'vue';
import App from './app';
import routes from './route';
import Kebab from 'src/index';
import VueRouter from 'vue-router';

Vue.use(Kebab);
Vue.use(VueRouter);

const router = new VueRouter();

router.map(routes);
router.start(Vue.extend({
  components: {
    app: App
  }
}), 'body');

router.beforeEach(transition => {
  document.title = transition.to.title || document.title;
  transition.next();
});
