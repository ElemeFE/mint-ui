<template>
  <div class="indicator-wrapper">
    <kb-button @click="openIndicator" size="large" type="primary">点击弹出 Indicator</kb-button>
    <kb-button @click="openIndicatorWithText" size="large" type="primary">点击弹出带有文字的 Indicator</kb-button>
  </div>
</template>

<style>
  .indicator-wrapper {
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
  import { Indicator } from 'src/index';

  export default {
    methods: {
      openIndicator() {
        Indicator.open();
        setTimeout(() => Indicator.close(), 2000);
      },

      openIndicatorWithText() {
        Indicator.open('加载中...');
        setTimeout(() => Indicator.close(), 2000);
      }
    },

    beforeDestroy() {
      Indicator.close();
    }
  };
</script>
