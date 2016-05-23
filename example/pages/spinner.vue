<template>
  <div class="page-spinner">
    <div class="page-title">Spinner</div>

    <kb-cell title="snake">
      <kb-spinner type="snake"></kb-spinner>
    </kb-cell>

    <kb-cell title="double-bounce">
      <kb-spinner type="double-bounce"></kb-spinner>
    </kb-cell>

    <kb-cell title="three-bounce">
      <kb-spinner type="three-bounce"></kb-spinner>
    </kb-cell>

    <kb-cell title="fading-circle">
      <kb-spinner type="fading-circle"></kb-spinner>
    </kb-cell>
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