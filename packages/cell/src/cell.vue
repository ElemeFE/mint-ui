<template>
  <a class="mint-cell">
    <span class="mint-cell-mask" v-if="isLink"></span>
    <div class="mint-cell-title">
      <slot name="icon">
        <i v-if="icon" class="mintui" :class="'mintui-' + icon"></i>
      </slot>
      <slot name="title">
        <span class="mint-cell-text" v-text="title"></span>
        <span v-if="label" class="mint-cell-label" v-text="label"></span>
      </slot>
    </div>
    <div class="mint-cell-value">
      <slot>
        <span v-text="value"></span>
      </slot>
    </div>
    <i v-if="isLink" class="mint-cell-allow-right"></i>
  </a>
</template>

<script>
if (process.env.NODE_ENV === 'component') {
  require('mint-ui/packages/font/style.css');
}

/**
 * mt-cell
 * @module components/cell
 * @desc 单元格
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <mt-cell title="标题文字" icon="back" is-link value="描述文字"></mt-cell>
 * <mt-cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </mt-cell>
 */
export default {
  name: 'mt-cell',

  props: {
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: String
  }
};
</script>

<style lang="css">
  @import "../../../src/style/var.css";
  @import "../../../src/style/border.css";

  @component-namespace mint {
    @component cell {
      @mixin border-top $color-grey;
      @mixin border-bottom $color-grey;
      align-items: center;
      background-color: $color-white;
      box-sizing: border-box;
      color: inherit;
      display: flex;
      font-size: 16px;
      line-height: 1;
      overflow: hidden;
      padding: 16px 10px;
      position: relative;

      & + .mint-cell::after {
        content: none;
      }

      &::before {
        left: 10px;
      }

      &:last-child::before {
        left: 0;
      }

      @descendent mask {
        &::after {
          background-color: #000;
          content: " ";
          opacity: 0;
          position: absolute 0;
        }

        &:active::after {
          opacity: .1;
        }
      }

      @descendent text {
        vertical-align: middle;
      }

      @descendent label {
        color: #888;
        display: block;
        font-size: 14px;
        margin-top: 14px;
      }

      img {
        vertical-align: middle;
      }

      @descendent title {
        flex: 1;

      }

      @descendent value {
        color: $cell-value-color;
        display: flex;
        align-items: center;
      }

      @descendent allow-right {
        padding-left: 30px;

        &::after {
          border: solid 2px $border-color;
          border-bottom-width: 0;
          border-left-width: 0;
          content: " ";
          position: absolute 50% 20px * *;
          size: 5px;
          transform: translateY(-50%) rotate(45deg);
        }
      }
    }
  }
</style>
