import NavConfig from './nav.config.json';

const registerRoute = (config) => {
  let route = {};
  config.map(nav => nav.list.map(page => {
    try {
      route[`/${page.path}`] = {
        component: require(`./pages${page.path}`),
        title: page.title || page.name,
        description: page.description
      };
    } catch (e) {
      console.error(e);
      page.disabled = true;
    }
  }));

  return { route, navs: config };
};

const route = registerRoute(NavConfig);

export const navs = route.navs;
route.route['/'] = {
  component: require('./demos.vue')
};

export default route.route;
