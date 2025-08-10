<script setup lang="ts">
// This component currently does not have any script logic or reactive state.
</script>

<template>
  <section
    class="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 py-30 relative overflow-hidden"
  >
    <!-- Background Pattern: Semi-transparent white bubbles animated slowly -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-30 left-50 w-32 h-32 bg-white rounded-full animate-bubble-slow"></div>
      <div class="absolute bottom-30 right-59 w-60 h-60 bg-white rounded-full animate-bubble-slow"></div>
      <div class="absolute top-50 right-110 w-60 h-60 bg-white rounded-full animate-bubble-slow"></div>
    </div>

    <!-- Main container with responsive 2-column grid on large screens -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

      <!-- Left Content: Heading, subtitle, and call-to-action button -->
      <div class="text-white space-y-6">
        <h1 class="text-5xl font-bold leading-tight">
          Documenting the <span class="text-yellow-400">world</span><br />
          one country at a time
        </h1>
        <p class="text-xl text-purple-100 max-w-lg">
          Your first stop before the journey begins
        </p>

        <!-- Call to Action Button linking to the Explore page -->
        <div class="pt-4 absolute">
          <router-link
            to="/explore"
            class="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Now
          </router-link>
        </div>
      </div>

      <!-- Right Content: Decorative images (luggage and box) with animations -->
      <div class="relative flex justify-center lg:justify-end">
        <!-- Main luggage image, shown only on large screens, with slow pulse animation -->
        <img
          src="/luggage.png"
          alt="Luggage"
          class="hidden lg:block w-67 h-auto object-contain animate-pulse-slow z-20"
        />

        <!-- Decorative box image positioned absolutely relative to container -->
        <img
          src="/box.png"
          alt="Box"
          class="hidden lg:block absolute top-30 left-40 w-67 h-auto object-contain"
        />
      </div>
    </div>
  </section>
</template>
