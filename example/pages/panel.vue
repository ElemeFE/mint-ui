<template>
  <ul class="nav">
    <li class="item"><a class="link" href="#" @click.prevent="active = 'panel1'">panel1</a></li>
    <li class="item"><a class="link" href="#" @click.prevent="active = 'panel2'">panel2</a></li>
    <li class="item"><a class="link" href="#" @click.prevent="active = 'panel3'">panel3</a></li>
  </ul>
  <div class="page-panel">
    <mt-panel style="page-tabbar-panel" :active="active">
      <mt-panel-item id="panel1">
        <mt-cell v-for="n in 10" :title="'panel1 ' + $index"></mt-cell>
      </mt-panel-item>
      <mt-panel-item id="panel2">
        <mt-cell v-for="n in 5" :title="'panel2 ' + $index"></mt-cell>
      </mt-panel-item>
      <mt-panel-item id="panel3">
        <mt-cell v-for="n in 7" :title="'panel3 ' + $index"></mt-cell>
      </mt-panel-item>
    </mt-panel>
  </div>
</template>

<script>
export default {
  name: 'page-panel',
  data() {
    return {
      active: 'panel1'
    };
  }
};
</script>

<style lang="css" scoped>
  .item {
    display: inline-block;
  }

  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
</style>
