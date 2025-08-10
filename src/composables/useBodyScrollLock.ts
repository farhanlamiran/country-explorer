import { watch, onMounted, onBeforeUnmount } from "vue";
import type { Ref } from "vue";

/**
 * Composable to lock and unlock the body scroll based on a reactive boolean value.
 *
 * When `isOpen` is true, body scroll is disabled by setting `overflow: hidden`.
 * When `isOpen` is false, body scroll is restored by setting `overflow: auto`.
 *
 * Useful for modals, sidebars, or any overlay UI where background scrolling should be prevented.
 *
 * @param isOpen - A reactive Ref<boolean> that controls whether the body scroll is locked.
 */
export function useBodyScrollLock(isOpen: Ref<boolean>) {
  // Lock scroll immediately when component is mounted and isOpen is true
  onMounted(() => {
    if (isOpen.value) {
      document.body.style.overflow = "hidden";
    }
  });

  // Ensure scroll is restored when component unmounts
  onBeforeUnmount(() => {
    document.body.style.overflow = "auto";
  });

  // Watch for changes in isOpen and toggle scroll lock accordingly
  watch(isOpen, (newVal) => {
    document.body.style.overflow = newVal ? "hidden" : "auto";
  });
}
