<!-- TestimonialCard.vue -->
<script setup lang="ts">
import type { ITestimonial } from '@/data/homeData';
import { defineProps } from 'vue'

defineProps<{ testimonial: ITestimonial }>()
</script>

<template>
  <div class=" bg-white rounded-xl p-8 border border-gray-100 h-full flex flex-col transition-all duration-300 ease-out transform shadow-2xl shadow-purple-500/20">

    <!-- Stars Rating -->
    <div class="flex mb-4">
      <i
        v-for="n in testimonial.rating"
        :key="n"
        class="fas fa-star text-yellow-500 mr-1"
      ></i>
      <i
        v-for="n in 5 - testimonial.rating"
        :key="'empty-' + n"
        class="far fa-star text-gray-300 mr-1"
      ></i>
    </div>

    <!-- Testimonial Text -->
    <blockquote class="text-gray-600 italic mb-6 flex-grow leading-relaxed">
      "{{ testimonial.text }}"
    </blockquote>

    <!-- Author Info -->
    <div class="flex items-center">
      <div
        class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4"
      >
        <span class="text-purple-600 font-bold text-lg">{{
          testimonial.author.charAt(0)
        }}</span>
      </div>
      <div>
        <h4 class="font-bold text-gray-800">{{ testimonial.author }}</h4>
        <p class="text-sm text-gray-500">
          {{ testimonial.role }}
        </p>
      </div>
    </div>
  </div>
</template>

