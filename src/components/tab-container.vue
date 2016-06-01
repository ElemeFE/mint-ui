<template>
  <div class="mint-tab-container"><slot></slot></div>
</template>

<script>
/**
 * mt-tab-container
 * @desc 面板，搭配 tab-container-item 使用
 * @module components/tab-container
 *
 * @param {number|string} [active] - 当前激活的 tabId
 *
 * @example
 * <mt-tab-container :active.sync="selected">
 *   <mt-tab-container-item id="1"> 内容A </mt-tab-container-item>
 *   <mt-tab-container-item id="2"> 内容B </mt-tab-container-item>
 *   <mt-tab-container-item id="3"> 内容C </mt-tab-container-item>
 * </mt-tab-container>
 */
export default {
  name: 'mt-tab-container',

  props: {
    active: ''
  }
};
</script>
