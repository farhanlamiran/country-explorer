import type { ICountry } from '../types'; // kalau ada type ICountry

export async function fetchCountries(): Promise<ICountry[]> {
  const fields = [
    "name",
    "flags",
    "region",
    "subregion",
    "population",
    "languages",
    "currencies",
    "timezones",
    "capital",
    "maps",
  ];

  const response = await fetch(
    `https://restcountries.com/v3.1/all?fields=${fields.join(",")}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries data");
  }

  const data: ICountry[] = await response.json();
  data.sort((a, b) => a.name.common.localeCompare(b.name.common));

  return data;
}
