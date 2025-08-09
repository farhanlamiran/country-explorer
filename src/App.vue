<template>
  <div id="app">
    <!-- Navigation -->
     <header class="fixed top-0 left-0 right-0 h-16 bg-transparent z-50">
  <!-- Navbar -->
  <AppNavbar/>
</header>
    <router-view />
    <AppFooter/>
  </div>
</template>

<script setup lang="ts">
import AppFooter from './components/layout/AppFooter.vue';
import AppNavbar from './components/layout/AppNavbar.vue';

/**
 * Main App Component
 * Root component that orchestrates the entire application
 *
 * @component
 */
</script>
