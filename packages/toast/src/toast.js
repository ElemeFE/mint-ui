import Vue from 'vue';

const Toast = Vue.extend(require('./toast.vue'));
let toastPool = [];

let getAnInstance = () => {
  if (toastPool.length > 0) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return new Toast({
    el: document.createElement('div')
  });
};

let returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance);
  }
};

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

export default (options = {}) => {
  let duration = options.duration || 3000;

  let instance = getAnInstance();
  instance.message = typeof options === 'string' ? options : options.message;
  instance.position = options.position || 'middle';
  instance.className = options.className || '';
  instance.iconClass = options.iconClass || '';

  document.body.appendChild(instance.$el);
  Vue.nextTick(function() {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeDom);
    setTimeout(function() {
      instance.visible = false;
      instance.$el.addEventListener('transitionend', removeDom);
      returnAnInstance(instance);
    }, duration);
  });
};
