<template>
  <div class="page-range">
    <h1 class="page-title">Range</h1>
    <p class="page-range-header">基本功能</p>
    <mt-cell v-for="item in cells1" :title="item.title" :label="'value:' + item.value">
      <mt-range v-model="item.value">
        <div slot="start" v-if="item.start">{{ item.start }}</div>
        <div slot="end" v-if="item.end">{{ item.end }}</div>
      </mt-range>
    </mt-cell>
    <p class="page-range-header">自定义</p>
    <mt-cell v-for="item in cells2" :title="item.title" :label="'value:' + item.value">
      <mt-range v-model="item.value" :min="item.min || 0" :max="item.max || 100" :step="item.step || 1" :bar-height="item.barHeight || 1" :disabled="item.disabled">
        <div slot="start" v-if="item.start">{{ item.start }}</div>
        <div slot="end" v-if="item.end">{{ item.end }}</div>
      </mt-range>
    </mt-cell>
    <p class="page-range-header">场景举例</p>
    <mt-cell v-for="item in cells3" :title="item.title" :label="'value:' + item.value">
      <mt-range v-model="item.value" :min="item.min || 0" :max="item.max || 100" :step="item.step || 1">
        <div slot="start" v-if="item.start" :style="{ 'font-size': item.start + 'px' }">{{ item.start }}</div>
        <div slot="end" v-if="item.end" :style="{ 'font-size': item.end + 'px' }">{{ item.end }}</div>
      </mt-range>
    </mt-cell>
  </div>
</template>

<style>
  @component-namespace page {
    @component range {
      .mt-range {
        width: 100%;
      }

      .mint-cell-value {
        flex: 2.5;
        position: relative;
      }

      @descendent header {
        margin-bottom: 8px;
        padding-left: 15px;

        &:not(:first-of-type) {
          margin-top: 28px;
        }
      }

      @descendent desc {
        padding: 5px 0 5px 5%;
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        value1: 0,
        value2: 20,
        value3: 0,
        value4: 0,
        value5: 10,
        value6: 0,
        value7: 40,
        value8: 14,
        cells1: null,
        cells2: null,
        cells3: null
      };
    },

    mounted() {
      this.cells1 = [{
        title: '默认',
        value: this.value1
      }, {
        title: '预设 value',
        value: this.value2
      }, {
        title: '左右文字',
        value: this.value3,
        start: '0',
        end: '100'
      }];
      this.cells2 = [{
        title: '定义步长',
        value: this.value4,
        step: 10
      }, {
        title: '定义区间',
        value: this.value5,
        start: '10',
        end: '90',
        min: 10,
        max: 90
      }, {
        title: '定义线宽',
        value: this.value6,
        barHeight: 5
      }, {
        title: '置为无效',
        value: this.value7,
        disabled: true
      }];
      this.cells3 = [{
        title: '字体大小',
        value: this.value8,
        start: '14',
        end: '22',
        min: 14,
        max: 22,
        step: 2
      }];
    }
  };
</script>