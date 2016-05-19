<template>
  <a
    class="kebab-button"
    :class="[ { 'is-disabled': disabled }, 'kebab-button--' + type, 'kebab-button--' + size ]"
    @touchstart="handleClick">
    <i v-if="icon" class="icon" :class="'icon-' + icon"></i>
    <slot></slot>
  </a>
</template>

<script>
/**
 * kb-header
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .ionc-xxx）
 *
 * @example
 * <kb-button size="large" icon="back" type="primary">按钮</kb-button>
 */
export default {
  name: 'kb-button',

  props: {
    icon: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  },

  methods: {
    handleClick($event) {
      if (this.disabled) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }
};
</script>

<style lang="css">
  @import "../style/var.css";

  @component-namespace kebab {
    @component button {
      border-radius: 4px;
      color: inherit;
      display: block;
      font-size: 18px;
      line-height: 2.6rem;
      overflow-y: hidden;
      position: relative;
      text-align: center;

      &::after {
        background-color: #000;
        content: " ";
        opacity: 0;
        position: absolute 0 0 0 0;
      }

      &:not(.is-disabled):active::after {
        opacity: .4;
      }

      @modifier default {
        color: var(--button-default-font-color);
        background-color: var(--button-default-background-color);
        box-shadow: 0 0 1px #ccc;
      }

      @modifier primary {
        color: var(--button-primary-font-color);
        background-color: var(--button-primary-background-color);
      }

      @modifier danger {
        color: var(--button-danger-font-color);
        background-color: var(--button-danger-background-color);
      }

      @modifier large {
        display: block;
      }

      @modifier normal {
        display: inline-block;
        padding: 0 0.75rem;
      }

      @modifier small {
        display: inline-block;
        font-size: 14px;
        padding: 0 0.75rem;
        line-height: 2rem;
      }

      @when disabled {
        opacity: .6;
      }
    }
  }
</style>
