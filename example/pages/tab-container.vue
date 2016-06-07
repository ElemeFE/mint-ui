<template>
  <div class="nav">
    <mt-button size="small" @click.prevent="active = 'tab-container1'">tab 1</mt-button>
    <mt-button size="small" @click.prevent="active = 'tab-container2'">tab 2</mt-button>
    <mt-button size="small" @click.prevent="active = 'tab-container3'">tab 3</mt-button>
  </div>
  <div class="page-tab-container">
    <mt-tab-container style="page-tabbar-tab-container" :active="active">
      <mt-tab-container-item id="tab-container1">
        <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>

  <mt-swipe :auto="0" :show-indicators="false" :continuous="false">
      <mt-swipe-item class="slide1">1</mt-swipe-item>
      <mt-swipe-item class="slide2">2</mt-swipe-item>
      <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  name: 'page-tab-container',
  data() {
    return {
      active: 'tab-container1'
    };
  }
};
</script>

<style lang="css" scoped>
  .item {
    display: inline-block;
  }

  .nav {
    padding: 10px;
  }

  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }

  .swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }


  .swipe-item {
    color: #000;
    line-height: 200px;
  }
</style>
