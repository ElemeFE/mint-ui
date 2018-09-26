<template>
  <div class="page-radio">
    <div class="page-title">radio</div>

    <mt-radio
      class="page-part"
      title="单选框列表"
      v-model="value1"
      :options="options1" />
    <div>
      <mt-cell title="选中的项">{{ value1 }}</mt-cell>
    </div>

    <mt-radio
      class="page-part"
      title="第二个单选框列表"
      v-model="value2"
      :options="options2" />
    <div>
      <mt-cell title="选中的项">{{ value2 }}</mt-cell>
    </div>

    <mt-radio
      align="right"
      class="page-part"
      title="右对齐"
      v-model="value3"
      :options="options3" />

    <mt-radio
      class="page-part"
      title="渲染选项为html元素"
      v-model="value4"
      renderAsHtml
      :options="options4" />
      <div>
      <mt-cell title="选中的项">{{ value4 }}</mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-radio',

  data() {
    return {
      value1: '',
      value2: '值A',
      value3: '',
      value4: ''
    };
  },

  created() {
    this.options1 = ['选项A', '选项B', '选项C'];
    this.options3 = ['选项A', '选项B', '选项C'];
    this.options4 = ['<i class="indexicon icon-indicator"></i> 请官方图标库加入支付宝icon 😁', '<i class="indexicon icon-indicator"></i> 请官方图标库加入微信icon 😁', '<i class="indexicon icon-indicator"></i> 请官方图标库加入银联icon😁'];
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

