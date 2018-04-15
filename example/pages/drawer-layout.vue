<template>
  <mf1-drawer-layout
    ref="f1DrawerLayout"
    :swipeType="drawerType"
    :isRight="(drawerAlign === 'right')"
    :swipeable="true">
    <div class="covered" slot="content">
      <mf1-radio
        title="选择模式"
        v-model="drawerType"
        :options="drawerTypeRadioOption">
      </mf1-radio>
      <mf1-radio
        title="侧滑面板位置"
        v-model="drawerAlign"
        :options="drawerAlignOption">
      </mf1-radio>
    </div>
    <div slot="drawer">
      <!--侧滑导航栏-->
      <div id="slide-nav">
        <mf1-field label="邮箱" state="success"></mf1-field>
        <mf1-field label="邮箱" state="error"></mf1-field>
        <mf1-field label="邮箱" state="warning"></mf1-field>
      </div>
    </div>
  </mf1-drawer-layout>
</template>

<script>

  import Vue from 'vue'
  // import {DrawerLayout, Field} from '../../../f1-mobile-libraries';

  // Vue.component(DrawerLayout.name, DrawerLayout);
  // Vue.component(Field.name, Field);

  export default {
    name: "drawer-layout",
    data(){
      return {
        drawerTypeRadioOption:[
          {
            label: '主面板移动，侧滑面板不动',
            value: 'fixDrawer'
          },
          {
            label: '主面板不动，侧滑面板移动',
            value: 'fixContent'
          },
          {
            label: '一起动！Yeah',
            value: 'noFixed'
          }
        ],
        drawerType: 'fixDrawer',
        drawerAlignOption: [
          {
            label: '左侧！',
            value: 'left'
          },
          {
            label: '右侧!',
            value: 'right'
          }
        ],
        drawerAlign: 'left'
      }
    }
  }
</script>

<style scoped>
  .covered{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #ffa7a2;
  }
</style>
