<template>
  <div class="page-lazyload">
    <h1 class="page-title">Lazy Load</h1>
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
        width: 100%;
      }

      @descendent image[lazy=loading] {
        width: 40px;
        height: 300px;
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
          'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
          'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
          'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
          'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
          'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
          'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg'
        ]
      };
    }
  };
</script>