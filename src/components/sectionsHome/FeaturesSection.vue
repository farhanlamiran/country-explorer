<!-- FeaturesSection.vue -->
<script setup lang="ts">
import { FEATURES } from '@/data/homeData';
import FeatureCard from './FeatureCard.vue'
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <FeatureCard
          v-for="feature in FEATURES"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </div>
  </section>
</template>
