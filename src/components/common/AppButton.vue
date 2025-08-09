<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface Props {
  variant?: Variant
  size?: Size
  href?: string
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button'
})

const classes = computed(() => {
  const variants: Record<Variant, string> = {
    primary:
      'bg-yellow-500 hover:bg-yellow-600 text-black font-semibold',
    secondary:
      'bg-purple-600 hover:bg-purple-700 text-white font-semibold',
    outline:
      'border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-semibold'
  }

  const sizes: Record<Size, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return `${variants[props.variant]} ${sizes[props.size]} rounded-lg transition-all duration-300 transform hover:scale-105`
})
</script>

<template>
  <component :is="props.tag" :class="classes" :href="props.href">
    <slot></slot>
  </component>
</template>
