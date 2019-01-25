import Vue from 'vue';

const Indicator = Vue.extend(require('./src/indicator.vue'));
let instance, timerId;

export default {
  open(options = {}) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    instance.text = typeof options === 'string' ? options : options.text || '';
    instance.spinnerType = options.spinnerType || 'snake';
    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.visible = true;
      if (options.duration && options.duration > 0) {
        timerId = setTimeout(() => {
          if (instance.visible) instance.visible = false;
          if (typeof options.closeFn === 'function') options.closeFn();
        }, options.duration);
      }
    });
  },

  close() {
    if (instance) {
      instance.visible = false;
      timerId && clearTimeout(timerId);
    }
  }
};
