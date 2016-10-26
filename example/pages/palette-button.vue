<template>
  <div>
    <mt-palette-button content="+" @expand="main_log('expand')" @collapse="main_log('collapse')" direction="lt" class="pb" :radius="100" ref="foo">
      <div class="my-icon-button indexicon icon-pull-up" @touchstart="sub_log(1)"></div>
      <div class="my-icon-button indexicon icon-infinite-scroll" @touchstart="sub_log(2)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(4)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(5)"></div>
    </mt-palette-button>
  </div>
</template>

<script>
  export default {
    methods: {
      main_log(val) {
        console.log('main_log', val);
      },
      sub_log(val) {
        console.log('sub_log', val);
        this.$refs.foo.subClicked();
      }
    }
  };
</script>

<style scoped>
  .pb{
    width: 60px;
    height: 60px;
    right: 50px;
    line-height: 60px;
    color: #FFF;
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
 