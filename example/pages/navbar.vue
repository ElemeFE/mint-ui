<template>
  <div class="page-navbar">
    <div class="page-title">Nabbar</div>
    <kb-navbar class="page-part" :selected.sync="selected">
      <kb-tab-item value="选项一">
        <span slot="label">选项一</span>
      </kb-tab-item>
      <kb-tab-item value="选项二">
        <span slot="label">选项二</span>
      </kb-tab-item>
      <kb-tab-item value="选项三">
        <span slot="label">选项三</span>
      </kb-tab-item>
    </kb-navbar>

    <kb-cell title="当前选中">{{ selected }}</kb-cell>
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
