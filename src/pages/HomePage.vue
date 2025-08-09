<template>
  <div id="home">
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection />

      <!-- Features Section -->
      <FeaturesSection />

      <!-- Mission Section -->
      <MissionSection />

      <!-- Testimonials Section -->
      <TestimonialSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '../components/layout/AppNavbar.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import HeroSection from '../components/sectionsHome/HeroSection.vue'
import FeaturesSection from '../components/sectionsHome/FeaturesSection.vue'
import MissionSection from '../components/sectionsHome/MissionSection.vue'
import TestimonialSection from '../components/sectionsHome/TestimonialSection.vue'

/**
 * Main App Component
 * Root component that orchestrates the entire application
 *
 * @component
 */
</script>
