<!--
  AppFooter.vue
  This component renders the footer section of the application.

  Features:
  - Displays company information (name and address).
  - Lists main site pages as navigation links.
  - Shows services and support links.
  - Provides social media icons linking to company social profiles.

  It uses data imported from '@/data/layoutData' for dynamic content rendering.
-->

<script setup lang="ts">
import { FOOTER_DATA, NAV_LINKS } from '@/data/layoutData'
// FOOTER_DATA contains company info, services list, social media links.
// NAV_LINKS contains navigation links for main site pages.
</script>

<template>
  <footer class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">

        <!-- Company Information Section -->
        <div class="space-y-4">
          <!-- Company name -->
          <h3 class="text-5xl font-bold">{{ FOOTER_DATA.company.name }}</h3>
          <!-- Company address -->
          <p class="text-purple-200">{{ FOOTER_DATA.company.address }}</p>
        </div>

        <!-- Pages Navigation Section -->
        <div clas="pl-50">
          <!-- Section heading -->
          <h4 class="text-lg font-semibold mb-4 pl-15">Pages</h4>
          <ul class="space-y-2 pl-15">
            <!-- Render navigation links dynamically -->
            <li v-for="nav in NAV_LINKS" :key="nav.name">
              <router-link
                :to="nav.href"
                class="text-purple-200 hover:text-white transition-colors duration-300"
              >
                {{ nav.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Service and Support Section -->
        <div>
          <!-- Section heading -->
          <h4 class="text-lg font-semibold mb-4">Service & Support</h4>
          <ul class="space-y-2">
            <!-- Render list of service/support options dynamically -->
            <li v-for="service in FOOTER_DATA.services" :key="service">
              <a
                href="#"
                class="text-purple-200 hover:text-white transition-colors duration-300"
              >
                {{ service }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Media Section -->
        <div>
          <!-- Section heading -->
          <h4 class="text-lg font-semibold mb-4">Our Social Media</h4>
          <div class="flex space-x-4">
            <!-- Render social media icons with links dynamically -->
            <a
              v-for="social in FOOTER_DATA.socialMedia"
              :key="social.icon"
              :href="social.url"
              class="w-10 h-10 bg-white/20 bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', social.icon]" size="lg" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>
