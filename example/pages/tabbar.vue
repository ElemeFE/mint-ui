<template>
  <div class="page-tabbar">
    <div class="page-title">Tabbar</div>
    <mt-cell title="当前选中">{{selected | json}}</mt-cell>
    <mt-tabbar :selected.sync="selected">
      <mt-tab-item value="外卖">
        <img slot="icon" src="../assets/100x100.png">
        <span slot="label">外卖</span>
      </mt-tab-item>
      <mt-tab-item :value="['订单', '测试数组']">
        <img slot="icon" src="../assets/100x100.png">
        <span slot="label">订单</span>
      </mt-tab-item>
      <mt-tab-item value="{item: '发现'}">
        <img slot="icon" src="../assets/100x100.png">
        <span slot="label">发现</span>
      </mt-tab-item>
      <mt-tab-item :value="true">
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
      selected: ''
    };
  }
};
</script>

<style lang="css">
</style>
