<template>
  <div class="page-progress">
    <h1 class="page-title">Progress</h1>
    <mt-cell title="默认">
      <mt-progress></mt-progress>
    </mt-cell>
    <mt-cell title="设置 value">
      <mt-progress :value="20"></mt-progress>
    </mt-cell>
    <mt-cell title="左右文字">
      <mt-progress :value="40">
        <div slot="start">0%</div>
        <div slot="end">100%</div>
      </mt-progress>
    </mt-cell>
    <mt-cell title="定义线宽">
      <mt-progress :value="60" :bar-height="5"></mt-progress>
    </mt-cell>
    <div class="page-progress-wrapper">
      <mt-button size="large" type="primary" @click.native="uploadFile">上传文件</mt-button>
      <mt-progress :value="value" v-if="progressVisible" transition="progress-fade">
        <div slot="end">{{ value }}%</div>
      </mt-progress>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component progress {
      .mint-cell-value {
        flex: 2.5;
        position: relative;
        top: -20px;
      }

      .mt-progress {
        width: 100%;
        position: absolute;
        top: 5px;
      }

      @descendent wrapper {
        padding: 0 10px;
        margin-top: 50px;

        .mt-progress {
          position: relative;
        }

        .progress-fade-transition {
          transition: opacity .3s;
        }

        .progress-fade-enter,
        .progress-fade-leave {
          opacity: 0;
        }
      }
    }
  }
</style>

<script type="text/babel">
  import { Toast } from 'src/index';

  export default {
    data() {
      return {
        progressVisible: false,
        value: 0,
        uploading: false,
        timer: null
      };
    },

    watch: {
      value(val) {
        if (val >= 100) {
          this.uploading = false;
          this.progressVisible = false;
          setTimeout(() => Toast({ message: '上传成功', position: 'bottom', duration: 1000 }), 200);
          clearTimeout(this.timer);
        }
      }
    },

    methods: {
      uploadFile() {
        if (!this.uploading) {
          this.value = 0;
          this.progressVisible = true;
          this.uploading = true;
          this.timer = setInterval(() => this.value++, 10);
        }
      }
    }
  };
</script>