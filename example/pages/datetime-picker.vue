<template>
  <div class="page-datetime">
    <h1 class="page-title">Datetime Picker</h1>
    <div class="page-datetime-wrapper">
      <mt-button @click="visible = true" size="large">点击弹出 DateTime Picker</mt-button>
      <mt-button @click="visible2 = true" size="large">点击弹出 Date Picker</mt-button>
      <mt-button @click="visible3 = true" size="large">点击弹出 Time Picker</mt-button>
      <mt-button @click="visible4 = true" size="large">自定义模板</mt-button>
      <mt-button @click="visible5 = true" size="large">设定初始值</mt-button>
    </div>
    <mt-datetime-picker :visible.sync="visible" @confirm="handleChange"></mt-datetime-picker>
    <mt-datetime-picker :visible.sync="visible2" type="date" @confirm="handleChange"></mt-datetime-picker>
    <mt-datetime-picker :visible.sync="visible3" type="time" @confirm="handleChange"></mt-datetime-picker>
    <mt-datetime-picker :visible.sync="visible4" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleChange"></mt-datetime-picker>
    <mt-datetime-picker :visible.sync="visible5" type="time" @confirm="handleChange" :value.sync="value"></mt-datetime-picker>
  </div>
</template>

<style>
  @component-namespace page {
    @component datetime {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);

        button:not:(last-child) {
          margin-bottom: 20px;
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
        value: '04:32',
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false
      };
    },

    methods: {
      handleChange(value) {
        Toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      }
    }
  };
</script>
