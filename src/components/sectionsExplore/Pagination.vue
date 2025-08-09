<script lang="ts" setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}>();

const emit = defineEmits<{
  (e: "page-change", page: number): void;
}>();

const visiblePages = computed(() => {
  const delta = 2;
  const range: number[] = [];

  const start = Math.max(2, props.currentPage - delta);
  const end = Math.min(props.totalPages - 1, props.currentPage + delta);

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
});

const showFirstEllipsis = computed(() => props.currentPage > 4);
const showLastEllipsis = computed(() => props.currentPage < props.totalPages - 3);

function getPageButtonClass(page: number): string {
  const baseClass =
    "px-4 py-2 rounded-xl font-semibold transition-all duration-300 min-w-[44px]";
  if (props.currentPage === page) {
    return (
      baseClass +
      " bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 shadow-lg -translate-y-1"
    );
  }
  return (
    baseClass +
    " bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg hover:-translate-y-1"
  );
}

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

      <!-- First Page -->
      <button
        v-if="totalPages > 1"
        @click="changePage(1)"
        :class="getPageButtonClass(1)"
      >
        1
      </button>

      <!-- First Ellipsis -->
      <span v-if="showFirstEllipsis" class="text-black px-2 font-semibold"
        >...</span
      >

      <!-- Visible Pages -->
      <button
        v-for="page in visiblePages"
        :key="page"
        @click="changePage(page)"
        :class="getPageButtonClass(page)"
      >
        {{ page }}
      </button>

      <!-- Last Ellipsis -->
      <span v-if="showLastEllipsis" class="text-black px-2 font-semibold"
        >...</span
      >

      <!-- Last Page -->
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


