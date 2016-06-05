<template>
  <a
    class="mint-button"
    :class="['mint-button--' + type, 'mint-button--' + size, {
        'is-disabled': disabled,
        'is-plain': plain
      }]"
    @touchstart="handleClick">
    <span class="mint-button-icon">
      <slot name="icon">
        <i v-if="icon" class="mintui" :class="'mintui-' + icon"></i>
      </slot>
    </span>
    <label class="mint-button-text"><slot></slot></label>
  </a>
</template>

<script>
import 'src/assets/font/iconfont.css';

/**
 * mt-header
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <mt-button size="large" icon="back" type="primary">按钮</mt-button>
 */
export default {
  name: 'mt-button',

  props: {
    icon: String,
    disabled: Boolean,
    plain: Boolean,
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

  @component-namespace mint {
    @component button {
      border-radius: 4px;
      box-sizing: border-box;
      color: inherit;
      display: block;
      font-size: 18px;
      line-height: 2.6rem;
      overflow: hidden;
      position: relative;
      text-align: center;
      height: 41px;

      &::after {
        background-color: #000;
        content: " ";
        opacity: 0;
        position: absolute 0 0 0 0;
      }

      &:not(.is-disabled):active::after {
        opacity: .4;
      }

      @descendent icon {
        vertical-align: middle;
      }

      @modifier default {
        color: $button-default-color;
        background-color: $button-default-background-color;
        box-shadow: $button-default-box-shadow;

        @when plain {
          border: 1px solid $button-default-plain-color;
          background-color: transparent;
          box-shadow: none;
          color: $button-default-plain-color;
        }
      }

      @modifier primary {
        color: $button-primary-color;
        background-color: $button-primary-background-color;

        @when plain {
          border: 1px solid $button-primary-background-color;
          background-color: transparent;
          color: $button-primary-background-color;
        }
      }

      @modifier danger {
        color: $button-danger-color;
        background-color: $button-danger-background-color;

        @when plain {
          border: 1px solid $button-danger-background-color;
          background-color: transparent;
          color: $button-danger-background-color;
        }
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
        height: 33px;
      }

      @when disabled {
        opacity: .6;
      }

      @when plain {

      }
    }
  }
</style>
