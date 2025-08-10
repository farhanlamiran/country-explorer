import { ref } from 'vue';
import type { ICountry } from '@/types';

export function useCountryModal() {
  const selectedCountry = ref<ICountry | null>(null);
  const showModal = ref(false);

  function showCountryDetails(country: ICountry) {
    selectedCountry.value = country;
    showModal.value = true;
  }

  function closeModal() {
    showModal.value = false;
    selectedCountry.value = null;
  }

  return {
    selectedCountry,
    showModal,
    showCountryDetails,
    closeModal,
  };
}
