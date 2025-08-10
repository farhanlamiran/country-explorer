<script lang="ts" setup>
// Import child components used in this page
import Search from "../components/sectionsExplore/Search.vue";
import CountryCard from "../components/sectionsExplore/CountryCard.vue";
import Pagination from "../components/sectionsExplore/Pagination.vue";
import CountryModal from "../components/sectionsExplore/CountryModal.vue";
import CardSkeleton from "@/components/sectionsExplore/CardSkeleton.vue";

import { ref, onMounted } from "vue";
import { fetchCountries } from '@/api/countryService';  // API call to fetch country data
import { useCountrySearch } from '@/composables/useCountrySearch';  // Composable for search & pagination logic
import { useCountryModal } from '@/composables/useCountryModal';    // Composable for modal state management

// Loading state to show spinner or skeleton during API call
const loading = ref(true);

// Error message holder to display errors to the user
const error = ref<string | null>(null);

// Destructure reactive properties and methods from search composable
const {
  countries,
  filteredCountries,
  searchQuery,
  currentPage,
  itemsPerPage,
  totalPages,
  paginatedCountries,
  handleSearch,
  handleSearchChange,
  handlePageChange
} = useCountrySearch();

// Destructure reactive properties and methods from modal composable
const {
  selectedCountry,
  showModal,
  showCountryDetails,
  closeModal,
} = useCountryModal();

/**
 * Async function to fetch countries from API and initialize data.
 * Sets loading state during fetch and handles errors gracefully.
 */
async function loadCountries() {
  try {
    loading.value = true;  // Start loading state
    error.value = null;    // Clear previous errors
    const data = await fetchCountries();  // Fetch countries from backend/api
    countries.value = data;                // Initialize countries list
    filteredCountries.value = data;        // Initialize filtered list
  } catch (err: any) {
    error.value = err.message || 'Unknown error';  // Store error message if API call fails
  } finally {
    loading.value = false;  // End loading state after attempt
  }
}

// Lifecycle hook: fetch country data when component mounts
onMounted(() => {
  loadCountries();
});
</script>

<template>
  <div id="explore" class="min-h-screen bg-gray-50">
    <!-- Search component for entering country queries -->
    <Search
      :searchQuery="searchQuery"
      @search-change="handleSearchChange"
      @search="handleSearch"
    />

    <main class="max-w-7xl mx-auto px-4 py-8">
      <!-- Loading state: show skeleton loader while fetching data -->
      <div v-if="loading">
        <CardSkeleton/>
      </div>

      <!-- Error state: show error message if API call fails -->
      <div v-if="error" class="text-center text-red-600 py-20">
        ❌ {{ error }}
      </div>

      <!-- No results state: show message if search/filter yields no countries -->
      <div v-if="!loading && !error && paginatedCountries.length === 0" class="text-center text-gray-600 py-20">
        🔍 No countries found
      </div>

      <!-- Display paginated list of countries as cards -->
      <div v-if="!loading && !error && paginatedCountries.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CountryCard
          v-for="country in paginatedCountries"
          :key="country.name.common"
          :country="country"
          @show-details="showCountryDetails"
        />
      </div>

      <!-- Pagination controls component -->
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        :totalItems="filteredCountries.length"
        :itemsPerPage="itemsPerPage"
        @page-change="handlePageChange"
      />

      <!-- Modal component to show detailed country information -->
      <CountryModal
        :country="selectedCountry"
        :isOpen="showModal"
        @close="closeModal"
      />
    </main>
  </div>
</template>
