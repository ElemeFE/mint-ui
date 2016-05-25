<template>
  <div class="page-actionsheet">
    <h1 class="page-title">Action sheet</h1>
    <div class="page-actionsheet-wrapper">
      <mt-button @click="sheetVisible = true" size="large" type="primary">点击上拉 action sheet</mt-button>
    </div>
    <mt-actionsheet :actions="actions" :visible.sync="sheetVisible"></mt-actionsheet>
  </div>
</template>

<style>
  @component-namespace page {
    @component actionsheet {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);
        a:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        sheetVisible: false,
        actions: [{
          name: '拍照',
          method: this.takePhoto
        }, {
          name: '从相册中选择',
          method: this.openAlbum
        }]
      };
    },

    methods: {
      takePhoto() {
        console.log('taking photo');
      },

      openAlbum() {
        console.log('opening album');
      }
    }
  };
</script>