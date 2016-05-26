<template>
  <div class="page-navbar">
    <div class="page-title">Navbar</div>
    <mt-navbar class="page-part" :selected.sync="selected">
      <mt-tab-item value="选项一">
        <span slot="label">选项一</span>
      </mt-tab-item>
      <mt-tab-item value="选项二">
        <span slot="label">选项二</span>
      </mt-tab-item>
      <mt-tab-item value="选项三">
        <span slot="label">选项三</span>
      </mt-tab-item>
    </mt-navbar>

    <mt-cell title="当前选中">{{ selected }}</mt-cell>
  </div>
</template>

<script>
export default {
  name: 'page-navbar',

  data() {
    return {
      selected: ''
    };
  }
};
</script>

<style lang="css">
</style>
