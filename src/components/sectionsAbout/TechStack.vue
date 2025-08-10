<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Type untuk tiap tech
interface Technology {
  name: string
  icon: string // nama icon dari iconify, contoh: 'logos:vue', 'logos:typescript-icon'
  description: string
}

defineProps<{
  technologies: Technology[]
}>()
</script>

<template>
  <section class="pt-20 pb-24 bg-gradient-to-br from-green-50 via-white to-green-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black text-gray-900 mb-6">Tech Stack</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Atlas & Ink is built with modern technologies and cutting-edge tools
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(tech, index) in technologies"
          :key="tech.name"
          class="card-hover bg-white p-8 rounded-3xl shadow-lg text-center border border-gray-100"
        >
          <div
            class="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg"
            :class="[
              index === 0 ? 'bg-gradient-to-br from-green-300 to-green-200' : '',
              index === 1 ? 'bg-gradient-to-br from-green-300 to-green-200' : '',
              index === 2 ? 'bg-gradient-to-br from-green-300 to-green-200' : '',
              index === 3 ? 'bg-gradient-to-br from-green-300 to-green-200' : ''
            ]"
          >
            <Icon :icon="tech.icon" class="text-white" width="36" height="36" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ tech.name }}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{{ tech.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
