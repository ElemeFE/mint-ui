<template>
  <div class="kebab-spinner-fading-circle" :style="{
      width: size,
      height: size
    }">
    <style>.kebab-spinner-fading-circle-circle::before { background-color: {{ color }}; }</style>
    <div class="is-circle1 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle2 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle3 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle4 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle5 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle6 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle7 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle8 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle9 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle10 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle11 kebab-spinner-fading-circle-circle"></div>
    <div class="is-circle12 kebab-spinner-fading-circle-circle"></div>
  </div>
</template>

<script>
  import common from './common.vue';

  export default {
    mixins: [common]
  };
</script>

<style lang="css">
  @component-namespace kebab-spinner {
    @component fading-circle {
      position: relative;

      @descendent circle {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;

        &::before {
          content: " ";
          display: block;
          margin: 0 auto;
          width: 15%;
          height: 15%;
          border-radius: 100%;
          animation: kebab-fading-circle 1.2s infinite ease-in-out both;
        }

         @for $i from 2 to 12 {
          &.is-circle$i {
            transform: rotate(calc(360deg / 12 * $(i) - 1));

            &::before {
              animation-delay: -calc(1.2s + 1.2s / 12 * ($i) - 1);
            }
          }
        }
      }
    }


    @keyframes kebab-fading-circle {
      0%, 39%, 100% { opacity: 0 }
      40% { opacity: 1 }
    }
  }
</style>
