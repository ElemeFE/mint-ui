import Vue from 'vue';
import App from './app';

//  register components
Vue.component('KbHeader', require('src/components/header'));

new Vue({ // eslint-disable-line
  el: 'body',
  components: { App }
});
