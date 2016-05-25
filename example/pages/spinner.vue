<template>
  <div class="page-spinner">
    <div class="page-title">Spinner</div>

    <mt-cell title="snake">
      <mt-spinner type="snake"></mt-spinner>
    </mt-cell>

    <mt-cell title="double-bounce">
      <mt-spinner type="double-bounce"></mt-spinner>
    </mt-cell>

    <mt-cell title="three-bounce">
      <mt-spinner type="triple-bounce"></mt-spinner>
    </mt-cell>

    <mt-cell title="fading-circle">
      <mt-spinner type="fading-circle"></mt-spinner>
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'page-spinner',

  data() {
    return {

    };
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component spinner {

    }
  }
</style>