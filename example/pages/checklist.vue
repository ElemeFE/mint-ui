<template>
  <div class="page-checklist">
    <div class="page-title">Checklist</div>

    <mt-checklist
      class="page-part"
      title="复选框列表"
      :value.sync="value1"
      :index="index1"
      :options="options1">
    </mt-checklist>

    <mt-cell title="选中的项">{{ value1 | json }}</mt-cell>

    <mt-checklist
      class="page-part"
      title="第二个复选框列表"
      :value.sync="value2"
      :options="options2">
    </mt-checklist>

    <mt-cell title="选中的项">{{ value2 | json }}</mt-cell>

    <mt-checklist
      class="page-part"
      title="最多选两个"
      :max="2"
      :value.sync="value3"
      :options="options3">
    </mt-checklist>

    <mt-cell title="选中的项">{{ value3 | json }}</mt-cell>
  </div>
</template>

<script>
export default {
  name: 'page-checklist',

  data() {
    return {
      value1: [],
      value2: ['选中禁用的值'],
      value3: ['选项A']
    };
  },

  created() {
    this.options1 = ['选项A', '选项B', '选项C'];
    this.options3 = ['选项A', '选项B', '选项C', '选项D'];
    this.options2 = [
      {
        label: '被禁用',
        value: '值F',
        disabled: true
      },
      {
        label: '选中禁用',
        value: '选中禁用的值',
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
  .page-checklist .page-part {
    margin-top: 40px;
  }
</style>
