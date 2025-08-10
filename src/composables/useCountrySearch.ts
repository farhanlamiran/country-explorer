import { ref, computed, watch } from 'vue';
import type { ICountry } from '@/types';

/**
 * Composable for managing country search, filtering, and pagination.
 *
 * @param initialCountries - Initial list of countries to manage (default is empty array).
 * @returns
 * - countries: Ref<ICountry[]> - Original list of countries.
 * - filteredCountries: Ref<ICountry[]> - Countries filtered by search query.
 * - searchQuery: Ref<string> - Reactive search input value.
 * - currentPage: Ref<number> - Current page number in pagination.
 * - itemsPerPage: Ref<number> - Number of items to show per page.
 * - totalPages: Computed<number> - Total pages based on filtered results and items per page.
 * - paginatedCountries: Computed<ICountry[]> - Countries sliced for current page view.
 * - handleSearch: Function - Filters countries based on searchQuery.
 * - handleSearchChange: Function - Updates searchQuery reactively.
 * - handlePageChange: Function - Updates current page, with bounds checking.
 */
export function useCountrySearch(initialCountries: ICountry[] = []) {
  // Reactive list of all countries available for search and filtering
  const countries = ref<ICountry[]>(initialCountries);

  // Reactive list reflecting filtered countries based on current search query
  const filteredCountries = ref<ICountry[]>(initialCountries);

  // Reactive search input string from user
  const searchQuery = ref('');

  // Reactive current page number for pagination
  const currentPage = ref(1);

  // Reactive number of items to display per page in pagination
  const itemsPerPage = ref(8);

  // Computed total number of pages based on filtered results and items per page
  const totalPages = computed(() => Math.ceil(filteredCountries.value.length / itemsPerPage.value));

  // Computed start index for slicing paginatedCountries based on current page
  const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

  // Computed end index for slicing paginatedCountries
  const endIndex = computed(() => startIndex.value + itemsPerPage.value);

  // Computed slice of filteredCountries for the current page
  const paginatedCountries = computed(() => filteredCountries.value.slice(startIndex.value, endIndex.value));

  /**
   * Filters the countries list based on the searchQuery value.
   * Matches against common name, official name, region, or subregion (case-insensitive).
   * Resets currentPage to 1 after filtering.
   */
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

  /**
   * Updates the search query reactively.
   * If query is empty or whitespace, resets filteredCountries and currentPage.
   * @param query - The new search string input.
   */
  function handleSearchChange(query: string) {
    searchQuery.value = query;
    if (!query.trim()) {
      filteredCountries.value = countries.value;
      currentPage.value = 1;
    }
  }

  /**
   * Changes the current page for pagination if the requested page is within valid bounds.
   * @param page - The page number to switch to.
   */
  function handlePageChange(page: number) {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  }

  // Debounced watcher on searchQuery to delay filtering until user stops typing for 300ms
  let searchTimeout: number | undefined;
  watch(searchQuery, (newQuery) => {
    if (searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = window.setTimeout(() => {
      if (newQuery) handleSearch();
    }, 300);
  });

  // Return reactive variables and handler functions for use in components
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
