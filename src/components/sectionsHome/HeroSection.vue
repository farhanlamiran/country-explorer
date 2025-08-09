<script setup lang="ts"></script>

<template>
  <section
    class="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 py-20 relative overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
      <div class="absolute top-1/2 right-1/3 w-16 h-16 bg-white rounded-full"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left Content -->
      <div class="text-white space-y-6">
        <h1 class="text-5xl font-bold leading-tight">
          Documenting the <span class="text-yellow-300">world</span><br />
          one country at a time
        </h1>
        <p class="text-xl text-purple-100 max-w-lg">Your first stop before the journey begins</p>
        <div class="pt-4">
          <button
            class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Now
          </button>
        </div>
      </div>

      <!-- Right Content - Luggage Illustration -->
      <div class="relative flex justify-center lg:justify-end">
        <!-- Gambar Luggage -->
        <img
          src="/luggage.png"
          alt="Luggage"
          class="hidden lg:block w-67 h-auto object-contain animate-pulse-slow z-20"
        />

        <img
          src="/box.png"
          alt="Box"
          class="hidden lg:block absolute top-30 left-40 w-67 h-auto object-contain"
        />
      </div>
    </div>
  </section>
</template>
