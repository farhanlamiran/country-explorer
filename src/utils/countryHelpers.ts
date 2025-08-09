export function getLanguages(languages?: Record<string, string>): string {
  if (!languages) return "N/A";
  return Object.values(languages).join(", ");
}

export function getCurrencies(
  currencies?: Record<string, { name: string; symbol?: string }>
): string {
  if (!currencies) return "N/A";
  return Object.values(currencies)
    .map((currency) => `${currency.name} (${currency.symbol || "N/A"})`)
    .join(", ");
}

export function getTimezones(timezones?: string[]): string {
  if (!timezones || timezones.length === 0) return "N/A";
  return timezones.join(", ");
}

export function getCapital(capital?: string[]): string {
  if (!capital || capital.length === 0) return "N/A";
  return capital.join(", ");
}

export function formatPopulation(population?: number): string {
  if (!population) return "N/A";
  return new Intl.NumberFormat().format(population);
}

export function handleImageError(event: Event) {
  const target = event.target as HTMLImageElement;
  target.src =
    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="60">🏳️</text></svg>';
}
