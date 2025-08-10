<script setup lang="ts">
// Import the TECHNOLOGIES data array from the aboutData module
import { TECHNOLOGIES } from '@/data/aboutData'

// Import Icon component from Iconify for rendering icons dynamically
import { Icon } from '@iconify/vue'
</script>

<template>
  <!-- Section wrapper with padding and gradient background colors -->
  <section class="pt-20 pb-24 bg-gradient-to-br from-green-50 via-white to-green-100">
    <!-- Container with max width and responsive horizontal padding -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Heading area with centered text and spacing -->
      <div class="text-center mb-16">
        <!-- Large section title -->
        <h2 class="text-5xl font-black text-gray-900 mb-6">Tech Stack</h2>
        <!-- Description paragraph with max width for readability -->
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Atlas & Ink is built with modern technologies and cutting-edge tools
        </p>
      </div>

      <!-- Grid layout for technology cards with responsive column count -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Loop through each technology item to render a card -->
        <div
          v-for="(tech, index) in TECHNOLOGIES"
          :key="tech.name"
          class="card-hover bg-white p-8 rounded-3xl shadow-lg text-center border border-gray-100"
        >
          <!-- Icon container with conditional background gradient based on index -->
          <div
            class="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg"
            :class="[
              index === 0 ? 'bg-gradient-to-br from-green-300 to-green-200' : '',
              index === 1 ? 'bg-gradient-to-br from-green-300 to-green-200' : '',
              index === 2 ? 'bg-gradient-to-br from-green-300 to-green-200' : '',
              index === 3 ? 'bg-gradient-to-br from-green-300 to-green-200' : ''
            ]"
          >
            <!-- Dynamic icon rendered using Iconify's Icon component -->
            <Icon :icon="tech.icon" class="text-white" width="36" height="36" />
          </div>
          <!-- Technology name -->
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ tech.name }}</h3>
          <!-- Short description of the technology -->
          <p class="text-gray-600 text-sm leading-relaxed">{{ tech.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
