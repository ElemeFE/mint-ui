<template>
  <div class="kebab-navbar" :class="{'is-fixed': fixed}">
    <slot></slot>
  </div>
</template>

<script>
/**
 * kb-navbar
 * @module components/navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <kb-navbar :selected.sync="selected">
 *   <kb-tab-item value="订单">
 *     <span slot="label">订单</span>
 *   </kb-tab-item>
 * </kb-navbar>
 *
 * <kb-navbar :selected.sync="selected" fixed>
 *   <kb-tab-item :value="['传入数组', '也是可以的']">
 *     <span slot="label">订单</span>
 *   </kb-tab-item>
 * </kb-navbar>
 *
 */
export default {
  name: 'kb-navbar',

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
    @component navbar {
      background-color: var(--navbar-background-color);
      display: flex;
      text-align: center;
      border: 1px solid var(--border-color);
      border-left: 0;
      border-right: 0;

      @when fixed {
        position: fixed 0 0 * 0;
        border-top: 0;
        z-index: var(--z-index-normal);
      }

      & .kebab-tab-item {
        padding: 17px 0;
        font-size: 15px;
        border-right: 1px solid var(--border-color);

        &:last-child {
          border-right: 0;
        }

        &.is-selected {
          background-color: var(--tabbar-tab-item-selected-background-color);
        }
      }
    }
  }
</style>
