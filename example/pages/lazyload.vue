<template>
  <div class="page-lazyload">
    <h1 class="page-title">Lazy load</h1>
    <ul class="page-lazyload-list">
      <li class="page-lazyload-listitem" v-for="item in list">
        <img v-lazy="item" class="page-lazyload-image">
      </li>
    </ul>
  </div>
</template>

<style>
  @component-namespace page {
    @component lazyload {
      @descendent list {
        text-align: center;
      }

      @descendent listitem {
        width: 300px;
        margin: 0 auto;
        margin-bottom: 10px;
        background-color: #ddd;
      }

      @descendent image {
        display: block;
        size: 300px;
      }

      @descendent image[lazy=loading] {
        width: 40px!important;
        margin: auto;
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [
          'https://avatars2.githubusercontent.com/u/12508239?v=3&s=150',
          'https://avatars0.githubusercontent.com/u/1639720?v=3&s=150',
          'https://avatars0.githubusercontent.com/u/5109730?v=3&s=150',
          'https://avatars0.githubusercontent.com/u/11958628?v=3&s=150',
          'https://avatars1.githubusercontent.com/u/8422702?v=3&s=150',
          'https://avatars2.githubusercontent.com/u/15134182?v=3&s=150'
        ]
      };
    }
  };
</script>