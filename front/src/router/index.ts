import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Douche from '../views/Shower.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pare-douche',
    name: 'Douche',
    component: Douche,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
