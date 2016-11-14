<template>
  <a class="mint-cell" :href="href">
    <span class="mint-cell-mask" v-if="isLink"></span>
    <div class="mint-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="mint-cell-wrapper">
      <div class="mint-cell-title">
        <slot name="icon">
          <i v-if="icon" class="mintui" :class="'mintui-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="mint-cell-text" v-text="title"></span>
          <span v-if="label" class="mint-cell-label" v-text="label"></span>
        </slot>
      </div>
      <div class="mint-cell-value" :class="{ 'is-link' : isLink }">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
    </div>
    <div class="mint-cell-right">
      <slot name="right"></slot>
    </div>
    <i v-if="isLink" class="mint-cell-allow-right"></i>
  </a>
</template>

<script>
if (process.env.NODE_ENV === 'component') {
  require('mint-ui/packages/font/style.css');
}

function cleanPath(path) {
  return path.replace(/\/\//g, '/');
}

/**
 * mt-cell
 * @module components/cell
 * @desc 单元格
 * @param {string} [to] - 跳转链接
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
    to: String,
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },

  computed: {
    href() {
      let href;

      if (this.$router && this.to) {
        const base = this.$router.history.base;
        const resolved = this.$router.match(this.to);
        const fullPath = resolved.redirectedFrom || resolved.fullPath;

        href = base ? cleanPath(base + fullPath) : fullPath;
      } else {
        href = this.to;
      }

      if (href && !this.added && this.$router) {
        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
      }
      return href;
    }
  },

  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
};
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component cell {
      background-color: $color-white;
      box-sizing: border-box;
      color: inherit;
      min-height: 48px;
      display: block;
      overflow: hidden;
      position: relative;
      text-decoration: none;

      &:first-child {
        .mint-cell-wrapper {
          background-origin: border-box;
        }
      }

      &:last-child {
        background-image: linear-gradient(0deg, $color-grey, $color-grey 50%, transparent 50%);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: bottom;
      }

      @descendent wrapper {
        background-image:linear-gradient(180deg, $color-grey, $color-grey 50%, transparent 50%);
        background-size: 120% 1px;
        background-repeat: no-repeat;
        background-position: top left;
        background-origin: content-box;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        font-size: 16px;
        line-height: 1;
        min-height: inherit;
        overflow: hidden;
        padding: 0 10px;
        width: 100%;
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
        font-size: 12px;
        margin-top: 6px;
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

        @when link {
          margin-right: 24px;
        }
      }

      @descendent left {
        position: absolute;
        height: 100%;
        left: 0;
        transform: translate3d(-100%, 0, 0);
      }

      @descendent right {
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        transform: translate3d(100%, 0, 0);
      }

      @descendent allow-right::after {
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
</style>
