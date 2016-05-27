<template>
  <div v-show="id === $parent.active" class="mint-panel-item"><slot></slot></div>
</template>

<script>
/**
 * mt-panel-item
 * @desc 搭配 panel 使用
 * @module components/panel-item
 *
 * @param {number|string} [id] - 该项的 id
 *
 * @example
 * <mt-panel :active.sync="selected">
 *   <mt-panel-item id="1"> 内容A </mt-panel-item>
 *   <mt-panel-item id="2"> 内容B </mt-panel-item>
 *   <mt-panel-item id="3"> 内容C </mt-panel-item>
 * </mt-panel>
 */
export default {
  name: 'mt-panel-item',

  props: {
    id: ''
  }
};
</script>
