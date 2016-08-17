<template>
  <div class="page-search">
    <mt-search :value.sync="value" :result="filterResult"></mt-search>
  </div>
</template>

<script>
import { filterBy } from 'main/utils/filter';

export default {
  name: 'page-search',

  data() {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    };
  },

  methods: {
    filterResult() {
      return filterBy(this.defaultResult, this.value);
    }
  }
};
</script>

<style lang="css">
  .page-search {
    height: 100%;
  }
</style>
