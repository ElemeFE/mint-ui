<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <div class="page-button-group">
      <kb-button size="large">default</kb-button>
      <kb-button size="large" type="primary">primary</kb-button>
      <kb-button size="large" type="danger">danger</kb-button>
    </div>

    <div class="page-button-group">
      <kb-button>default</kb-button>
      <kb-button type="primary">primary</kb-button>
      <kb-button type="danger">danger</kb-button>
    </div>

    <div class="page-button-group">
      <kb-button size="small">default</kb-button>
      <kb-button size="small" type="primary">primary</kb-button>
      <kb-button size="small" type="danger">danger</kb-button>
    </div>

    <div class="page-button-group">
      <kb-button disabled size="large">default</kb-button>
      <kb-button disabled size="large" type="primary">primary</kb-button>
      <kb-button disabled size="large" type="danger">danger</kb-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button',

  data() {
    return {
    };
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component title {
      font-size: 20px;
      margin: 20px auto;
      text-align: center;
    }
    @component button {
      padding: 0 15px;

      @descendent group {
        margin-bottom: 15px;

        & > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>