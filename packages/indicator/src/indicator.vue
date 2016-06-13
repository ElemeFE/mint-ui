<template>
  <div class="mint-indicator" v-show="visible" transition="mint-indicator" >
    <div class="mint-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
      <spinner class="mint-indicator-spin" :type="convertedSpinnerType" :size="32"></spinner>
      <span class="mint-indicator-text" v-show="text">{{ text }}</span>
    </div>
    <div class="mint-indicator-mask"></div>
  </div>
</template>

<style>
  @component-namespace mint {
    @component indicator {
      @descendent wrapper {
        position: fixed 50% * * 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        box-sizing: border-box;
        text-align: center;
      }

      @descendent text {
        display: block;
        color: #fff;
        text-align: center;
        margin-top: 10px;
        font-size: 16px;
      }

      @descendent spin {
        display: inline-block;
        text-align: center;
      }

      @descendent mask {
        position: fixed 0 * * 0;
        size: 100%;
        opacity: 0;
        background: transparent;
      }
    }
  }

  .mint-indicator-transition {
    transition: opacity .2s linear;
  }

  .mint-indicator-enter,
  .mint-indicator-leave {
    opacity: 0;
  }
</style>

<script type="text/babel">
  import Spinner from 'packages/spinner/index.js';

  export default {
    data() {
      return {
        visible: false
      };
    },

    components: {
      Spinner
    },

    computed: {
      convertedSpinnerType() {
        switch (this.spinnerType) {
          case 'double-bounce':
            return 1;
          case 'triple-bounce':
            return 2;
          case 'fading-circle':
            return 3;
          default:
            return 0;
        }
      }
    },

    props: {
      text: String,
      spinnerType: {
        type: String,
        default: 'snake'
      }
    }
  };
</script>
