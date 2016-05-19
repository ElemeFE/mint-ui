<template>
  <div class="toast-wrapper">
    <kb-button @click="openToast" size="large" type="primary">点击弹出 Toast</kb-button>
    <kb-button @click="openToastWithIcon" size="large" type="primary">点击弹出带有 icon 的 Toast</kb-button>
  </div>
</template>

<style>
  .toast-wrapper {
    padding: 0 20px;
    position: absolute 50% * * *;
    width: 100%;
    transform: translateY(-50%);
  }

  .kebab-button:first-child {
    margin-bottom: 20px;
  }
</style>

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
          iconClass: 'icon icon-more'
        });
      }
    }
  };
</script>
