<!-- FeaturesSection.vue -->
<script setup lang="ts">
import FeatureCard from '../common/FeatureCard.vue'
import { faGlobe, faPlane, faSearch } from '@fortawesome/free-solid-svg-icons'

// Definisikan tipe untuk props FeatureCard
interface Feature {
  icon: string // pakai string karena kamu kirim class seperti "fas fa-globe"
  title: string
  description: string
}

// Data fitur
const features: Feature[] = [
  {
    icon: faGlobe,
    title: 'Global Snapshots',
    description: 'Key details about every recognized country, always updated'
  },
  {
    icon: faPlane,
    title: 'Plan Your Adventure',
    description: 'Insights that help you prepare or inspire your next trip.'
  },
  {
    icon: faSearch,
    title: 'Discover Cultures',
    description: 'From languages to local currencies, learn what makes each place unique'
  }
]
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <FeatureCard
          v-for="feature in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </div>
  </section>
</template>
