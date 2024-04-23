import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import About from '../views/About.vue';
import Terms from '../views/Terms.vue';
import Catalog from '../views/Catalog.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms,
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
