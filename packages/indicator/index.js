import Vue from 'vue';
import './src/style.css';

const Indicator = Vue.extend(require('./src/indicator.vue'));
let instance;
let timer;

module.exports = {
  open(options) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    if (typeof options === 'string') {
      instance.text = options;
      instance.spinnerType = 'snake';
    } else if (Object.prototype.toString.call(options) === '[object Object]') {
      instance.text = options.text || '';
      instance.spinnerType = options.spinnerType || 'snake';
    } else {
      instance.text = '';
      instance.spinnerType = 'snake';
    }
    instance.$appendTo(document.body);
    if (timer) {
      clearTimeout(timer);
    }

    Vue.nextTick(() => {
      instance.visible = true;
    });
  },

  close() {
    if (instance) {
      instance.visible = false;
      timer = setTimeout(() => {
        if (instance.$el) {
          instance.$el.style.display = 'none';
        }
      }, 400);
    }
  }
};
