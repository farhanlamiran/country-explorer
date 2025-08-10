<script setup lang="ts">
/**
 * Feature Card Component
 *
 * Props (from IFeature interface):
 * - icon: The icon identifier used by font-awesome-icon to display the feature icon.
 * - title: The title text displayed as the heading of the feature card.
 * - description: The descriptive text explaining the feature.
 *
 * This component shows a card with an icon, title, and description,
 * and includes a flip animation on the icon when hovered.
 */

import type { IFeature } from "@/data/homeData";

// Define props based on the IFeature interface
defineProps<IFeature>()
</script>

<template>
  <div
    class="bg-white rounded-xl p-8 border-2 border-purple-200 text-center transition-all duration-300 transform shadow-2xl shadow-purple-500/20"
  >
    <!-- Icon container with hover flip animation -->
    <div
      class="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center icon-wrapper"
    >
      <font-awesome-icon
        :icon="icon"
        class="text-4xl text-purple-600 flip-icon"
      />
    </div>

    <!-- Feature title -->
    <h3 class="text-xl font-bold text-gray-800 mb-4">{{ title }}</h3>

    <!-- Feature description -->
    <p class="text-gray-600 leading-relaxed">{{ description }}</p>
  </div>
</template>

<style scoped>
/* Define a 360-degree Y-axis flip animation */
@keyframes flipY {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

/* Trigger the flip animation on the icon when hovering over the icon wrapper */
.icon-wrapper:hover .flip-icon {
  animation: flipY 1s ease-in-out forwards;
}
</style>
