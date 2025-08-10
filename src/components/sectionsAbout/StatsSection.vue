<!-- StatsSection.vue -->
<script setup lang="ts">
interface Stat {
  label: string
  value: string | number
}

defineProps<{
  stats: Stat[]
}>()
</script>

<template>
                  <section class="py-24 hero-bg relative overflow-hidden">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div class="text-center mb-16">
                            <h2 class="text-5xl font-black text-white mb-6">Platform Statistics</h2>
                            <p class="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
                                Atlas & Ink dalam angka dan pencapaian
                            </p>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div
                                v-for="(stat, index) in stats"
                                :key="stat.label"
                                class="text-center glassmorphism p-8 rounded-3xl card-hover"
                            >
                                <div class="text-5xl font-black text-white mb-4 pulse-slow">{{ stat.value }}</div>
                                <div class="text-white text-opacity-90 text-lg font-medium">{{ stat.label }}</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Floating background elements -->
                    <div class="absolute top-10 left-10 w-32 h-32 gradient-bg-3 rounded-full opacity-20 floating blur-xl"></div>
                    <div class="absolute bottom-10 right-10 w-24 h-24 gradient-bg-4 rounded-full opacity-20 floating-delayed blur-xl"></div>
                </section>
</template>
