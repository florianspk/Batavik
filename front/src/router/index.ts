import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Douche from '../views/Shower.vue';
import Page404 from '../views/404.vue';
import Product from '../views/Product.vue';
import Admin from '../views/admin/Admin.vue';

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
  {
    path: '/product/{:id}',
    name: 'Product',
    component: Product,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
