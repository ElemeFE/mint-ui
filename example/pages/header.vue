<template>
  <div>
    <kb-header fixed title="固定在顶部"></kb-header>
    <div class="page-header-main">
      <div class="page-title">Header</div>
      <kb-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <kb-button @click="handleBack" icon="back" slot="left">返回</kb-button>
        <kb-button icon="more" slot="right"></kb-button>
      </kb-header>

      <kb-header title="标题">
        <div slot="left">
          <kb-button @click="handleBack" icon="back">返回</kb-button>
          <kb-button @click="handleClose">close</kb-button>
        </div>
        <kb-button icon="more" slot="right"></kb-button>
      </kb-header>
    </div>

  </div>
</template>

<script>
export default {
  name: 'header',

  data() {
    return {

    };
  },

  methods: {
    handleBack() {
      history.back();
    },

    handleClose() {
      alert('close this page');
    }
  }
};
</script>

<style lang="css">
  @component-namespace page {
    @component header {
      @descendent main {
        margin-top: 50px;
        min-height: 120vh;

        > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
