<template>
  <div class="page-loadmore">
    <h1 class="page-title">Pull up</h1>
    <mt-header title="上拉刷新"></mt-header>
    <div class="page-loadmore-wrapper">
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
        </ul>
      </mt-loadmore>
    </div>
    <mt-header title="自定义 HTML template"></mt-header>
    <div class="page-loadmore-wrapper">
      <mt-loadmore :bottom-method="loadBottom2" :bottom-status.sync="bottomStatus" :bottom-all-loaded="allLoaded2">
        <ul class="page-loadmore-list">
          <li v-for="item in list2" class="page-loadmore-listitem">{{ item }}</li>
        </ul>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
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

      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  @component mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;

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
        allLoaded2: false,
        bottomStatus: ''
      };
    },

    methods: {
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
      },

      loadBottom2(id) {
        setTimeout(() => {
          let lastValue = this.list2[this.list2.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list2.push(lastValue + i);
            }
          } else {
            this.allLoaded2 = true;
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
