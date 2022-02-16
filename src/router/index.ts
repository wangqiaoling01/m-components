import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../view/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
];

const route = createRouter({
  routes,
  history: createWebHistory(),
});

export default route;
