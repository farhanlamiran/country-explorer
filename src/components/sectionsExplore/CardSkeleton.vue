<script lang="ts" setup>

</script>

<template>
  <div
    class="grid grid-cols-4 gap-6"
  >
    <div
      v-for="n in 8"
      :key="n"
      class="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 animate-pulse"
    >
      <div class="w-full h-48 rounded-2xl bg-gray-300 dark:bg-gray-700 mb-4"></div>

      <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>

      <div class="flex items-center gap-2 mb-2">
        <div class="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      </div>

      <div class="flex items-center gap-2 mb-4">
        <div class="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
      </div>

      <div class="w-full h-12 rounded-xl bg-gray-300 dark:bg-gray-700 "></div>
    </div>
  </div>
</template>



<style scoped>
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.animate-pulse {
  background: linear-gradient(
    90deg,
    rgba(220, 220, 220, 0.2) 25%,
    rgba(220, 220, 220, 0.4) 50%,
    rgba(220, 220, 220, 0.2) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
</style>
