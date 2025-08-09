import { watch, onMounted, onBeforeUnmount } from "vue";
import type { Ref } from "vue";

export function useBodyScrollLock(isOpen: Ref<boolean>) {
  onMounted(() => {
    if (isOpen.value) {
      document.body.style.overflow = "hidden";
    }
  });

  onBeforeUnmount(() => {
    document.body.style.overflow = "auto";
  });

  watch(isOpen, (newVal) => {
    document.body.style.overflow = newVal ? "hidden" : "auto";
  });
}
