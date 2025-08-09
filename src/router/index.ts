// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ExplorePage from '../pages/ExplorepAGE.vue'
import AboutUsPage from '../pages/AboutPage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/explore',
    name: 'Explore',
    component: ExplorePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUsPage,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
