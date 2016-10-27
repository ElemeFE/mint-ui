<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <div class="page-button-group">
      <mt-button size="large">default</mt-button>
      <mt-button size="large" type="primary">primary</mt-button>
      <mt-button size="large" type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button>default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button size="small">default</mt-button>
      <mt-button size="small" type="primary">primary</mt-button>
      <mt-button size="small" type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button disabled size="large">default</mt-button>
      <mt-button disabled size="large" type="primary">primary</mt-button>
      <mt-button disabled size="large" type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button plain size="large">default</mt-button>
      <mt-button plain size="large" type="primary">primary</mt-button>
      <mt-button plain size="large" type="danger">danger</mt-button>
    </div>

    <div class="page-button-group">
      <mt-button>
        <img src="../assets/100x100.png" height="20" width="20" slot="icon">
        带自定义图标
      </mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button'
};
</script>

<style lang="css">
  @component-namespace page {
    @component button {
      padding: 0 15px 15px;

      @descendent group {
        margin-bottom: 15px;

        & > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
