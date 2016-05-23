<template>
  <div class="page-switch">
    <div class="page-title">Switch</div>
    <div class="page-part page-switch-padding">
      <kb-switch :value.sync="value1">
        <label v-text="value1"></label>
      </kb-switch>
    </div>

    <div class="page-part page-switch-padding">
      <kb-switch :value.sync="value4">
        <label v-text="value4"></label>
      </kb-switch>
    </div>

    <kb-cell :title="'选项 ' + value2">
      <kb-switch :value.sync="value2"></kb-switch>
    </kb-cell>
    <kb-cell :title="'选项 ' + value3">
      <kb-switch :value.sync="value3"></kb-switch>
    </kb-cell>
  </div>
</template>

<script>
export default {
  name: 'page-switch',

  data() {
    return {
      value1: false,
      value2: false,
      value3: true,
      value4: true
    };
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component switch {
      @descendent padding {
        padding: 0 10px;
      }
    }
  }
</style>
