<template>
  <div class="kebab-tabbar" :class="{
      'is-fixed': fixed
    }">
    <slot></slot>
  </div>
</template>

<script>
/**
 * kb-tabbar
 * @module components/tabbar
 * @desc 底部 tab，依赖 tab-item
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <kb-tabbar :selected.sync="selected">
 *   <kb-tab-item value="订单">
 *     <img slot="icon" src="http://placehold.it/100x100">
 *     <span slot="label">订单</span>
 *   </kb-tab-item>
 * </kb-tabbar>
 *
 * <kb-tabbar :selected.sync="selected" fixed>
 *   <kb-tab-item :value="['传入数组', '也是可以的']">
 *     <img slot="icon" src="http://placehold.it/100x100">
 *     <span slot="label">订单</span>
 *   </kb-tab-item>
 * </kb-tabbar>
 */
export default {
  name: 'kb-tabbar',

  data() {
    return {
      selectedItem: ''
    };
  },

  props: {
    fixed: Boolean,
    selected: {
      twoWay: true
    }
  }
};
</script>

<style lang="css">
  @import "../style/var.css";

  @component-namespace kebab {
    @component tabbar {
      background-color: var(--tabbar-background-color);
      border-top: 1px solid var(--border-color);
      display: flex;
      position: absolute * 0 0 0;
      text-align: center;

      @when fixed {
        position: fixed * 0 0 0;
        z-index: var(--z-index-normal);
      }

      > .kebab-tab-item.is-selected {
        background-color: var(--tabbar-tab-item-selected-background-color);
        color: var(--tabbar-tab-item-selected-color);
      }
    }
  }
</style>
