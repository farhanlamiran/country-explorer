<script lang="ts" setup>

import Search from "../components/sectionsExplore/Search.vue";
import CountryCard from "../components/sectionsExplore/CountryCard.vue";
import Pagination from "../components/sectionsExplore/Pagination.vue";
import CountryModal from "../components/sectionsExplore/CountryModal.vue";
import CardSkeleton from "@/components/sectionsExplore/CardSkeleton.vue";

import { ref, onMounted } from "vue";
import { fetchCountries } from '@/api/countryService';
import { useCountrySearch } from '@/composables/useCountrySearch';
import { useCountryModal } from '@/composables/useCountryModal';


const loading = ref(true);
const error = ref<string | null>(null);

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

const {
  selectedCountry,
  showModal,
  showCountryDetails,
  closeModal,
} = useCountryModal();


async function loadCountries() {
  try {
    loading.value = true;
    error.value = null;
    const data = await fetchCountries();
    countries.value = data;
    filteredCountries.value = data;

  } catch (err: any) {
    error.value = err.message || 'Unknown error';

  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadCountries();
});
</script>


<template>
  <div id="explore" class="min-h-screen bg-gray-50">
    <Search
      :searchQuery="searchQuery"
      @search-change="handleSearchChange"
      @search="handleSearch"
    />

    <main class="max-w-7xl mx-auto px-4 py-8">
      <div v-if="loading">
        <CardSkeleton/>
      </div>

      <div v-if="error" class="text-center text-red-600 py-20">
        ❌ {{ error }}
      </div>

      <div v-if="!loading && !error && paginatedCountries.length === 0" class="text-center text-gray-600 py-20">
        🔍 No countries found
      </div>

      <div v-if="!loading && !error && paginatedCountries.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CountryCard
          v-for="country in paginatedCountries"
          :key="country.name.common"
          :country="country"
          @show-details="showCountryDetails"
        />
      </div>

      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        :totalItems="filteredCountries.length"
        :itemsPerPage="itemsPerPage"
        @page-change="handlePageChange"
      />

      <CountryModal
        :country="selectedCountry"
        :isOpen="showModal"
        @close="closeModal"
      />
    </main>
  </div>
</template>
