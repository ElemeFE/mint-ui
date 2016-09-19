<template>
  <span
    class="mint-badge"
    :style="{ backgroundColor: color }"
    :class="['is-' + type, 'is-size-' + size]">
    <slot></slot>
  </span>
</template>

<script>
/**
 * mt-badge
 * @module components/badge
 * @desc 徽章
 * @param {string} [type=primary] 组件样式，可选 primary, error, success, warning
 * @param {string} [color] - 传入颜色值
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 *
 * @example
 * <mt-badge color="error">错误</mt-badge>
 * <mt-badge color="#333">30</mt-badge>
 */
export default {
  name: 'mt-badge',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
};
</script>
<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component badge {
      color: $color-white;
      text-align: center;
      display: inline-block;

      @when success {
        background-color: $success-color;
      }

      @when primary {
        background-color: $color-blue;
      }

      @when error {
        background-color: $error-color;
      }

      @when warning {
        background-color: $warning-color;
      }

      @when size-normal {
        border-radius: 12px;
        font-size: 15px;
        padding: 2px 8px;
      }

      @when size-small {
        border-radius: 8px;
        font-size: 12px;
        padding: 2px 6px;
      }

      @when size-large {
        border-radius: 14px;
        font-size: 18px;
        padding: 2px 10px;
      }
    }
  }
</style>
