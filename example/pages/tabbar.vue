<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">Tabbar</div>
      <div>
        <mt-cell class="page-part" title="当前选中" :value="selected"></mt-cell>
      </div>

      <mt-panel style="page-tabbar-panel" :active.sync="selected">
        <mt-panel-item id="外卖">
          <mt-cell v-for="n in 10" :title="'餐厅 ' + $index"></mt-cell>
        </mt-panel-item>
        <mt-panel-item id="订单">
          <mt-cell v-for="n in 5" :title="'订单 ' + $index"></mt-cell>
        </mt-panel-item>
        <mt-panel-item id="发现">
          <mt-cell v-for="n in 7" :title="'发现 ' + $index"></mt-cell>
        </mt-panel-item>
        <mt-panel-item id="我的">
          <div class="page-part">
            <mt-cell v-for="n in 12" :title="'我的 ' + $index"></mt-cell>
          </div>
          <mt-button v-link="'/'" style="margin: 0 10px;" type="danger" size="large">退出</mt-button>
        </mt-panel-item>
      </mt-panel>
    </div>

    <mt-tabbar :selected.sync="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/100x100.png">
        <span slot="label">外卖</span>
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/100x100.png">
        <span slot="label">订单</span>
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/100x100.png">
        <span slot="label">发现</span>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/100x100.png">
        <span slot="label">我的</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '外卖'
    };
  }
};
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-tabbar-panel {
    overflow: auto;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>
