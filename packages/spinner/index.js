import Spinner from './src/spinner';

Spinner.install = function(Vue) {
  Vue.component(Spinner.name, Spinner);
};

module.exports = Spinner;
