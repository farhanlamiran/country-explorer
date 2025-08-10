// src/composables/useCountrySearch.ts
import { ref, computed, watch } from 'vue';
import type { ICountry } from '@/types';

export function useCountrySearch(initialCountries: ICountry[] = []) {
  const countries = ref<ICountry[]>(initialCountries);
  const filteredCountries = ref<ICountry[]>(initialCountries);
  const searchQuery = ref('');
  const currentPage = ref(1);
  const itemsPerPage = ref(8);

  const totalPages = computed(() => Math.ceil(filteredCountries.value.length / itemsPerPage.value));
  const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);
  const endIndex = computed(() => startIndex.value + itemsPerPage.value);
  const paginatedCountries = computed(() => filteredCountries.value.slice(startIndex.value, endIndex.value));

  function handleSearch() {
    if (!searchQuery.value.trim()) {
      filteredCountries.value = countries.value;
    } else {
      const query = searchQuery.value.toLowerCase().trim();
      filteredCountries.value = countries.value.filter(country =>
        country.name.common.toLowerCase().includes(query) ||
        country.name.official?.toLowerCase().includes(query) ||
        country.region?.toLowerCase().includes(query) ||
        country.subregion?.toLowerCase().includes(query)
      );
    }
    currentPage.value = 1;
  }

  function handleSearchChange(query: string) {
    searchQuery.value = query;
    if (!query.trim()) {
      filteredCountries.value = countries.value;
      currentPage.value = 1;
    }
  }

  function handlePageChange(page: number) {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;

    }
  }

  // Debounced watcher for searchQuery
  let searchTimeout: number | undefined;
  watch(searchQuery, (newQuery) => {
    if (searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = window.setTimeout(() => {
      if (newQuery) handleSearch();
    }, 300);
  });

  return {
    countries,
    filteredCountries,
    searchQuery,
    currentPage,
    itemsPerPage,
    totalPages,
    paginatedCountries,
    handleSearch,
    handleSearchChange,
    handlePageChange,
  };
}
