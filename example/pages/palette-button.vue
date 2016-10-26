<template>
  <div>
    {{expanded}}
    <mt-palette-button content="+" @click="log(0)" direction="lt" class="pb" :radius="100" :expand="expanded">
      <div class="my-icon-button indexicon icon-pull-up" @touchstart="log(1)"></div>
      <div class="my-icon-button indexicon icon-infinite-scroll" @touchstart="log(2)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="log(3)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="log(4)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="log(5)"></div>
    </mt-palette-button>
  </div>
</template>

<script>
  export default {
    methods: {
      log(val) {
        console.log(val);
      }
    },
    data: function() {
      return {
        expanded: false
      };
    }
  };
</script>

<style scoped>
  .pb{
    width: 60px;
    height: 60px;
    right: 50px;
    line-height: 60px;
  }
  .my-icon-button{
    width:30px;
    height:30px;
    border-radius:50%;
    background-color:red;
    line-height:30px;
    text-align:center;
  }
</style>
 