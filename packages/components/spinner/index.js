import Spinner from './src/spinner';

Spinner.install = Vue => {
  Vue.use(Spinner.name, Spinner);
};

module.exports = Spinner;
