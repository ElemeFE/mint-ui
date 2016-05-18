<template>
  <ul>
    <li v-for="item in routes" v-link="{ path: item.path }">{{ item.name }}</li>
  </ul>
</template>

<style>
  @reset-global mobile;
  li {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    border-bottom: solid 1px #ccc;
    position: relative;
    &:after {
      content: '';
      position: absolute 50% 20px * *;
      transform: translateY(-50%) rotate(45deg);
      size: 5px;
      border: solid 2px #aaa;
      border-left-color: transparent;
      border-bottom-color: transparent;
    }
  }
</style>

<script type="text/babel">
  import routes from './route';
  export default {
    data() {
      return {
        routes: []
      };
    },

    compiled() {
      console.log(routes);
      this.routes = Object.keys(routes).filter(item => item !== '/').map(item => {
        return { name: routes[item].title, path: routes[item].path };
      });
    }
  };
</script>
