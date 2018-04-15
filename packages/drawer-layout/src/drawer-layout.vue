<template>
  <div class="mint-drawer-layout">

    <!--侧滑栏-->
    <div
      ref="drawer"
      class=" mint-drawer-warp"
      @touchstart.stop="startDrag"
      @touchmove.stop="onDrag"
      @touchend.stop="endDrag"
      :style="drawerStyle">
      <slot name="drawer"></slot>
    </div>

    <!--主容器-->
    <div
      ref="content"
      @touchstart.stop="startDrag"
      @touchmove.stop="onDrag"
      @touchend.stop="endDrag"
      class=" mint-content-warp"
      :style="contentStyle">
      <div class="content-mask" v-tap="toggle" ref="contentMask"></div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>

  import {once} from '../../../src/utils/dom';

  /**
   * 侧滑菜单容器
   *
   * @param drawerWidth 侧滑菜单宽度
   * @param enable 是否可用
   * @param isRight 侧滑菜单是否在右边，默认为false，在左边
   * @param swipeType 侧滑菜单类型
   *          ['fixDrawer'——固定侧滑面板，主面板滑动]
   *          ['fixContent'——固定主面板，侧滑面板滑动]
   *          ['noFixed'——一起滑动！]
   * @param btnId 点击出现侧滑菜单的按钮的id ( @TODO 这里如何处理异步渲染的问题 ）
   * @param isDrawerOpened 状态位，侧滑面板是否为打开状态
   * @param swipeable 是否可滑动
   *
   *
   * @slot drawer 侧滑面板的插槽
   * @slot content 主面板的插槽
   *
   */
  export default {
    name: " mint-drawer-layout",

    data() {
      return {
        start: {x: 0, y: 0},
        swiping: false,
        isToggle: false,
        isDO: this.isDrawerOpened
      }
    },

    mounted() {
      let g = this;
      if (!g.enable) return false;

      g.drawer = g.$refs.drawer; // 侧滑容器dom
      g.content = g.$refs.content; // 主容器dom
      g.contentMask = g.$refs.contentMask; // 遮罩容器
      g.contentWidth = g.content.clientWidth;
    },

    props: {
      'drawerWidth': {
        type: Number,
        default: 200
      },
      'enable': {
        type: Boolean,
        default: true
      },
      'isRight': {
        type: Boolean,
        default: false
      },
      'swipeType': {
        type: String,
        default: 'fixDrawer'
      },
      'btnId': {
        type: String,
        default: ''
      },
      'isDrawerOpened': {
        type: Boolean,
        default: false
      },
      'swipeable': {
        type: Boolean,
        default: true
      }
    },

    computed: {
      drawerStyle() {
        let {drawerWidth, isRight, swipeType} = this;

        return {
          'width': `${drawerWidth}px`,
          [isRight ? 'right' : 'left']: `${swipeType === 'fixDrawer' ? '0' : (-this.drawerWidth)}px`,
          'z-index': swipeType === 'fixDrawer' ? '0' : '2',
        }
      },
      contentStyle() {
        let {swipeType} = this;

        return {
          'z-index': swipeType === 'fixContent' ? '0' : '2'
        }
      }
    },

    watch: {},

    methods: {
      /**
       * 滑动切换
       * @param b {Boolean} 是否打开侧滑面板，如果不传这个参数，默认为toggle
       */
      toggle(b) {
        let g = this;
        if (!g.enable) return false;

        let {isDO, drawerWidth} = g;

        if (typeof b !== 'boolean') {
          if (!isDO) {
            g.offset = drawerWidth;
          } else {
            g.offset = 0
          }
          g.isDO = !isDO;
        } else {
          if (b) {
            g.offset = drawerWidth;
            g.isDO = true;
          } else {
            g.offset = 0;
            g.isDO = false;
          }
        }

        g.isToggle = true;
        g.swipeLeaveTransition();
      },
      /**
       * 滑动结束的动画
       */
      swipeLeaveTransition() {
        let g = this, currentMovingDoms = [];
        let {swipeType, drawerWidth} = g;

        switch (swipeType) {
          case 'fixDrawer':
            currentMovingDoms.push(g.content);
            break;
          case 'fixContent':
            currentMovingDoms.push(g.drawer);
            break;
          case 'noFixed':
            currentMovingDoms.push(g.drawer);
            currentMovingDoms.push(g.content);
            break;
          default:
            break;
        }

        currentMovingDoms.forEach((val) => {
          val.classList.add('swipe-transition');
        });

        setTimeout(() => {
          if (g.isDO) {
            this.swipeMove(drawerWidth);
          } else {
            this.swipeMove(0);
            g.contentMask.style.opacity = 0;
            g.contentMask.style.display = 'none';
          }

          g.isToggle = false;

          currentMovingDoms.forEach((val) => {
            once(val, 'webkitTransitionEnd', _ => {
              val.classList.remove('swipe-transition');
              g.swiping = false;
            });
          });


        }, 0);
      },

      /**
       * 滑动操作
       * @param offset 滑动位置
       */
      swipeMove(offset) {
        let g = this;
        let {swipeType, isRight} = g;

        g.contentMask.style.display = 'block';
        g.contentMask.style.opacity = Math.abs(offset) / g.drawerWidth * 0.4;

        switch (swipeType) {
          case 'fixDrawer':
            g.content.style.webkitTransform = `translate3d(${(!isRight ? '' : '-') + offset}px, 0, 0)`;
            g.swiping = true;
            break;
          case 'fixContent':
            g.drawer.style.webkitTransform = `translate3d(${(!isRight ? '' : '-') + offset}px, 0, 0)`;
            g.swiping = true;
            break;
          case 'noFixed':
            g.content.style.webkitTransform = `translate3d(${(!isRight ? '' : '-') + offset}px, 0, 0)`;
            g.drawer.style.webkitTransform = `translate3d(${(!isRight ? '' : '-') + offset}px, 0, 0)`;
            g.swiping = true;
            break;
          default:
            break;
        }
      },

      startDrag(evt) {
        let g = this;
        if (!g.enable || !g.swipeable) return false;

        evt = evt.changedTouches ? evt.changedTouches[0] : evt;

        g.start.x = evt.pageX;
        g.start.y = evt.pageY;
      },

      onDrag(evt) {
        let g = this, swiping;
        if (!g.enable || !g.swipeable) return false;

        g.dragging = true;

        const e = evt.changedTouches ? evt.changedTouches[0] : evt;
        const offsetTop = e.pageY - g.start.y;
        const offsetLeft = e.pageX - g.start.x;
        const y = Math.abs(offsetTop);
        const x = Math.abs(offsetLeft);

        swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
        if (!swiping) return;
        evt.preventDefault();

        let offset;

        if (g.isDO) {
          offset = g.isRight ? (g.drawerWidth - offsetLeft) : (g.drawerWidth - (-offsetLeft));
        } else {
          offset = g.isRight ? -offsetLeft : offsetLeft;
        }

        if (offset < 0 || offset > g.drawerWidth) {
          g.swiping = false;
          return;
        }
        g.offset = offset;
        g.swipeMove(offset);
      },

      endDrag() {
        let g = this;

        if (!g.enable || g.isToggle || !g.dragging) {
          return false;
        }

        const tempWidth = g.drawerWidth / 3;

        if (g.isDO && g.offset < tempWidth * 2) {
          g.isDO = false;
        } else if (!g.isDO && g.offset > tempWidth) {
          g.isDO = true;
        }
        g.dragging = false;

        g.swipeLeaveTransition();
      }
    }
  }
</script>

<style lang="css">

  @import "../../../src/style/var.css";

  .mint-drawer-layout {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
  }

  .mint-drawer-warp {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .mint-content-warp {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .content-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    opacity: 0;
    background-color: #000;
    z-index: 818;
  }

  /*滑动动画时间样式*/
  .swipe-transition {
    transition: transform 190ms ease-in-out;
  }

</style>
