<template>
  <mt-spinner class="spinner" color="red"></mt-spinner>
  <mt-spinner class="spinner" :type="1"></mt-spinner>
  <mt-spinner class="spinner" :type="2"></mt-spinner>
  <mt-spinner class="spinner" :type="3"></mt-spinner>
  <hr>

  <span class="spinner">
    <double-bounce color="blue"></double-bounce>
  </span>

  <span class="spinner">
    <triple-bounce color="blue"></triple-bounce>
  </span>

  <span class="spinner">
    <fading-circle color="blue"></fading-circle>
  </span>

  <span class="spinner">
    <snake color="blue"></snake>
  </span>
</template>

<script>
  import Spinner from '../index.js';

  import DoubleBounce from '../src/spinner/double-bounce.vue';
  import FadingCircle from '../src/spinner/fading-circle.vue';
  import TripleBounce from '../src/spinner/triple-bounce.vue';
  import Snake from '../src/spinner/snake.vue';

  import Vue from 'vue';

  Vue.use(Spinner);

  export default {
    name: 'app',
    components: {
      DoubleBounce,
      FadingCircle,
      TripleBounce,
      Snake
    }
  };
</script>

<style scoped>
  .spinner {
    display: block;
    min-height: 50px;
    margin-bottom: 10px;
    border: 1px solid;
  }
</style>
