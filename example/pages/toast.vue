<template>
  <button @click="openToast">点击弹出 Toast</button>
  <button @click="openToastWithIcon">点击弹出带有 icon 的 Toast</button>
</template>

<script type="text/babel">
  import { Toast } from 'src/index';

  export default {
    methods: {
      openToast() {
        Toast('提示信息');
      },

      openToastWithIcon() {
        Toast({
          message: '操作成功',
          iconClass: 'd-icon-success'
        });
      }
    }
  };
</script>
