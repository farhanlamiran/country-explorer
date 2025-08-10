<!-- TestimonialsSection.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import TestimonialCard from './TestimonialCard.vue'
import { TESTIMONIALS } from '@/data/homeData'

const track = ref<HTMLElement | null>(null)
const position = ref(0)
const isPaused = ref(false)
let animationFrame: number

function animate() {
  if (!isPaused.value) {
    position.value -= 0.5 //adjust speed
    const trackWidth = track.value?.scrollWidth || 0

    // Reset position
    if (-position.value >= trackWidth / 2) {
      position.value = 0
    }

    if (track.value) {
      track.value.style.transform = `translateX(${position.value}px)`
    }
  }
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  animationFrame = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
})
</script>

<template>
  <section class="py-20 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Testimonials</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear what our community says about their experience with Atlas & Ink
        </p>
      </div>

      <!-- Carousel -->
      <div
        class="relative overflow-hidden"
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false"
      >
        <div
          ref="track"
          class="flex gap-8 transition-transform duration-300 ease-linear"
        >
          <!-- Duplikat data untuk looping mulus -->
          <TestimonialCard
            v-for="(testimonial, index) in [...TESTIMONIALS, ...TESTIMONIALS]"
            :key="index"
            :testimonial="testimonial"
            class="flex-shrink-0 w-[80%] sm:w-[45%] lg:w-[30%]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
