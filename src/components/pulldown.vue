<template>
  <div class="loadmore">
    <div class="loadmore-content" :class="{ 'dropped': topDropped || bottomDropped}" :style="{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }" v-el:loadmore-content>
      <div class="loadmore-top">{{ topText }}</div>
      <slot></slot>
      <div class="loadmore-bottom">{{ bottomText }}</div>
    </div>
  </div>
</template>

<style>
  .loadmore {
    overflow: hidden;
  }

  .loadmore-content {
    position: relative;
    &.dropped {
      transition: .2s;
    }
  }

  .loadmore-top {
    margin-top: -50px;
    position: relative;
    text-align: center;
    overflow: hidden;
    height: 50px;
    line-height: 50px;
    transform: translateZ(0);
  }

  .loadmore-bottom {
    text-align: center;
    height: 50px;
    line-height: 50px;
    /*margin-bottom: -50px;*/
    position: absolute;
    bottom: -50px;
    width: 100%;
  }
</style>

<script type="text/babel">
  export default {
    name: 'kb-pulldown',
    props: {
      topPullText: {
        type: String,
        default: '下拉刷新'
      },
      topDropText: {
        type: String,
        default: '释放更新'
      },
      topLoadingText: {
        type: String,
        default: '加载中...'
      },
      topDistance: {
        type: Number,
        default: 70
      },
      topMethod: {
        type: Function
      },
      bottomPullText: {
        type: String,
        default: '上拉刷新'
      },
      bottomDropText: {
        type: String,
        default: '释放更新'
      },
      bottomLoadingText: {
        type: String,
        default: '加载中...'
      },
      bottomDistance: {
        type: Number,
        default: 70
      },
      bottomMethod: {
        type: Function
      },
      bottomAllLoaded: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        translate: 0,
        scrollEventTarget: null,
        containerFilled: false,
        loadingTop: false,
        topText: '',
        topReady: false,
        topDropped: false,
        loadingBottom: false,
        bottomText: '',
        bottomReady: false,
        bottomDropped: false,
        bottomReached: false,
        showBottomText: false,
        direction: '',
        startY: 0,
        startScrollTop: 0,
        currentY: 0
      };
    },

    events: {
      onTopLoaded() {
        this.loadingTop = false;
        this.translate = 0;
      },

      onBottomLoaded() {
        this.loadingBottom = false;
        this.showBottomText = false;
        this.bottomDropped = false;
        this.$nextTick(() => {
          if (this.scrollEventTarget === window) {
            document.body.scrollTop += 50;
          } else {
            this.scrollEventTarget.scrollTop += 50;
          }
          this.translate = 0;
        });
        if (!this.bottomAllLoaded && !this.containerFilled) {
          this.fillContainer();
        }
      }
    },

    methods: {
      getScrollEventTarget(element) {
        let currentNode = element;
        while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
          let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
          if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode;
          }
          currentNode = currentNode.parentNode;
        }
        return window;
      },

      getScrollTop(element) {
        if (element === window) {
          return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
        } else {
          return element.scrollTop;
        }
      },

      bindTouchEvents() {
        this.$el.addEventListener('touchstart', this.handleTouchStart);
        this.$el.addEventListener('touchmove', this.handleTouchMove);
        this.$el.addEventListener('touchend', this.handleTouchEnd);
      },

      init() {
        this.topText = this.topPullText;
        this.scrollEventTarget = this.getScrollEventTarget(this.$el);
        if (typeof this.bottomMethod === 'function') {
          this.fillContainer();
          this.bindTouchEvents();
        }
        if (typeof this.topMethod === 'function') {
          this.bindTouchEvents();
        }
      },

      fillContainer() {
        this.$nextTick(() => {
          if (this.scrollEventTarget === window) {
            this.containerFilled = this.$el.getBoundingClientRect().bottom >= document.documentElement.getBoundingClientRect().bottom;
          } else {
            this.containerFilled = this.$el.getBoundingClientRect().bottom >= this.scrollEventTarget.getBoundingClientRect().bottom;
          }
          if (!this.containerFilled) {
            this.loadingBottom = true;
            this.bottomText = this.bottomLoadingText;
            this.bottomMethod();
          }
        });
      },

      checkBottomReached() {
        if (this.scrollEventTarget === window) {
          return document.body.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight;
        } else {
          return this.$el.getBoundingClientRect().bottom === this.scrollEventTarget.getBoundingClientRect().bottom;
        }
      },

      handleTouchStart(event) {
        this.startY = event.touches[0].pageY;
        this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
        this.bottomReached = false;
        if (!this.loadingTop) {
          this.topDropped = false;
          this.topText = this.topPullText;
        }
        if (!this.loadingBottom) {
          this.bottomDropped = false;
          this.bottomText = this.bottomPullText;
        }
      },

      handleTouchMove(event) {
        if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
          return;
        }
        this.currentY = event.touches[0].pageY;
        let distance = this.currentY - this.startY - this.startScrollTop;
        this.direction = this.currentY - this.startY > 0 ? 'down' : 'up';
        if (typeof this.topMethod === 'function' && this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && !this.loadingTop) {
          event.preventDefault();
          event.stopPropagation();
          this.translate = distance + this.startScrollTop;
          if (this.translate >= this.topDistance) {
            this.topText = this.topDropText;
            this.topReady = true;
          } else {
            this.topText = this.topPullText;
            this.topReady = false;
          }
        }

        this.bottomReached = this.bottomReached || this.checkBottomReached();
        if (typeof this.bottomMethod === 'function' && this.direction === 'up' && this.bottomReached && !this.loadingBottom && !this.bottomAllLoaded) {
          event.preventDefault();
          event.stopPropagation();
          this.showBottomText = true;
          this.translate = (this.scrollEventTarget === window ? this.startScrollTop : this.getScrollTop(this.scrollEventTarget)) + distance;
          if (-this.translate >= this.bottomDistance) {
            this.bottomText = this.bottomDropText;
            this.bottomReady = true;
          } else {
            this.bottomText = this.bottomPullText;
            this.bottomReady = false;
          }
        }
      },

      handleTouchEnd() {
        if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
          this.topDropped = true;
          if (this.topReady) {
            this.translate = '50';
            this.topText = this.topLoadingText;
            this.loadingTop = true;
            this.topReady = false;
            this.topMethod();
          } else {
            this.translate = '0';
            this.topText = this.topPullText;
          }
        }
        if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
          this.bottomDropped = true;
          this.bottomReached = false;
          if (this.bottomReady) {
            this.translate = '-50';
            this.bottomText = this.bottomLoadingText;
            this.loadingBottom = true;
            this.bottomReady = false;
            this.bottomMethod();
          } else {
            this.translate = '0';
            this.bottomText = this.bottomPullText;
            setTimeout(() => {
              this.showBottomText = false;
            }, 200);
          }
        }
        this.direction = '';
      }
    },

    ready() {
      this.init();
    }
  };
</script>