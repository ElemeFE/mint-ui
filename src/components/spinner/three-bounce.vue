<template>
  <div class="kebab-spinner-three-bounce">
    <div class="kebab-spinner-three-bounce-bounce1" :style="bounceStyle"></div>
    <div class="kebab-spinner-three-bounce-bounce2" :style="bounceStyle"></div>
    <div class="kebab-spinner-three-bounce-bounce3" :style="bounceStyle"></div>
  </div>
</template>

<script>
  import common from './common.vue';

  export default {
    mixins: [common],

    computed: {
      size() {
        return (this.$parent.size / 3) + 'px';
      },

      bounceStyle() {
        return {
          width: this.size,
          height: this.size,
          backgroundColor: this.color
        };
      }
    }
  };
</script>

<style lang="css">
@component-namespace kebab-spinner {
  @component three-bounce {
    text-align: center;

    @descendent bounce1, bounce2, bounce3 {
      border-radius: 100%;
      display: inline-block;
      animation: kebab-spinner-three-bounce 1.4s infinite ease-in-out both;
    }

    @descendent bounce1 {
      animation-delay: -0.32s;
    }

    @descendent bounce1 {
      animation-delay: -0.16s;
    }
  }
}

@keyframes kebab-spinner-three-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
}
</style>
