<template>
  <div class="kebab-spinner-fading-circle circle-color-{{_uid}}" :style="{
      width: spinnerSize,
      height: spinnerSize
    }">
    <style>.circle-color-{{_uid}} > div::before { background-color: {{ spinnerColor }}; }</style>
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
    name: 'fading-circle',

    mixins: [common]
  };
</script>

<style lang="css">
  @component-namespace kebab-spinner {
    @component fading-circle {
      position: relative;

      @descendent circle {
        size: 100%;
        position: absolute 0 * * 0;

        &::before {
          content: " ";
          display: block;
          margin: 0 auto;
          size: 15%;
          border-radius: 100%;
          animation: kebab-fading-circle 1.2s infinite ease-in-out both;
        }

         @for $i from 2 to 12 {
          &.is-circle$i {
            transform: rotate(calc(360deg / 12 * ($i - 1)));

            &::before {
              animation-delay: calc(-1.2s + 1.2s / 12 * ($i - 1));
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
