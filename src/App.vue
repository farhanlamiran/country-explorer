<template>
  <div id="app">
    <!-- Navigation -->
     <AppNavbar/>
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
