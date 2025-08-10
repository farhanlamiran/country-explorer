import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { fetchCountries } from '@/api/countryService';
import type { ICountry } from '@/types';

describe('fetchCountries', () => {
  const mockCountries: ICountry[] = [
    {
      name: { common: 'Zeta', official: 'Zeta Republic' },
      flags: { png: '', svg: '' },
      region: 'Region Z',
      subregion: 'Subregion Z',
      population: 5000,
      languages: { en: 'English' },
      currencies: { ZET: { name: 'Zeta Dollar', symbol: 'Z$' } },
      timezones: ['UTC+01:00'],
      capital: ['Zetaville'],
      maps: { googleMaps: '' }
    },
    {
      name: { common: 'Alpha', official: 'Alpha Kingdom' },
      flags: { png: '', svg: '' },
      region: 'Region A',
      subregion: 'Subregion A',
      population: 10000,
      languages: { en: 'English' },
      currencies: { ALP: { name: 'Alpha Pound', symbol: 'A£' } },
      timezones: ['UTC+00:00'],
      capital: ['Alphaville'],
      maps: { googleMaps: '' }
    }
  ];

  beforeEach(() => {
    // Mock the global fetch function with vitest's vi.fn()
    global.fetch = vi.fn();
  });

  afterEach(() => {
    // Reset all mocks to clean state
    vi.resetAllMocks();
  });

  it('should fetch and return sorted countries by common name', async () => {
    // Mock fetch response to return mockCountries successfully
    (global.fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCountries,
    });

    const result = await fetchCountries();

    // Check fetch called with correct URL
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://restcountries.com/v3.1/all')
    );

    // Check countries are sorted by name.common (Alpha, Zeta)
    expect(result[0].name.common).toBe('Alpha');
    expect(result[1].name.common).toBe('Zeta');
  });

  it('should throw an error when fetch response is not ok', async () => {
    // Mock fetch response with not-ok status
    (global.fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
    });

    // Expect fetchCountries to reject with specific error
    await expect(fetchCountries()).rejects.toThrow('Failed to fetch countries data');
  });
});
