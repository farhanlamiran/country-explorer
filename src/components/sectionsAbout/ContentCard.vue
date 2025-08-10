<!-- ContentCards.vue -->
<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  visionTitle: string
  visionContent: string
  missionTitle: string
  missionItems: string[]
}

defineProps<Props>()
</script>

<template>
                <section class="py-24 bg-gradient-to-br from-gray-50 to-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <!-- Vision Card -->
                            <div class="card-hover bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                                <div class="gradient-bg-1 h-64 flex items-center justify-center relative">
                                    <span class="text-8xl floating">🎯</span>
                                    <div class="absolute inset-0 bg-black bg-opacity-10"></div>
                                </div>
                                <div class="p-8">
                                    <div class="flex items-center mb-6">
                                        <div class="w-16 h-16 gradient-bg-1 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                        </div>
                                        <h3 class="text-2xl font-bold text-gray-900">{{ visionTitle }}</h3>
                                    </div>
                                    <p class="text-gray-600 leading-relaxed text-lg">{{ visionContent }}</p>
                                </div>
                            </div>

                            <!-- Mission Card -->
                            <div class="card-hover bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                                <div class="gradient-bg-2 h-64 flex items-center justify-center relative">
                                    <span class="text-8xl floating-delayed">🚀</span>
                                    <div class="absolute inset-0 bg-black bg-opacity-10"></div>
                                </div>
                                <div class="p-8">
                                    <div class="flex items-center mb-6">
                                        <div class="w-16 h-16 gradient-bg-2 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <h3 class="text-2xl font-bold text-gray-900">{{ missionTitle }}</h3>
                                    </div>
                                    <ul class="space-y-4">
                                        <li v-for="(item, index) in missionItems" :key="item" class="flex items-start">
                                            <div class="w-8 h-8 gradient-bg-2 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                                <span class="text-white text-sm font-bold">{{ index + 1 }}</span>
                                            </div>
                                            <span class="text-gray-600 text-lg leading-relaxed">{{ item }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
</template>
