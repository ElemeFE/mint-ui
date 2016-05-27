<template>
  <div class="page-navbar">
    <div class="page-title">Navbar</div>
    <mt-navbar class="page-part" :selected.sync="selected">
      <mt-tab-item id="1">
        <span slot="label">选项一</span>
      </mt-tab-item>
      <mt-tab-item id="2">
        <span slot="label">选项二</span>
      </mt-tab-item>
      <mt-tab-item id="3">
        <span slot="label">选项三</span>
      </mt-tab-item>
    </mt-navbar>

    <div>
      <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
    </div>

    <mt-panel :active.sync="selected">
      <mt-panel-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n"></mt-cell>
      </mt-panel-item>
      <mt-panel-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n"></mt-cell>
      </mt-panel-item>
      <mt-panel-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n"></mt-cell>
      </mt-panel-item>
    </mt-panel>
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
