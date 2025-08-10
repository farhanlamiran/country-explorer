<script lang="ts" setup>
/**
 * Pagination Component
 *
 * Props:
 * - currentPage: The current active page number
 * - totalPages: Total number of pages available
 * - totalItems: Total number of items across all pages (optional, not used here)
 * - itemsPerPage: Number of items displayed per page (optional, not used here)
 *
 * Emits:
 * - "page-change": Emits the new page number when user navigates
 *
 * Functionality:
 * - Displays page buttons with previous, next, first, last pages.
 * - Shows ellipses ("...") when there are hidden pages in-between.
 * - Highlights the current active page.
 * - Limits visible page buttons around the current page with a delta of 2.
 */
import { computed, defineProps, defineEmits } from "vue";

// Define props with their types
const props = defineProps<{
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}>();

// Define the event emitter for page changes
const emit = defineEmits<{
  (e: "page-change", page: number): void;
}>();

// Compute the visible page numbers around the current page, with a delta of 2 pages each side
const visiblePages = computed(() => {
  const delta = 2;
  const range: number[] = [];

  // Calculate the start and end page indexes for the visible range
  const start = Math.max(2, props.currentPage - delta);
  const end = Math.min(props.totalPages - 1, props.currentPage + delta);
  // Populate the range array with page numbers
  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
});

// Determine whether to show ellipsis before visible pages (if currentPage > 4)
const showFirstEllipsis = computed(() => props.currentPage > 4);
// Determine whether to show ellipsis after visible pages (if currentPage < totalPages - 3)
const showLastEllipsis = computed(() => props.currentPage < props.totalPages - 3);

// Return CSS classes for page buttons based on whether they are active or not
function getPageButtonClass(page: number): string {
  const baseClass =
    "px-4 py-2 rounded-xl font-semibold transition-all duration-300 min-w-[44px]";
    // Active page button styles
  if (props.currentPage === page) {
    return (
      baseClass +
      " bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 shadow-lg -translate-y-1"
    );
  }
  // Inactive page button styles with hover effects
  return (
    baseClass +
    " bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg hover:-translate-y-1"
  );
}

// Handles changing the page when user clicks a button
// Prevents going outside page range or selecting the current page
function changePage(page: number) {
  if (page < 1 || page > props.totalPages || page === props.currentPage) return;
  emit("page-change", page);
}
</script>


<template>
  <div class="flex flex-col items-center gap-4 mt-12">


    <div class="flex items-center gap-2 flex-wrap justify-center">
      <!-- Previous Button -->
      <button
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-xl font-semibold hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        ← Prev
      </button>

      <!-- Always show First Page button if more than one page -->
      <button
        v-if="totalPages > 1"
        @click="changePage(1)"
        :class="getPageButtonClass(1)"
      >
        1
      </button>

      <!-- Show Ellipsis before visible pages if necessary -->
      <span v-if="showFirstEllipsis" class="text-black px-2 font-semibold"
        >...</span
      >

      <!-- Render visible page buttons around current page -->
      <button
        v-for="page in visiblePages"
        :key="page"
        @click="changePage(page)"
        :class="getPageButtonClass(page)"
      >
        {{ page }}
      </button>

      <!-- Show Ellipsis after visible pages if necessary -->
      <span v-if="showLastEllipsis" class="text-black px-2 font-semibold"
        >...</span
      >

      <!-- Show Last Page button if it isn't already visible or adjacent -->
      <button
        v-if="totalPages > 1 && currentPage < totalPages - 1"
        @click="changePage(totalPages)"
        :class="getPageButtonClass(totalPages)"
      >
        {{ totalPages }}
      </button>

      <!-- Next Button -->
      <button
        @click="changePage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-xl font-semibold hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        Next →
      </button>
    </div>
  </div>
</template>


