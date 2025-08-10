<template>
  <div
    class="bg-white rounded-xl p-8 border-2 border-purple-200 text-center transition-all duration-300 transform shadow-2xl shadow-purple-500/20"
  >
    <div
      class="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center icon-wrapper"
    >
      <font-awesome-icon
        :icon="icon"
        class="text-4xl text-purple-600 flip-icon"
      />
    </div>
    <h3 class="text-xl font-bold text-gray-800 mb-4">{{ title }}</h3>
    <p class="text-gray-600 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export default defineComponent({
  name: "FeatureCard",
  props: {
    icon: {
      type: Object as () => IconDefinition,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
@keyframes flipY {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.icon-wrapper:hover .flip-icon {
  animation: flipY 1s ease-in-out forwards;
}
</style>
