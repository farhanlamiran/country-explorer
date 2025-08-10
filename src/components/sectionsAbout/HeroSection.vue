<!-- HeroSection.vue -->
<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  title: string
  subtitle: string
}

defineProps<Props>()
</script>

<template>
                <section class="hero-bg min-h-screen flex items-center justify-center text-center px-4 pt-20">
                    <div class="max-w-6xl mx-auto">
                        <div class="floating mb-8">
                            <div class="w-32 h-32 mx-auto gradient-bg-2 rounded-full flex items-center justify-center shadow-2xl mb-8">
                                <span class="text-6xl">🗺️</span>
                            </div>
                        </div>

                        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                            {{ title }}
                        </h1>

                        <p class="text-xl md:text-2xl text-white text-opacity-90 max-w-4xl mx-auto leading-relaxed mb-12">
                            {{ subtitle }}
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button class="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                                🚀 Explore Countries
                            </button>
                            <button class="px-8 py-4 glassmorphism text-white rounded-full font-semibold hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                                📖 Learn More
                            </button>
                        </div>

                        <!-- Floating Elements -->
                        <div class="absolute top-20 left-10 floating opacity-30">
                            <div class="w-20 h-20 gradient-bg-3 rounded-full blur-sm"></div>
                        </div>
                        <div class="absolute bottom-20 right-10 floating-delayed opacity-30">
                            <div class="w-16 h-16 gradient-bg-4 rounded-full blur-sm"></div>
                        </div>
                    </div>
                </section>
</template>
