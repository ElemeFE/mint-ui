<template>
  <span class="page-back" v-if="!index" v-link="'/'">
    <i class="icon icon-back"></i>
  </span>
  <router-view></router-view>
</template>

<style>
  @reset-global mobile;

  html, body {
    background-color: #fbf9fe;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }

  .page-back {
    display: inline-block;
    position: absolute 20px * * 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }
</style>

<script type="text/babel">
  import 'src/assets/font/iconfont.css';

  export default {
    data() {
      return {
        index: true
      };
    },

    watch: {
      '$route.path': function(val) {
        this.index = (val === '/' || val === '/header');
      }
    },

    created() {
      this.index = (this.$route.path === '/' || this.$route.path === '/header');
    }
  };
</script>
