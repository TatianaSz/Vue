import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ExtraInfo from './views/widget-info/ExtraInfo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/extra',
      name: 'extra',
      component: ExtraInfo,
    },
  ],
});
