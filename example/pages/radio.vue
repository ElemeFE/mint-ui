<template>
  <div class="page-radio">
    <div class="page-title">radio</div>

    <kb-radio
      class="page-part"
      title="单选框列表"
      :value.sync="value1"
      :options="options1">
    </kb-radio>

    <kb-cell title="选中的项">{{ value1 | json }}</kb-cell>

    <kb-radio
      class="page-part"
      title="第二个单选框列表"
      :value.sync="value2"
      :options="options2">
    </kb-radio>

    <kb-cell title="选中的项">{{ value2 | json }}</kb-cell>
  </div>
</template>

<script>
export default {
  name: 'page-radio',

  data() {
    return {
      value1: '',
      value2: '值A'
    };
  },

  created() {
    this.options1 = ['选项A', '选项B', '选项C'];
    this.options2 = [
      {
        label: '被禁用',
        value: '值F',
        disabled: true
      },
      {
        label: '选项A',
        value: '值A'
      },
      {
        label: '选项B',
        value: '值B'
      }
    ];
  }
};
</script>

<style lang="css">
  .page-radio .page-part {
    margin-top: 40px;
  }
</style>

