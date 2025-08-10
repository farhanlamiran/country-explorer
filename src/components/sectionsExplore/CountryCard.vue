<script lang="ts" setup>
/**
 * Props and emits definitions for CountryCard component.
 *
 * - Props:
 *   - country: An object conforming to ICountryCard type, representing a country's data.
 *
 * - Emits:
 *   - 'show-details': Event emitted when the "More Info" button is clicked, sending the country object.
 */

import { defineProps, defineEmits } from "vue";
import type { ICountryCard } from "@/types";
import { formatPopulation, handleImageError } from "@/utils/countryHelpers";

// Define the expected props with typing
defineProps<{ country: ICountryCard }>();

// Define the emitted events with typing
defineEmits<{ (e: "show-details", country: ICountryCard): void }>();
</script>

<template>
  <!-- Card container with styling and hover effects -->
  <div
    class="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-white/20 group"
  >
    <!-- Flag image section with overflow hidden and shadow -->
    <div class="w-full h-48 rounded-2xl overflow-hidden mb-4 shadow-lg">
      <!-- Flag image with fallback between SVG and PNG, alt text for accessibility -->
      <img
        :src="country.flags?.svg || country.flags?.png"
        :alt="`Flag of ${country.name.common}`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        @error="handleImageError"
      />
    </div>

    <!-- Country name heading with truncation and tooltip -->
    <h3
      class="text-xl font-bold text-gray-800 mb-3 truncate"
      :title="country.name.common"
    >
      {{ country.name.common }}
    </h3>

    <!-- Region display with icon -->
    <div class="flex items-center gap-2 text-gray-600 mb-2">
      <svg
        class="w-4 h-4 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
      <span class="truncate">Region: {{ country.region || "N/A" }}</span>
    </div>

    <!-- Population display with icon, formatted using helper -->
    <div class="flex items-center gap-2 text-gray-600 mb-4">
      <svg
        class="w-4 h-4 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      </svg>
      <span class="truncate">
        Population: {{ formatPopulation(country.population) }}
      </span>
    </div>

    <!-- Button that emits 'show-details' event with country data when clicked -->
    <button
      @click="$emit('show-details', country)"
      class="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      More Info
    </button>
  </div>
</template>
