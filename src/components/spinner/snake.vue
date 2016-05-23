<template>
  <div class="kebab-spinner-snake" :style="{
    'border-top-color': color,
    'border-left-color': color,
    'border-bottom-color': color,
    'height': size,
    'width': size
    }">
  </div>
</template>

<script>
  import common from './common.vue';

  export default {
    mixins: [common]
  };
</script>

<style lang="css">
  .kebab-spinner-snake {
    animation: kebab-spinner-rotate 0.8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%;
  }

  @keyframes kebab-spinner-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
