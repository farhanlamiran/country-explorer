// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ExplorePage from '../pages/ExplorePage.vue'
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
  scrollBehavior(to, from, savedPosition) {
    // Kalau klik "Back" atau "Forward"
    if (savedPosition) {
      return savedPosition
    }
    // Scroll ke atas dengan smooth
    return { top: 0, behavior: 'smooth' }
  }
});

export default router;
