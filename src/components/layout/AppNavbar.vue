<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { NAV_LINKS } from "@/data/layoutData"

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 h-16 bg-transparent z-50">
  <nav class="relative z-auto transition-colors duration-300"
  :class="scrolled ? 'bg-white  shadow-md' : 'bg-transparent border-none shadow-none'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="flex justify-between items-center py-4">

        <!-- Logo -->
        <div :class="[scrolled ? 'text-black/70' : 'text-white/70','text-3xl transition-colors duration-300']">
          Atlas & Ink
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link
              v-for="link in NAV_LINKS"
              :key="link.name"
              :to="link.href"
              :class="[
                scrolled
                  ? 'text-black/70 hover:text-black'
                  : 'text-white/70 hover:text-yellow-300',
                'px-3 py-2 text-sm font-medium transition-colors duration-300'
              ]"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-white hover:text-yellow-300 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation overlay -->
    <transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white/30 backdrop-blur-md z-50"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            v-for="link in NAV_LINKS"
            :key="link.name"
            :to="link.href"
            class="block px-3 py-2 text-base font-medium text-gray-800 hover:text-yellow-300 transition-colors duration-200"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
  </header>
</template>


