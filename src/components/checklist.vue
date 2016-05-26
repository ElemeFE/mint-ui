<template>
  <div class="mint-checklist" :class="{ 'is-limit': max <= value.length }">
    <label class="mint-checklist-title" v-text="title"></label>
    <x-cell v-for="option in options">
      <div slot="title">
        <label>
          <span class="mint-checkbox">
            <input
              class="mint-checkbox-core"
              type="checkbox"
              v-model="value"
              :disabled="option.disabled"
              :value="option.value || option">
          </span>
          <slot>
            <span class="mint-checkbox-label" v-text="option.label || option"></span>
          </slot>
        </label>
      </div>
    </x-cell>
  </div>
</template>

<script>
import XCell from 'src/components/cell';

/**
 * mt-checklist
 * @module components/checklist
 * @desc 复选框列表，依赖 cell 组件
 *
 * @param {string[], object[]} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - icon 对齐方式，`left`, `right`
 *
 * @example
 * <mt-checklist :value.sync="value" :options="['a', 'b', 'c']"></mt-checklist>
 */
export default {
  name: 'mt-checklist',

  props: {
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      default: [],
      twoWay: true
    }
  },

  components: {
    XCell
  },

  computed: {
    limit() {
      return this.max < this.value.length;
    }
  },

  watch: {
    value() {
      if (this.limit) {
        this.value.pop();
      }
    }
  }
};
</script>

<style lang="css">
  @import "../style/var.css";

  @component-namespace mint {
    @component checklist {
      @descendent title {
        font-size: 12px;
        margin: 8px;
        display: block;
        color: var(--checklist-title-color);
      }

      @when limit {
        & .mint-checkbox-core:not(:checked) {
          background-color: var(--color-grey);
          border-color: var(--color-grey);
        }
      }
    }

    @component checkbox {
      @descendent label {
        vertical-align: middle;
        font-size: 14px;
        margin-left: 6px;
      }

      @descendent core {
        appearance: none;
        outline: 0;
        background-color: var(--color-white);
        border-radius: 100%;
        border: 1px solid #ccc;
        position: relative;
        size: 20px;
        vertical-align: middle;

        &::after {
          border: 2px solid transparent;
          border-left: 0;
          border-top: 0;
          content: " ";
          display: table;
          position: absolute 3px * * 6px;
          size: 4px 8px;
          transform: rotate(45deg);

        }

        &:checked {
          background-color: var(--color-blue);
          border-color: var(--color-blue);

          &::after {
            border-color: var(--color-white);
          }
        }

        &[disabled] {
          background-color: var(--color-grey);
          border-color: #ccc;
        }
      }
    }
  }
</style>
