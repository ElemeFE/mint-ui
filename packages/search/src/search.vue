<template>
  <div class="mint-search">
    <div class="mint-searchbar" :data-expand="expand" :data-has-value="hasValue" :data-status="status" :data-fixed-cancel="fixedCancelBtn" :data-lang="lang">
      <div class="input-container">
        <span class="placeholder-container">
          <i class="mintui mintui-search search-icon"></i>
          <span class="placeholder">{{placeholder}}</span>
        </span>
        <div class="text-input-container">
          <input 
            ref="input"
            type="text"
            class="text-input"
            @focus="focus"
            @blur="_blur"
            @input="_input"
            v-model="currentValue"
          >
          <div class="btn-clear" @click="clear" v-show="showCancelBtn"></div>
        </div>
      </div>
      <div class="btn-cancel" @click="cancel">
        <span class="btn-cancel-container">{{cancelText}}</span>
        <div class="btn-cancel-takeplace">{{cancelText}}</div>
      </div>
    </div>


    <div class="mint-search-list" v-show="show || hasValue">
      <div class="mint-search-list-warp">
        <slot>
          <x-cell v-for="(item, index) in result" :key="index" :title="item"></x-cell>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import XCell from 'mint-ui/packages/cell/index.js';
if (process.env.NODE_ENV === 'component') {
  require('mint-ui/packages/cell/style.css');
}

/**
 * mt-search
 * @module components/search
 * @desc 搜索框
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder=取消] - 搜索框占位内容
 * @param {boolean} [autofocus=false] - 自动 focus
 * @param {boolean} [show=false] - 始终显示列表
 * @param {string[]} [result] - 结果列表
 * @param {slot} 结果列表
 * @param {boolean} [showCancelBtn=true] 是否显示取消按钮
 * @param {boolean} [fixedCancelBtn=false] 是否固定取消按钮
 * @param {string} [lang=zh] 取消按钮文字部分为中文
 * @method focus 获取焦点
 * @method cancel 取消
 * @method clear 清空输入
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
      visible: false,
      currentValue: this.value,
      status: this.value ? 'blur' : 'focus',
      expand: !!this.value,
      hasValue: !!this.value
    };
  },

  components: { XCell },

  watch: {
    currentValue(val) {
      this.$emit('input', val);
      this.hasValue = !!this.currentValue;
    },

    value(val) {
      this.currentValue = val;
    }
  },

  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    },
    result: Array,

    showCancelBtn: {
      type: Boolean,
      default: true
    },
    fixedCancelBtn: {
      type: Boolean,
      default: false
    },
    lang: {
      type: String,
      default: 'zh',
      validator(value) {
        return [
          'zh',
          'en'
        ].indexOf(value) > -1;
      }
    }
  },

  mounted() {
    setTimeout(()=>{
      this.autofocus && this.focus();
    }, 50);
  },

  methods: {
    _input() {
      this.hasValue = !!this.currentValue;
    },

    _blur() {
      this.status = 'blur';
      if (this.hasValue) return;
      this.cancel();
    },

    // 对外可用的方法
    focus() {
      this.status = 'focus';
      this.expand = true;
      this.$refs.input.focus();
    },

    cancel() {
      this.clear(false);
      this.expand = false;
    },

    clear(focus = true) {
      focus && this.focus();
      this.currentValue = '';
      this.hasValue = false;
    }
  }
};
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component search-list {
      overflow: auto;
      padding-top: 44px;
      position: absolute 0 0 0 0;
    }
  }
</style>

<style scoped>
  .mint-searchbar{
    position: relative;
    padding: 8px 10px;
    display: flex;
    background-color: #EFEFF4;
    height: 28px;
    overflow: hidden;
    will-change: opacity;
    box-sizing: initial;
    z-index: 1;
  }

  .mint-searchbar *{
    box-sizing: initial;
  }

  .mint-searchbar[data-has-value=true] .placeholder{
    visibility: hidden;
  }

  .mint-searchbar[data-has-value=true] .btn-clear{
    opacity: 1;
  }

  .mint-searchbar[data-status='blur'] .btn-clear{
    opacity: 0;
  }

  .mint-searchbar[data-lang='zh'] .btn-cancel-takeplace{
    letter-spacing: -17px;
  }

  .mint-searchbar[data-lang='en'] .btn-cancel-takeplace{
    letter-spacing: -9px;
  }


  .mint-searchbar[data-expand=true] .input-container::before{
    flex: 0 0 auto;
  }

  .mint-searchbar[data-expand=true] .text-input-container{
    width: calc(100% - 38px);
    left: 38px;
  }

  .mint-searchbar[data-fixed-cancel=true] .btn-cancel,
  .mint-searchbar[data-expand=true] .btn-cancel{
    opacity: 1;
      margin-left: 0px;
      transform: translateX(0px);
  }

  .mint-searchbar[data-fixed-cancel=true][data-lang] .btn-cancel-takeplace,
  .mint-searchbar[data-expand=true][data-lang] .btn-cancel-takeplace{
    letter-spacing: unset;
  }

  .input-container{
    flex: auto;
    margin-right: 10px;
    border-radius: 3.5px;
    background: white;
    display: inline-flex;
    overflow: hidden;
    position: relative;
  }

  .input-container::after,
  .input-container::before{
    content: '';
    flex: auto;
    transition: all 300ms ease;
  }

  .input-container::before{
    margin-left: 15px;
  }

  .btn-cancel{
    flex: 0 0 auto;
    color: #26a2ff;
    margin-left: -10px;
    transform: translateX(10px);
    font-size: 17px;
    line-height: 1.6;
  }

  .btn-cancel-container{
    position: absolute;
    width: 100vw;
    z-index: -1;
  }

  .btn-cancel-takeplace, .btn-cancel{
    opacity: 0;
    transition: all 300ms ease;
    transition-delay: 80ms;
  }

  .placeholder-container{
    flex: 0 0 auto;
    transition: all 300ms ease;
    display: inline-flex;
    align-items: center;
    color: #b2b2b2;
  }

  .placeholder{
    font-size: 15px;
  }

  .search-icon{
    margin-right: 8px;
    font-size: 15px;
  }

  .text-input-container{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
  }

  .text-input{
    background: transparent;
    outline: none;
    border: none;
    height: 28px;
    display: block;
    font-size: 15px;
    flex: auto;
    margin-right: 5px;
  }

  .btn-clear{
    flex: 0 0 auto;
    margin-right: 5px;
    z-index: 0;
    width: 15px;
    height: 15px;
    overflow: hidden;
    opacity: 0;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28'%3E%3Ccircle cx='14' cy='14' r='14' fill='%23ccc'/%3E%3Cpath stroke='%23fff' stroke-width='2' stroke-miterlimit='10' d='M8 8l12 12'/%3E%3Cpath fill='none' stroke='%23fff' stroke-width='2' stroke-miterlimit='10' d='M20 8L8 20'/%3E%3C/svg%3E");
  }
</style>