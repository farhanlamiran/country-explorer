<template>
  <div id="app">
  <AppNavbar/>
    <router-view />
    <AppFooter/>
  </div>
</template>

<script setup lang="ts">
import AppFooter from './components/layout/AppFooter.vue';
import AppNavbar from './components/layout/AppNavbar.vue';
</script>
