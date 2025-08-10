<!-- AppFooter.vue -->
<script setup lang="ts">
import { reactive } from 'vue'

interface SocialMedia {
  icon: string
  url: string
}

interface FooterData {
  company: {
    name: string
    address: string
  }
  pages: string[]
  services: string[]
  socialMedia: SocialMedia[]
}

const footerData = reactive<FooterData>({
  company: {
    name: 'Atlas & Ink',
    address: 'Boulevard St, Los Angeles, 90001',
  },
  pages: ['Home', 'Explore', 'About Us'],
  services: ['Contact Us', 'Term Conditions', 'Privacy Policy'],
  socialMedia: [
    { icon: 'instagram', url: '#' },
    { icon: 'linkedin', url: '#' },
    { icon: 'twitter', url: '#' },
    { icon: 'youtube', url: '#' },
  ],
})
</script>

<template>
  <footer class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <h3 class="text-5xl font-bold">{{ footerData.company.name }}</h3>
          <p class="text-purple-200">{{ footerData.company.address }}</p>
        </div>

        <!-- Pages -->
        <div clas="pl-50">
          <h4 class="text-lg font-semibold mb-4 pl-15">Pages</h4>
          <ul class="space-y-2 pl-15">
            <li v-for="page in footerData.pages" :key="page">
              <a
                href="#"
                class="text-purple-200 hover:text-white transition-colors duration-300"
                >{{ page }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Service & Support -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Service & Support</h4>
          <ul class="space-y-2">
            <li v-for="service in footerData.services" :key="service">
              <a
                href="#"
                class="text-purple-200 hover:text-white transition-colors duration-300"
                >{{ service }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Our Social Media</h4>
          <div class="flex space-x-4">
            <a
              v-for="social in footerData.socialMedia"
              :key="social.icon"
              :href="social.url"
              class="w-10 h-10 bg-white/20 bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
            >
              <font-awesome-icon :icon="['fab', social.icon]" size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
