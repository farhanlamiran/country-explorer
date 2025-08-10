<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps<{
  searchQuery: string
}>()

const emit = defineEmits<{
  (e: 'search-change', value: string): void
  (e: 'search'): void
}>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('search-change', target.value)
}

function handleKeyPress(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    emit('search')
  }
}
</script>

<template>
  <header class="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
    <!-- Bubble background -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <!-- Contoh beberapa bubble -->
      <span class="absolute rounded-full bg-yellow-200 opacity-40 w-32 h-32 top-30 left-100 animate-bubble-slow"></span>
      <span class="absolute rounded-full bg-yellow-100 opacity-30 w-20 h-20 top-50 left-100 animate-bubble-medium"></span>
      <span class="absolute rounded-full bg-yellow-300 opacity-20 w-24 h-24 bottom-10 left-1/2 animate-bubble-fast"></span>
      <!-- Tambah bubble sesuai selera -->
    </div>

    <!-- Konten utama -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 pt-30 pb-20 text-center">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Explore Countries</h1>
      <p class="text-lg md:text-xl text-black/50 mb-8">Browse by region or search for a specific country</p>

      <!-- Search -->
      <div class="flex flex-col sm:flex-row justify-center gap-2 max-w-lg mx-auto">
        <input
          type="text"
          class="flex-1 px-6 py-4 rounded-lg bg-white border-none outline-none shadow-lg text-lg focus:shadow-xl transition-all duration-300"
          placeholder="Search for a country..."
          :value="searchQuery"
          @input="onInput"
          @keypress="handleKeyPress"
        />
        <button
          @click="$emit('search')"
          class="transform transition-transform duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg hover:scale-102 hover:shadow-xl flex items-center justify-center gap-2"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span class="hidden sm:inline">Search</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Animasi bubbles contoh */
@keyframes bubbleSlow {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.1);
  }
}
@keyframes bubbleMedium {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-15px) scale(1.05);
  }
}
@keyframes bubbleFast {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.1);
  }
}

.animate-bubble-slow {
  animation: bubbleSlow 6s ease-in-out infinite;
}
.animate-bubble-medium {
  animation: bubbleMedium 4s ease-in-out infinite;
}
.animate-bubble-fast {
  animation: bubbleFast 3s ease-in-out infinite;
}
</style>
