<script setup lang="ts">
import { ABOUT_PROFILE } from '@/data/aboutData'
</script>

<!-- TeamProfile.vue -->
<template>
  <section
    class="py-24 pt-30 relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 overflow-hidden"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Bubble background -->
      <div class="absolute inset-0 pointer-events-none z-0">
        <!-- Contoh beberapa bubble -->
        <span
          class="absolute rounded-full bg-green-300/20 opacity-40 w-60 h-60 top-20 left-10 animate-bubble-slow"
        ></span>
        <span
          class="absolute rounded-full bg-green-300/20 opacity-30 w-20 h-20 top-50 left-0 animate-bubble-medium"
        ></span>
        <span
          class="absolute rounded-full bg-green-300/20 opacity-40 w-60 h-60 bottom-20 right-10 animate-bubble-slow"
        ></span>
        <!-- Tambah bubble sesuai selera -->
      </div>
      <div class="text-center">
        <h3 class="text-6xl text-white mb-4">{{ ABOUT_PROFILE.name }}</h3>
        <p
          class="text-xl text-white/65 max-w-3xl mx-auto leading-relaxed glassmorphism px-12 py-6 rounded-2xl"
        >
          {{ ABOUT_PROFILE.bio }}
        </p>
      </div>
    </div>
  </section>
</template>

<style></style>
