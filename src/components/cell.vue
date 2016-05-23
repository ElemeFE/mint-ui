<template>
  <a class="kebab-cell" :class="{ 'is-link': isLink }">
    <label class="kebab-cell-title">
      <slot name="icon">
        <i v-if="icon" class="icon" :class="'icon-' + icon"></i>
      </slot>
      <slot name="title">
        <span class="kebab-cell-label" v-text="title"></span>
      </slot>
    </label>
    <div class="kebab-cell-value">
      <slot>
        <span v-text="value"></span>
      </slot>
    </div>
    <i v-if="isLink" class="kebab-cell-allow-right"></i>
  </a>
</template>

<script>
/**
 * kb-cell
 * @module components/cell
 * @desc 单元格
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .icon-xxx）
 * @paran {string} [title] - 标题
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <kb-cell title="标题文字" icon="back" is-link value="描述文字"></kb-cell>
 * <kb-cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </kb-cell>
 */
export default {
  name: 'kb-cell',

  props: {
    icon: String,
    title: String,
    isLink: Boolean,
    value: String
  }
};
</script>

<style lang="css">
  @import "../style/var.css";

  @component-namespace kebab {
    @component cell {
      align-items: center;
      background-color: var(--color-white);
      box-shadow: 0 0 1px var(--color-grey);
      box-sizing: border-box;
      color: inherit;
      display: flex;
      font-size: 18px;
      line-height: 2.6rem;
      padding: 0 10px;
      position: relative;

      @when link {
        &::after {
          background-color: #000;
          content: " ";
          opacity: 0;
          position: absolute 0 0 0 0;
        }

        &:active::after {
          opacity: .1;
        }
      }

      @descendent label {
        vertical-align: middle;
      }

      img {
        size: 24px;
        display: inline-block;
        vertical-align: middle;
      }

      @descendent title {
        flex: 1;

      }

      @descendent value {
        color: var(--cell-value-color);

        & > * {
          display: block;
        }
      }

      @descendent allow-right {
        padding-left: 30px;

        &::after {
          border: solid 2px var(--border-color);
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
