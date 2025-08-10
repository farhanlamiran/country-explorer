import type { ICountry } from '../types'; // Import the ICountry type definition

/**
 * Fetches a list of countries from the REST Countries API.
 *
 * The function:
 * 1. Requests only the required fields to minimize payload size.
 * 2. Throws an error if the request fails.
 * 3. Parses the response into a strongly typed `ICountry[]`.
 * 4. Sorts the countries alphabetically by their common name.
 *
 * @returns {Promise<ICountry[]>} A promise that resolves to an array of country objects.
 * @throws {Error} If the HTTP request fails or returns a non-OK status.
 *
 * @example
 * fetchCountries()
 *   .then(countries => console.log(countries))
 *   .catch(error => console.error(error));
 */
export async function fetchCountries(): Promise<ICountry[]> {
  // Define which fields to fetch for each country to reduce data transfer
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

  // Make an API request to fetch country data
  const response = await fetch(
    `https://restcountries.com/v3.1/all?fields=${fields.join(",")}`
  );

  // If the request failed, throw an error
  if (!response.ok) {
    throw new Error("Failed to fetch countries data");
  }

  // Parse the JSON response into the expected data type
  const data: ICountry[] = await response.json();

  // Sort countries alphabetically by their common name
  data.sort((a, b) => a.name.common.localeCompare(b.name.common));

  return data;
}
