<template>
  <kb-header title="下拉 / 上拉刷新"></kb-header>
  <div class="loadmore-wrapper">
    <kb-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <ul class="loadmore-list">
        <li v-for="item in list" class="loadmore-listitem">{{ item }}</li>
      </ul>
    </kb-loadmore>
  </div>
  <kb-header title="自定义 HTML template"></kb-header>
  <div class="loadmore-wrapper">
    <kb-loadmore :top-method="loadTop2" :top-status.sync="topStatus">
      <ul class="loadmore-list">
        <li v-for="item in list2" class="loadmore-listitem">{{ item }}</li>
      </ul>
      <div slot="top" class="kebab-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">{{ topStatus }}</span>
      </div>
    </kb-loadmore>
  </div>
</template>

<style>
  @component loadmore {
    @descendent listitem {
      height: 50px;
      line-height: 50px;
      border-bottom: solid 1px #eee;
      text-align: center;
      &:first-child {
        border-top: solid 1px #eee;
      }
    }

    @descendent wrapper {
      height: 300px;
      overflow: scroll;
    }
  }

  @component kebab-loadmore-top {
    span {
      display: inline-block;
      transition: .2s linear;

      @when rotate {
        transform: rotate(180deg);
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
        list2: [],
        allLoaded: false,
        topStatus: ''
      };
    },

    methods: {
      loadTop() {
        setTimeout(() => {
          if (this.list[0] === 1) {
            for (let i = 0; i >= -10; i--) {
              this.list.unshift(i);
            }
          }
          this.$broadcast('onTopLoaded');
        }, 1500);
      },

      loadTop2() {
        setTimeout(() => {
          if (this.list2[0] === 1) {
            for (let i = 0; i >= -10; i--) {
              this.list2.unshift(i);
            }
          }
          this.$broadcast('onTopLoaded');
        }, 1500);
      },

      loadBottom(id) {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$broadcast('onBottomLoaded', id);
        }, 1500);
      }
    },

    compiled() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
        this.list2.push(i);
      }
    }
  };
</script>
