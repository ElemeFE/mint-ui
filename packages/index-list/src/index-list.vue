<template>
  <div class="mint-indexlist">
    <ul class="mint-indexlist-content" ref="content" :style="{ 'height': currentHeight + 'px', 'margin-right': navWidth + 'px'}">
      <slot></slot>
    </ul>
    
    <div class="mint-indexlist-nav" @touchstart="handleTouchStart" ref="nav">
      <ul class="mint-indexlist-navlist">
        <li class="mint-indexlist-navitem" v-for="section in sections">{{ section.index }}</li>
      </ul>
    </div>
    
    <div class="mint-indexlist-indicator" v-if="showIndicator" v-show="moving">{{ currentIndicator }}</div>
  </div>
</template>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component indexlist {
      width: 100%;
      position: relative;
      overflow: hidden;
      
      @descendent content {
        margin: 0;
        padding: 0;
        overflow: auto;
      }
      
      @descendent nav {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        margin: 0;
        background-color: #fff;
        border-left: solid 1px #ddd;
        text-align: center;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      
      @descendent navlist {
        padding: 0;
        margin: 0;
        list-style: none;
        max-height: 100%;
        display: flex;
        flex-direction: column;
      }
      
      @descendent navitem {
        padding: 2px 6px;
        font-size: 12px;
        user-select: none;
        -webkit-touch-callout: none;
      }
      
      @descendent indicator {
        position: absolute;
        size: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        line-height: 50px;
        background-color: rgba(0, 0, 0, .7);
        border-radius: 5px;
        color: #fff;
        font-size: 22px;
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    name: 'mt-index-list',

    props: {
      height: Number,
      showIndicator: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        sections: [],
        navWidth: 0,
        indicatorTime: null,
        moving: false,
        firstSection: null,
        currentIndicator: '',
        currentHeight: this.height,
        navOffsetX: 0
      };
    },

    watch: {
      sections() {
        this.init();
      }
    },

    methods: {
      init() {
        this.$nextTick(() => {
          this.navWidth = this.$refs.nav.clientWidth;
        });
        let listItems = this.$refs.content.getElementsByTagName('li');
        if (listItems.length > 0) {
          this.firstSection = listItems[0];
        }
      },

      handleTouchStart(e) {
        if (e.target.tagName !== 'LI') {
          return;
        }
        this.navOffsetX = e.changedTouches[0].clientX;
        this.scrollList(e.changedTouches[0].clientY);
        if (this.indicatorTime) {
          clearTimeout(this.indicatorTime);
        }
        this.moving = true;
        window.addEventListener('touchmove', this.handleTouchMove);
        window.addEventListener('touchend', this.handleTouchEnd);
      },

      handleTouchMove(e) {
        e.preventDefault();
        this.scrollList(e.changedTouches[0].clientY);
      },

      handleTouchEnd() {
        this.indicatorTime = setTimeout(() => {
          this.moving = false;
          this.currentIndicator = '';
        }, 500);
        window.removeEventListener('touchmove', this.handleTouchMove);
        window.removeEventListener('touchend', this.handleTouchEnd);
      },

      scrollList(y) {
        let currentItem = document.elementFromPoint(this.navOffsetX, y);
        if (!currentItem || !currentItem.classList.contains('mint-indexlist-navitem')) {
          return;
        }
        this.currentIndicator = currentItem.innerText;
        let targets = this.sections.filter(section => section.index === currentItem.innerText);
        let targetDOM;
        if (targets.length > 0) {
          targetDOM = targets[0].$el;
          this.$refs.content.scrollTop = targetDOM.getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top;
        }
      }
    },

    mounted() {
      if (!this.currentHeight) {
        this.currentHeight = document.documentElement.clientHeight - this.$refs.content.getBoundingClientRect().top;
      }
      this.init();
    }
  };
</script>
