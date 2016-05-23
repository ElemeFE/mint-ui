<template>
  <div class="page-tabbar">
    <div class="page-title">Tabbar</div>
    <kb-cell title="当前选中">{{selected | json}}</kb-cell>
    <kb-tabbar :selected.sync="selected">
      <kb-tab-item value="外卖">
        <img slot="icon" src="../assets/100x100.png">
        <span slot="label">外卖</span>
      </kb-tab-item>
      <kb-tab-item :value="['订单', '测试数组']">
        <img slot="icon" src="../assets/100x100.png">
        <span slot="label">订单</span>
      </kb-tab-item>
      <kb-tab-item value="{item: '发现'}">
        <img slot="icon" src="../assets/100x100.png">
        <span slot="label">发现</span>
      </kb-tab-item>
      <kb-tab-item :value="true">
        <img slot="icon" src="../assets/100x100.png">
        <span slot="label">我的</span>
      </kb-tab-item>
    </kb-tabbar>
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
