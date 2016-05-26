<template>
  <section class="page-home">
    <div v-for="group in navs">
      <div class="page-title" v-text="group.title"></div>
      <mt-cell
        v-for="item in group.list"
        v-link="{ path: item.path }"
        is-link>
        <div slot="title">
          <i class="indexicon icon-{{ item.icon }}"></i>
          <span>{{ item.name }}</span>
        </div>
      </mt-cell>
    </div>
  </section>
</template>

<style>
  .page-home {
    padding-bottom: 50px;

    .indexicon {
      color: #26a2ff;
      display: inline-block;
      width: 20px;
    }
  }
  @component-namespace page {
    @component title {
      font-size: 20px;
      margin: 20px auto;
      text-align: center;
      display: block;
    }

    @component part {
      margin-bottom: 15px;
    }
  }
</style>

<script type="text/babel">
  import { navs } from './route';

  export default {
    data() {
      return {
        navs: []
      };
    },

    compiled() {
      this.navs = navs;
    }
  };
</script>
