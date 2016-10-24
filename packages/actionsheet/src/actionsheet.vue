<template>
  <div v-show="visible" class="mint-actionsheet" transition="actionsheet-float">
    <ul class="mint-actionsheet-list" :style="{ 'margin-bottom': cancelText ? '5px' : '0' }">
      <li v-for="item in actions" class="mint-actionsheet-listitem" @click="itemClick(item)">{{ item.name }}</li>
    </ul>
    <a class="mint-actionsheet-button" @click="visible = false" v-if="cancelText">{{ cancelText }}</a>
  </div>
</template>

<style>
  @component-namespace mint {
    @component actionsheet {
      position: fixed;
      background: #e0e0e0;
      width: 100%;
      text-align: center;
      bottom: 0;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      backface-visibility: hidden;

      @descendent list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      @descendent listitem {
        border-bottom: solid 1px #e0e0e0;
      }

      @descendent listitem, button {
        display: block;
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 18px;
        color: #333;
        background-color: #fff;
        &:active {
           background-color: #f0f0f0;
        }
      }
    }
  }

  .actionsheet-float-transition {
    transition: transform .3s ease-out .1s;
  }

  .actionsheet-float-enter,
  .actionsheet-float-leave {
    transform: translate3d(-50%, 100%, 0);
  }
</style>

<script type="text/babel">
  import Popup from 'vue-popup';
  import 'vue-popup/lib/popup.css';

  export default {
    name: 'mt-actionsheet',

    mixins: [Popup],

    props: {
      modal: {
        default: true
      },

      closeOnClickModal: {
        default: true
      },

      lockScroll: {
        default: false
      },

      cancelText: {
        type: String,
        default: '取消'
      },

      actions: {
        type: Array,
        default: () => []
      }
    },

    methods: {
      itemClick(item) {
        if (item.method && typeof item.method === 'function') {
          item.method();
        }
        this.visible = false;
      }
    },

    ready() {
      if (this.visible) {
        this.rendered = true;
        this.open();
      }
    }
  };
</script>
