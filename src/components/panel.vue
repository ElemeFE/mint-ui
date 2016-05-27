<template>
  <div class="mint-panel"><slot></slot></div>
</template>

<script>
/**
 * mt-panel
 * @desc 面板，搭配 panel-item 使用
 * @module components/panel
 *
 * @param {number|string} [active] - 当前激活的 tabId
 *
 * @example
 * <mt-panel :active.sync="selected">
 *   <mt-panel-item id="1"> 内容A </mt-panel-item>
 *   <mt-panel-item id="2"> 内容B </mt-panel-item>
 *   <mt-panel-item id="3"> 内容C </mt-panel-item>
 * </mt-panel>
 */
export default {
  name: 'mt-panel',

  props: {
    active: ''
  }
};
</script>
