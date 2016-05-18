<template>
  <p class="example-title">下拉 / 上拉刷新</p>
  <div class="example-wrapper">
    <kb-pulldown :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <ul class="example-list">
        <li v-for="item in list" class="example-listitem">{{ item }}</li>
      </ul>
    </kb-pulldown>
  </div>
  <p class="example-title">自定义 HTML template</p>
  <div class="example-wrapper">
    <kb-pulldown :top-method="loadTop2" :top-status.sync="topStatus">
      <ul class="example-list">
        <li v-for="item in list2" class="example-listitem">{{ item }}</li>
      </ul>
      <div slot="top" class="kebab-pulldown-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">{{ topStatus }}</span>
      </div>
    </kb-pulldown>
  </div>

</template>

<style scoped>
  .example-title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    background-color: #dddddd;
  }

  .example-listitem {
    height: 50px;
    line-height: 50px;
    border-bottom: solid 1px #eee;
    text-align: center;
    &:first-child {
      border-top: solid 1px #eee;
    }
  }

  .example-listitem:last-child {
    margin-bottom: 0;
  }

  .example-wrapper {
    height: 300px;
    overflow: scroll;
  }

  .kebab-pulldown-top span {
    display: inline-block;
    transition: .2s linear;
  }

  .rotate {
    transform: rotate(180deg);
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
