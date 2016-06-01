<template>
  <div class="mint-search">
    <div class="mint-searchbar">
      <div class="mint-searchbar-inner">
        <i class="mintui mintui-search" v-show="visible"></i>
        <input
        v-el:input
        @click="visible = true"
        type="search"
        v-model="value"
        :placeholder="visible ? placeholder : ''"
        class="mint-searchbar-core">
      </div>
      <a
        class="mint-searchbar-cancel"
        @click="visible = false, value = ''"
        v-show="visible"
        v-text="cancelText">
      </a>
      <label
        @click="visible = true, $els.input.focus()"
        class="mint-searchbar-placeholder"
        v-show="!visible">
        <i class="mintui mintui-search"></i>
        <span class="mint-searchbar-text" v-text="placeholder"></span>
      </label>
    </div>
    <div class="mint-search-list" v-show="value">
      <div class="mint-search-list-warp">
        <slot>
          <x-cell v-for="item in result" track-by="$index" :title="item"></x-cell>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import XCell from 'src/components/cell';
import 'cell/style.css';

/**
 * mt-search
 * @module components/search
 * @desc 搜索框
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder=取消] - 搜索框占位内容
 * @param {string[]} [result] - 结果列表
 * @param {slot} 结果列表
 *
 * @example
 * <mt-search :value.sync="value" :result.sync="result"></mt-search>
 * <mt-search :value.sync="value">
 *   <mt-cell v-for="item in result" :title="item"></mt-cell>
 * </mt-search>
 */
export default {
  name: 'mt-search',

  data() {
    return {
      visible: false
    };
  },

  components: {
    XCell
  },

  props: {
    value: String,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    },
    result: Array
  }
};
</script>

<style lang="css">
  @import "../style/var.css";
  @import "../style/border.css";

  @component-namespace mint {
    @component search {
      height: 100%;
      height: 100vh;
      overflow: hidden;
    }

    @component searchbar {
      @mixin border-bottom var(--border-color);
      align-items: center;
      background-color: var(--color-grey);
      box-sizing: border-box;
      display: flex;
      padding: 8px 10px;
      z-index: 1;

      @descendent inner {
        background-color: var(--color-white);
        border-radius: 2px;
        flex: 1;
        height: 28px;
        padding: 4px 6px;

        .icon {
          font-size: 12px;
          color: var(--color-grey);
        }
      }

      @descendent core {
        appearance: none;
        border: 0;
        box-sizing: border-box;
        height: 100%;
        outline: 0;
      }

      @descendent placeholder {
        color: #9b9b9b;
        font-size: 12px;
        padding: 14px;
        position: absolute 0 0 0 0;
        text-align: center;
        vertical-align: middle;

        .icon {
          font-size: 12px;
        }
      }

      @descendent text {
        vertical-align: middle;
      }

      @descendent cancel {
        color: var(--color-blue);
        margin-left: 10px;
      }
    }

    @component search-list {
      overflow: auto;
      padding-top: 44px;
      position: absolute 0 0 0 0;
    }
  }
</style>
