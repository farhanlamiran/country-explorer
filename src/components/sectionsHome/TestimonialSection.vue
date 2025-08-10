<!-- TestimonialsSection.vue -->
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import TestimonialCard from './TestimonialCard.vue'
import { TESTIMONIALS } from '@/data/homeData'

// Reference to the container element holding testimonial cards
const track = ref<HTMLElement | null>(null)

// Current horizontal translation position for the carousel animation
const position = ref(0)

// Flag to pause animation on user interaction (e.g., mouse hover)
const isPaused = ref(false)

// Variable to hold the ID returned by requestAnimationFrame for cancellation
let animationFrame: number

// Recursive function to animate the carousel sliding effect
function animate() {
  // Only move the carousel if not paused
  if (!isPaused.value) {
    position.value -= 0.5 // Adjust speed here by changing the decrement value

    const trackWidth = track.value?.scrollWidth || 0

    // Reset position to create a seamless infinite scrolling effect
    if (-position.value >= trackWidth / 2) {
      position.value = 0
    }

    // Apply the current position as a CSS transform to the carousel container
    if (track.value) {
      track.value.style.transform = `translateX(${position.value}px)`
    }
  }

  // Queue next animation frame recursively
  animationFrame = requestAnimationFrame(animate)
}

// Start the animation loop when the component is mounted
onMounted(() => {
  animationFrame = requestAnimationFrame(animate)
})

// Clean up the animation loop when the component is about to unmount
onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
})
</script>

<template>
  <section class="py-20 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Testimonials</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear what our community says about their experience with Atlas & Ink
        </p>
      </div>

      <!-- Carousel Container -->
      <div
        class="relative overflow-hidden"
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false" 
      >
        <div
          ref="track"
          class="flex gap-8 transition-transform duration-300 ease-linear"
        >
          <!-- Render testimonials twice for smooth infinite scroll -->
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
