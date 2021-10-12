import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Douche from '../views/Shower.vue';
import Page404 from '../views/404.vue';
import Product from '../views/Product.vue';
import Dashboard from '../views/admin/Dashboard.vue';
import Users from '../views/admin/Users.vue';
import Stocks from '../views/admin/Stocks.vue';
import Shops from '../views/admin/Shops.vue';

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
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/admin/clients',
    name: 'Users',
    component: Users,
  },
  {
    path: '/admin/stocks',
    name: 'Stocks',
    component: Stocks,
  },
  {
    path: '/admin/magasins',
    name: 'Shops',
    component: Shops,
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
