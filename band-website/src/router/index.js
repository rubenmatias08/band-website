// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutUs from '../views/AboutUs.vue';
import Tickets from '../views/Tickets.vue';
import Records from '../views/Records.vue';
import Store from '../views/Store.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets,
  },
  {
    path: '/records',
    name: 'Records',
    component: Records,
  },
  {
    path: '/store',
    name: 'Store',
    component: Store,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
