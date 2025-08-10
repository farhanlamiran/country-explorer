<!-- TeamProfile.vue -->
<script setup lang="ts">
import { defineProps } from 'vue'

interface Founder {
  image: string
  name: string
  position: string
  bio: string
}

defineProps<{
  founder: Founder
}>()
</script>

<template>
  <section class="py-24 pt-30 relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <!-- Bubble background -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <!-- Contoh beberapa bubble -->
      <span class="absolute rounded-full bg-green-300/20 opacity-40 w-60 h-60 top-20 left-10 animate-bubble-slow"></span>
      <span class="absolute rounded-full bg-green-300/20 opacity-30 w-20 h-20 top-50 left-0 animate-bubble-medium"></span>
      <span class="absolute rounded-full bg-green-300/20 opacity-40 w-60 h-60 bottom-20 right-10 animate-bubble-slow"></span>
      <!-- Tambah bubble sesuai selera -->
    </div>
      <div class="text-center">
        <div class="relative inline-block mb-12">
          <div class="w-60 h-60 mx-auto relative">
            <img
              :src="founder.image"
              :alt="founder.name"
              class="w-full h-full rounded-3xl object-cover shadow-2xl"
            >
          </div>
        </div>

        <h3 class="text-6xl text-white/80 mb-4">{{ founder.name }}</h3>
        <div class="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white/80 font-semibold text-lg mb-8">
          {{ founder.position }}
        </div>
        <p
  class="text-xl text-white/65 max-w-3xl mx-auto leading-relaxed glassmorphism px-12 py-6 rounded-2xl "
>
  {{ founder.bio }}
</p>
      </div>
    </div>

  </section>
</template>

<style>
</style>
