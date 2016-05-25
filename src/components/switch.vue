<template>
  <div class="mint-switch">
    <input class="mint-switch-core" type="checkbox" v-model="value">
    <div class="mint-switch-label"><slot></slot></div>
  </div>
</template>

<script>
/**
 * mt-switch
 * @module components/switch
 * @desc 切换按钮
 * @param {boolean} [value] - 绑定值，支持双向绑定
 * @param {slot} - 显示内容
 *
 * @example
 * <mt-switch :value.sync="value"></mt-switch>
 */
export default {
  name: 'mt-switch',

  props: {
    value: Boolean
  }
};
</script>

<style lang="css">
  @import "../style/var.css";

  @component-namespace mint {
    @component switch {
      display: flex;
      align-items: center;

      @descendent label {
        margin-left: 10px;

        &:empty {
          margin-left: 0;
        }
      }

      @descendent core {
        appearance: none;
        position: relative;
        size: 52px 32px;
        border: 1px solid var(--color-grey);
        outline: 0;
        border-radius: 16px;
        box-sizing: border-box;
        background: var(--color-grey);

        &::after, &::before {
          content: " ";
          position: absolute 0 * * 0;
          transition:transform .3s;
          border-radius: 15px;
        }

        &::after {
          size: 30px;
          background-color: var(--color-white);
          box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
        }

        &::before {
          size: 50px 30px;
          background-color: #fdfdfd;
        }

        &:checked {
          border-color: var(--color-blue);
          background-color: var(--color-blue);

          &::before {
            transform: scale(0);
          }

          &::after {
            transform: translateX(20px);
          }
        }
      }
    }
  }
</style>
