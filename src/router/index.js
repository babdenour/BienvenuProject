import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Bienvenue from '../views/Bienvenue.vue';
import Studio from '../views/Studio.vue';
import Cultural from '../views/Cultural.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';


const routes = [
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/',
    name: 'bienvenue',
    component: Bienvenue,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/studio',
    name: 'studio',
    component: Studio,
  },
  {
    path: '/cultural',
    name: 'cultural',
    component: Cultural,
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound,
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
