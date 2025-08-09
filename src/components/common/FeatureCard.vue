<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FeatureCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
});
</script>

<template>
  <div
    class="bg-white rounded-xl p-8 border-2 border-purple-200 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
  >
    <div
      class="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center"
    >
      <font-awesome-icon :icon="icon" class="text-4xl text-purple-600" />
    </div>
    <h3 class="text-xl font-bold text-gray-800 mb-4">{{ title }}</h3>
    <p class="text-gray-600 leading-relaxed">{{ description }}</p>
  </div>
</template>
