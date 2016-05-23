<template>
  <a class="kebab-tab-item" @click="selectedItem" :class="{ 'is-selected': selected }">
    <div class="kebab-tab-item-icon"><slot name="icon"></slot></div>
    <div class="kebab-tab-item-label"><slot name="label"></slot></div>
  </a>
</template>

<script>
/**
 * kb-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} [value] - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} [label] - 文字
 *
 * @example
 * <kb-tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   <span slot="label">订单</span>
 * </kb-tab-item>
 */
export default {
  name: 'kb-tab-item',

  props: {
    value: {
      default: ''
    }
  },

  methods: {
    selectedItem() {
      this.$parent.selectedItem = this;
      this.$parent.selected = this.value;
    }
  },

  computed: {
    selected() {
      return this.$parent.selectedItem === this;
    }
  }
};
</script>

<style lang="css">
  @component-namespace kebab {
    @component tab-item {
      display: block;
      padding: 7px 0;
      flex: 1;

      @descendent icon {
        size: 24px;
        margin: 0 auto 5px;

        &:empty {
          display: none;
        }

        & > * {
          display: block;
          size: 100%;
        }
      }

      @descendent label {
        color: inherit;
        font-size: var(--tab-item-font-size);
        line-height: 1;
      }
    }
  }
</style>
