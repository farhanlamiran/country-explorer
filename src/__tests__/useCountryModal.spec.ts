import { describe, it, expect } from 'vitest'
import { useCountryModal } from '@/composables/useCountryModal'

const mockCountry = {
  name: { common: 'Testland', official: 'The Testland Republic' },
  region: 'Test Region',
  subregion: 'Test Subregion',
  // add any other required fields of ICountry if needed
}

describe('useCountryModal', () => {
  it('initial state should have null selectedCountry and showModal false', () => {
    const { selectedCountry, showModal } = useCountryModal()
    expect(selectedCountry.value).toBeNull()
    expect(showModal.value).toBe(false)
  })

  it('showCountryDetails sets selectedCountry and opens modal', () => {
    const { selectedCountry, showModal, showCountryDetails } = useCountryModal()

    showCountryDetails(mockCountry)

    expect(selectedCountry.value).toEqual(mockCountry)
    expect(showModal.value).toBe(true)
  })

  it('closeModal clears selectedCountry and closes modal', () => {
    const { selectedCountry, showModal, showCountryDetails, closeModal } = useCountryModal()

    showCountryDetails(mockCountry)
    expect(showModal.value).toBe(true)

    closeModal()

    expect(selectedCountry.value).toBeNull()
    expect(showModal.value).toBe(false)
  })
})
