<template>
  <p class="example-title">上拉/下拉刷新</p>
  <div class="example-wrapper1">
    <kb-pulldown :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :top-status.sync="topStatus">
      <ul class="example-list">
        <li v-for="item in list" class="example-listitem">{{ item }}</li>
      </ul>
      <div slot="top" class="kebab-pulldown-top">
        <span>{{ topStatus }}</span>
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
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
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

      loadBottom() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$broadcast('onBottomLoaded');
        }, 1500);
      }
    },

    compiled() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    }
  };
</script>
