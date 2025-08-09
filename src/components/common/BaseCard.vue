<template>
  <div
    :class="cardClasses"
    class="bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300"
  >
    <div class="p-6">
      <div v-if="icon || title" class="flex items-center mb-4">
        <span v-if="icon" class="text-2xl mr-3">{{ icon }}</span>
        <h3 v-if="title" class="text-xl font-semibold text-gray-900">
          {{ title }}
        </h3>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

/**
 * BaseCard Component
 * A flexible card component for content display
 *
 * @component
 * @example
 * <BaseCard title="Card Title" icon="🎯" hoverable>
 *   <p>Card content goes here</p>
 * </BaseCard>
 */

interface Props {
  title?: string;
  icon?: string;
  hoverable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  hoverable: false,
});

/**
 * Dynamic card classes based on props
 */
const cardClasses = computed(() => ({
  'hover:shadow-lg hover:-translate-y-1 cursor-pointer': props.hoverable,
}));
</script>
