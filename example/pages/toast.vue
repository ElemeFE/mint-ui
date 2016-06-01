<template>
  <div class="page-toast">
    <h1 class="page-title">Toast</h1>
    <div class="page-toast-wrapper">
      <mt-button @click="openToast" size="large" type="primary">点击弹出 Toast</mt-button>
      <mt-button @click="openToastWithIcon" size="large" type="primary">点击弹出带有 icon 的 Toast</mt-button>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component toast {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);
        a:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

<script type="text/babel">
  import 'src/assets/font/iconfont.css';
  import { Toast } from 'src/index';

  export default {
    methods: {
      openToast() {
        Toast('提示信息');
      },

      openToastWithIcon() {
        Toast({
          message: '操作成功',
          iconClass: 'icon mintui-success'
        });
      }
    }
  };
</script>
