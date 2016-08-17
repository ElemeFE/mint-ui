<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="page-header-main">
      <div class="page-title">Header</div>
      <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

      <mt-header title="多个按钮">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button @click="handleClose">关闭</mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

      <mt-header title="左侧仅文字">
        <router-link to="/" slot="left">
            <mt-button>返回</mt-button>
          </router-link>
      </mt-header>

      <mt-header title="右侧仅文字">
        <router-link to="/" slot="right">
          <mt-button>分享</mt-button>
        </router-link>
      </mt-header>

      <mt-header title="仅图标">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right" icon="more"></mt-button>
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
