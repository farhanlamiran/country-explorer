<script lang="ts" setup>
import type { ICountry } from "@/types";
import { defineProps, defineEmits, toRef } from "vue";
import { getLanguages, getCurrencies, getTimezones, getCapital } from "@/utils/countryHelpers";
import { useBodyScrollLock } from "@/composables/useBodyScrollLock";

const props = defineProps<{
  country: ICountry | null;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

// Pakai composable untuk lock scroll
useBodyScrollLock(toRef(props, "isOpen"));
</script>


<template>
  <div
    v-if="isOpen && country"
    class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
    @click="$emit('close')"
  >
    <div
      class="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in"
      @click.stop
    >
      <!-- Header -->
      <div class="flex items-center justify-between px-7 pt-8">
        <button
          @click="$emit('close')"
          class="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 class="text-6xl font-bold text-gray-800 pr-12">
          {{ country.name?.common }}
        </h2>

        <img
          :src="country.flags?.svg || country.flags?.png"
          :alt="`Flag of ${country.name.common}`"
          class="w-40 h-auto rounded shadow"
        />


      </div>

      <!-- Body -->
      <div class="p-6">
        <div class="space-y-4">
          <div
            class="bg-gray-50 p-4 rounded-2xl border-l-4 border-yellow-500"
          >
            <div
              class="flex items-center gap-2 font-semibold text-gray-800 mb-2"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
              Official Name
            </div>
            <div class="text-gray-600">
              {{ country.name?.official || "N/A" }}
            </div>
          </div>

          <div
            class="bg-gray-50 p-4 rounded-2xl border-l-4 border-yellow-500"
          >
            <div
              class="flex items-center gap-2 font-semibold text-gray-800 mb-2"
            >
              <svg
                class="w-4 h-4"
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
              Languages
            </div>
            <div class="text-gray-600">{{ getLanguages(country.languages) }}</div>
          </div>

          <div
            class="bg-gray-50 p-4 rounded-2xl border-l-4 border-yellow-500"
          >
            <div
              class="flex items-center gap-2 font-semibold text-gray-800 mb-2"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
              Currency
            </div>
            <div class="text-gray-600">{{ getCurrencies(country.currencies) }}</div>
          </div>

          <div
            class="bg-gray-50 p-4 rounded-2xl border-l-4 border-yellow-500"
          >
            <div
              class="flex items-center gap-2 font-semibold text-gray-800 mb-2"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Timezones
            </div>
            <div class="text-gray-600">{{ getTimezones(country.timezones) }}</div>
          </div>

          <div
            class="bg-gray-50 p-4 rounded-2xl border-l-4 border-yellow-500"
          >
            <div
              class="flex items-center gap-2 font-semibold text-gray-800 mb-2"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Region & Capital
            </div>
            <div class="text-gray-600">
              {{ country.region }}
              <span v-if="country.subregion"> - {{ country.subregion }}</span>
              <br />
              Capital: {{ getCapital(country.capital) }}
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div
          class="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <a
            v-if="country.maps?.googleMaps"
            :href="country.maps.googleMaps"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            View Maps
          </a>
          <button
            @click="$emit('close')"
            class="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 hover:-translate-y-1 transition-all duration-300"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


