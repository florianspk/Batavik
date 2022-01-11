/* istanbul ignore file */
import { createRouter, createWebHistory } from 'vue-router';
import { baseurl, port } from '@/main';
import Axios from 'axios';

// User
import Home from '../views/Home.vue';
import Shower from '../views/Shower.vue';
import Fireplace from '../views/Fireplace.vue';
import Wall from '../views/Wall.vue';
import Page404 from '../views/404.vue';
import Product from '../views/Product.vue';
import Cart from '../views/Cart.vue';
import Login from '../views/Login.vue';
import User from '../views/User.vue';
// Admin
import Users from '../views/admin/Users.vue';
import Products from '../views/admin/Products.vue';
import Comments from '../views/admin/Comments.vue';
import Orders from '../views/admin/Orders.vue';

function setConfig() {
  return {
    headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
  };
}

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
    path: '/user',
    name: 'User',
    component: User,
    beforeEnter(to: any, from: any, next: any) {
      Axios.get(`${baseurl}:${port.AUTH_SERVICE}/api/auth/validateToken`, setConfig())
        .then(() => {
          next((vm: any) => {
            vm.$isLogged = true;
          });
        })
        .catch(() => {
          next('/login', (vm: any) => {
            vm.$isLogged = false;
          });
        });
    },
  },
  // Admin routes
  {
    path: '/admin',
    name: 'Dashboard_admin',
    redirect: '/admin/clients',
  },
  {
    path: '/admin/clients',
    name: 'Users_admin',
    component: Users,
  },
  {
    path: '/admin/produits',
    name: 'Products_admin',
    component: Products,
  },
  {
    path: '/admin/commentaires',
    name: 'Comments_admin',
    component: Comments,
  },
  {
    path: '/admin/commandes',
    name: 'Orders_admin',
    component: Orders,
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
