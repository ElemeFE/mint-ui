<template>
  <div class="mint-radiolist">
    <label class="mint-radiolist-title" v-text="title"></label>
    <mt-cell v-for="option in options">
      <div slot="title">
        <label>
          <span class="mint-radio">
            <input
              class="mint-radio-core"
              type="radio"
              v-model="value"
              :disabled="option.disabled"
              :value="option.value || option">
          </span>
          <span class="mint-radio-label" v-text="option.label || option"></span>
        </label>
      </div>
    </mt-cell>
  </div>
</template>

<script>
/**
 * mt-radio
 * @module components/radio
 * @desc 单选框列表，依赖 cell 组件
 *
 * @param {string[], object[]} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string} value - 选中值
 * @param {string} title - 标题
 *
 * @example
 * <mt-radio :value.sync="value" :options="['a', 'b', 'c']"></mt-radio>
 */
export default {
  name: 'mt-radio',

  props: {
    title: String,
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      twoWay: true
    }
  }
};
</script>

<style lang="css">
  @import "../style/var.css";

  @component-namespace mint {
    @component radiolist {
      @descendent title {
        font-size: 12px;
        margin: 8px;
        display: block;
        color: var(--radio-title-color);
      }
    }

    @component radio {
      @descendent label {
        vertical-align: middle;
        font-size: 14px;
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
          content: " ";
          display: table;
          border-radius: 100%;
          position: absolute 5px * * 5px;
          size: 8px;
        }

        &:checked {
          background-color: var(--color-blue);
          border-color: var(--color-blue);

          &::after {
            background-color: var(--color-white);
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
