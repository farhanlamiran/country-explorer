<script setup lang="ts">
// Importing the profile data from external data source
import { ABOUT_PROFILE } from '@/data/aboutData'
</script>

<!-- AboutProfileSection.vue -->
<template>
  <!-- Main section with padding, gradient background, and overflow hidden -->
  <section
    class="py-24 pt-30 relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 overflow-hidden"
  >
    <!-- Container centered with max width and horizontal padding -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Decorative bubble background elements (positioned absolutely, pointer-events disabled) -->
      <div class="absolute inset-0 pointer-events-none z-0">
        <!-- Example of several translucent, animated bubble circles -->
        <span
          class="absolute rounded-full bg-green-300/20 opacity-40 w-60 h-60 top-20 left-10 animate-bubble-slow"
        ></span>
        <span
          class="absolute rounded-full bg-green-300/20 opacity-30 w-20 h-20 top-50 left-0 animate-bubble-medium"
        ></span>
        <span
          class="absolute rounded-full bg-green-300/20 opacity-40 w-60 h-60 bottom-20 right-10 animate-bubble-slow"
        ></span>
        <!-- Add more bubble elements here as desired -->
      </div>

      <!-- Content section, centered text -->
      <div class="text-center">
        <!-- Profile name displayed as large heading -->
        <h3 class="text-6xl text-white mb-4">{{ ABOUT_PROFILE.name }}</h3>

        <!-- Profile bio with semi-transparent white text, limited width, padding, rounded corners and glassmorphism effect -->
        <p
          class="text-xl text-white/65 max-w-3xl mx-auto leading-relaxed glassmorphism px-12 py-6 rounded-2xl"
        >
          {{ ABOUT_PROFILE.bio }}
        </p>
      </div>
    </div>
  </section>
</template>
