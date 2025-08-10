<script lang="ts" setup>
/**
 * Search Component
 *
 * Props:
 * - searchQuery: string
 *   The current search input value passed from the parent component.
 *
 * Emits:
 * - "search-change": Emitted whenever the input value changes, passing the new input string.
 * - "search": Emitted when the user initiates a search (e.g., presses Enter key or clicks the button).
 */

import { defineEmits, defineProps } from 'vue'

// Define props received from parent
const props = defineProps<{
  searchQuery: string
}>()

// Define emitted events to notify parent component
const emit = defineEmits<{
  (e: 'search-change', value: string): void
  (e: 'search'): void
}>()

/**
 * Handles input event on the search field.
 * Emits "search-change" event with the updated input value.
 *
 * @param event - The input event from the search input field
 */
function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('search-change', target.value)
}

/**
 * Handles keypress event on the search input field.
 * Emits "search" event if the Enter key is pressed to trigger search.
 *
 * @param event - The keyboard event from the input field
 */
function handleKeyPress(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    emit('search')
  }
}
</script>

<template>
  <header class="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
    <!-- Bubble background effect -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <!-- Example bubbles for decoration -->
      <span class="absolute rounded-full bg-yellow-200 opacity-40 w-32 h-32 top-30 left-100 animate-bubble-slow"></span>
      <span class="absolute rounded-full bg-yellow-100 opacity-30 w-20 h-20 top-50 left-100 animate-bubble-medium"></span>
      <span class="absolute rounded-full bg-yellow-300 opacity-20 w-24 h-24 bottom-10 left-1/2 animate-bubble-fast"></span>
      <!-- Add more bubbles as needed -->
    </div>

    <!-- Main content container -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 pt-30 pb-20 text-center">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Explore Countries</h1>
      <p class="text-lg md:text-xl text-black/50 mb-8">Browse by region or search for a specific country</p>

      <!-- Search input and button -->
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
          <!-- Search icon -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <!-- Button label visible on larger screens -->
          <span class="hidden sm:inline">Search</span>
        </button>
      </div>
    </div>
  </header>
</template>
