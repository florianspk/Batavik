/* istanbul ignore file */
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Shower from '../views/Shower.vue';
import Fireplace from '../views/Fireplace.vue';
import Wall from '../views/Wall.vue';
import Page404 from '../views/404.vue';
import Product from '../views/Product.vue';
import Dashboard from '../views/admin/Dashboard.vue';
import Users from '../views/admin/Users.vue';
import Products from '../views/admin/Products.vue';
import Shops from '../views/admin/Shops.vue';
import Cart from '../views/Cart.vue';
import Login from '../views/Login.vue';
import User from '../views/User.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pare-douche',
    name: 'Shower',
    component: Shower,
  },
  {
    path: '/cloison',
    name: 'Wall',
    component: Wall,
  },
  {
    path: '/Cheminee',
    name: 'Fireplace',
    component: Fireplace,
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
  },
  // Admin routes
  {
    path: '/admin',
    name: 'Dashboard_admin',
    component: Dashboard,
  },
  {
    path: '/admin/clients',
    name: 'Users_admin',
    component: Users,
  },
  {
    path: '/admin/products',
    name: 'Product_admin',
    component: Products,
  },
  {
    path: '/admin/shops',
    name: 'Shops_admin',
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
