/**
 * Converts a languages object to a comma-separated string of language names.
 * @param languages - Optional object where keys are language codes and values are language names.
 * @returns A string of languages separated by commas, or "N/A" if none provided.
 */
export function getLanguages(languages?: Record<string, string>): string {
  if (!languages) return "N/A";
  return Object.values(languages).join(", ");
}

/**
 * Converts a currencies object to a comma-separated string of currency names with symbols.
 * @param currencies - Optional object where keys are currency codes and values include name and optional symbol.
 * @returns A string of currencies formatted as "Name (Symbol)", or "N/A" if none provided.
 */
export function getCurrencies(
  currencies?: Record<string, { name: string; symbol?: string }>
): string {
  if (!currencies) return "N/A";
  return Object.values(currencies)
    .map((currency) => `${currency.name} (${currency.symbol || "N/A"})`)
    .join(", ");
}

/**
 * Converts an array of timezone strings into a comma-separated string.
 * @param timezones - Optional array of timezone strings.
 * @returns A string of timezones separated by commas, or "N/A" if none provided.
 */
export function getTimezones(timezones?: string[]): string {
  if (!timezones || timezones.length === 0) return "N/A";
  return timezones.join(", ");
}

/**
 * Converts an array of capital cities into a comma-separated string.
 * @param capital - Optional array of capital city names.
 * @returns A string of capital cities separated by commas, or "N/A" if none provided.
 */
export function getCapital(capital?: string[]): string {
  if (!capital || capital.length === 0) return "N/A";
  return capital.join(", ");
}

/**
 * Formats a population number with commas as thousands separators.
 * @param population - Optional population number.
 * @returns A formatted population string, or "N/A" if no value provided.
 */
export function formatPopulation(population?: number): string {
  if (!population) return "N/A";
  return new Intl.NumberFormat().format(population);
}

/**
 * Handles image load errors by replacing the broken image with a fallback SVG.
 * @param event - The image load error event.
 */
export function handleImageError(event: Event) {
  const target = event.target as HTMLImageElement;
  target.src =
    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="60">🏳️</text></svg>';
}
