import { ref } from 'vue';
import type { ICountry } from '@/types';

/**
 * Composable to manage the state and behavior of a country details modal.
 *
 * Provides reactive references for the currently selected country and
 * the visibility state of the modal, along with functions to open and close the modal.
 *
 * Usage:
 * - Call `showCountryDetails(country)` to open the modal and set the selected country.
 * - Call `closeModal()` to hide the modal and reset the selected country.
 *
 * @returns
 * - selectedCountry: Ref<ICountry | null> — holds the currently selected country or null.
 * - showModal: Ref<boolean> — tracks whether the modal is visible.
 * - showCountryDetails: Function — opens the modal with a given country.
 * - closeModal: Function — closes the modal and clears the selection.
 */
export function useCountryModal() {
  // Reactive reference to store the currently selected country or null if none selected
  const selectedCountry = ref<ICountry | null>(null);

  // Reactive reference to track modal visibility state
  const showModal = ref(false);

  /**
   * Opens the country details modal and sets the selected country.
   * @param country - The country object to display in the modal.
   */
  function showCountryDetails(country: ICountry) {
    selectedCountry.value = country;
    showModal.value = true;
  }

  /**
   * Closes the country details modal and clears the selected country.
   */
  function closeModal() {
    showModal.value = false;
    selectedCountry.value = null;
  }

  // Expose reactive references and functions for external use
  return {
    selectedCountry,
    showModal,
    showCountryDetails,
    closeModal,
  };
}
