<template>
  <button @click="openIndicator">点击弹出 Indicator</button>
  <button @click="openIndicatorWithText">点击弹出带有文字的 Indicator</button>
</template>

<script type="text/babel">
  import { Indicator } from 'src/index';

  export default {
    methods: {
      openIndicator() {
        Indicator.open();
      },

      openIndicatorWithText() {
        Indicator.open('加载中...');
      }
    },

    beforeDestroy() {
      Indicator.close();
    }
  };
</script>
