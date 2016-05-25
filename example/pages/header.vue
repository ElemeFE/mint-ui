<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="page-header-main">
      <div class="page-title">Header</div>
      <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <mt-button @click="handleBack" icon="back" slot="left">返回</mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

      <mt-header title="标题">
        <div slot="left">
          <mt-button @click="handleBack" icon="back">返回</mt-button>
          <mt-button @click="handleClose">close</mt-button>
        </div>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
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
