<template>
  <header
    class="kebab-header"
    :class="{ 'is-fixed': fixed }">
    <div class="kebab-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="kebab-header-title" v-text="title"></h1>
    <div class="kebab-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
/**
 * kb-header
 * @module components/header
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 *
 * @example
 * <kb-header title="我是标题" fixed>
 *   <kb-button slot="left" icon="back" @click="handleBack">返回</kb-button>
 *   <kb-button slot="right" icon="more"></kb-button>
 * </kb-header>
 */
export default {
  name: 'kb-header',

  props: {
    fixed: Boolean,
    title: String
  }
};
</script>

<style lang="css">
  @import '../style/var.css';

  @component-namespace kebab {
    @component header {
      align-items: center;
      background-color: var(--color-blue);
      color: var(--color-white);
      display: flex;
      height: var(--header-height);
      position: relative;
      text-align: center;
      padding: 0 10px;

      & .kebab-button {
        background-color: transparent;
        border: 0;
        box-shadow: none;
        color: inherit;
        display: inline-block;
        padding: 0;
        font-size: inherit;

        &::after {
          content: none;
        }
      }

      @descendent button {
        flex: .5;

        @when left {
          text-align: left;
        }

        @when right {
          text-align: right;
        }
      }

      @descendent title {
        @utils-ellipsis;
        flex: 1;
      }

      @when fixed {
        position: fixed 0 0 * 0;
        z-index: var(--z-index-normal);
      }
    }
  }
</style>