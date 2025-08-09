<!-- TestimonialsSection.vue -->
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import TestimonialCard from './TestimonialCard.vue'

interface Testimonial {
  id: number
  author: string
  role: string
  country: string
  rating: number
  text: string
}

// Data testimonials
const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    author: "Sarah Johnson",
    role: "Travel Blogger",
    country: "United States",
    rating: 5,
    text: "Atlas & Ink has been my go-to resource for travel planning. The cultural insights and detailed country information helped me prepare for my Southeast Asia trip perfectly. I discovered hidden gems I would never have found otherwise!"
  },
  {
    id: 2,
    author: "Marco Rodriguez",
    role: "International Student",
    country: "Spain",
    rating: 5,
    text: "As a student studying abroad, this platform gave me everything I needed to understand local customs and traditions. The information is accurate, up-to-date, and presented in a way that's easy to understand."
  },
  {
    id: 3,
    author: "Priya Patel",
    role: "Digital Nomad",
    country: "India",
    rating: 5,
    text: "Working remotely from different countries requires understanding local currencies, time zones, and business cultures. Atlas & Ink provides all this information in one place. It's become essential for my nomadic lifestyle."
  },
  {
    id: 4,
    author: "James Thompson",
    role: "Geography Teacher",
    country: "United Kingdom",
    rating: 4,
    text: "I use Atlas & Ink as a teaching resource for my geography classes. The visual presentations and comprehensive country profiles make learning engaging for my students. It's an excellent educational tool."
  },
  {
    id: 5,
    author: "Emma Chen",
    role: "Business Consultant",
    country: "Canada",
    rating: 5,
    text: "Before expanding our business internationally, Atlas & Ink helped us understand market conditions, cultural nuances, and business practices in different countries. The insights were invaluable for our success."
  },
  {
    id: 6,
    author: "Ahmed Hassan",
    role: "Photographer",
    country: "Egypt",
    rating: 5,
    text: "The stunning visuals and detailed location information helped me plan my photography expeditions across Africa. I discovered breathtaking locations and learned about local photography regulations through their platform."
  }
])

const currentIndex = ref(0)
let autoplayInterval: ReturnType<typeof setInterval> | null = null

const visibleTestimonials = computed(() => {
  // Show 3 testimonials starting from currentIndex, wrap around if needed
  // To simplify, just slice and fallback to start if overflow
  const start = currentIndex.value
  const end = start + 3
  if (end <= testimonials.value.length) {
    return testimonials.value.slice(start, end)
  } else {
    return [...testimonials.value.slice(start), ...testimonials.value.slice(0, end - testimonials.value.length)]
  }
})

const totalSlides = computed(() => Math.ceil(testimonials.value.length / 3))

function nextSlide() {
  currentIndex.value = (currentIndex.value + 3) % testimonials.value.length
}

function prevSlide() {
  currentIndex.value = currentIndex.value === 0
    ? testimonials.value.length - 3
    : currentIndex.value - 3
}

function goToSlide(index: number) {
  currentIndex.value = index * 3
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<template>
  <section
    class="py-20 bg-gray-50"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Testimonials</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear what our community says about their experience with Atlas & Ink
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <TestimonialCard
          v-for="testimonial in visibleTestimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>

      <!-- Navigation Controls -->
      <div class="flex justify-center items-center space-x-6">
        <!-- Previous Button -->
        <button
          @click="prevSlide"
          class="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-50 transition-colors duration-300"
        >
          <i class="fas fa-chevron-left text-purple-600"></i>
        </button>

        <!-- Dots Indicator -->
        <div class="flex space-x-2">
          <button
            v-for="(slide, index) in totalSlides"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-colors duration-300"
            :class="currentIndex === index * 3 ? 'bg-purple-600' : 'bg-gray-300'"
          ></button>
        </div>

        <!-- Next Button -->
        <button
          @click="nextSlide"
          class="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-50 transition-colors duration-300"
        >
          <i class="fas fa-chevron-right text-purple-600"></i>
        </button>
      </div>
    </div>
  </section>
</template>
