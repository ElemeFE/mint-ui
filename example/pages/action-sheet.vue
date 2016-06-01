<template>
  <div class="page-actionsheet">
    <h1 class="page-title">Action Sheet</h1>
    <div class="page-actionsheet-wrapper">
      <mt-button @click="sheetVisible = true" size="large">点击上拉 action sheet</mt-button>
      <mt-button @click="sheetVisible2 = true" size="large">不带取消按钮的 action sheet</mt-button>
    </div>
    <mt-actionsheet :actions="actions" :visible.sync="sheetVisible"></mt-actionsheet>
    <mt-actionsheet :actions="actions2" :visible.sync="sheetVisible2" cancel-text=""></mt-actionsheet>
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
        sheetVisible2: false,
        actions: [{
          name: '拍照',
          method: this.takePhoto
        }, {
          name: '从相册中选择',
          method: this.openAlbum
        }],
        actions2: [{
          name: '确定'
        }, {
          name: '返回上一步',
          method: this.goBack
        }]
      };
    },

    methods: {
      takePhoto() {
        console.log('taking photo');
      },

      openAlbum() {
        console.log('opening album');
      },

      goBack() {
        history.go(-1);
      }
    }
  };
</script>