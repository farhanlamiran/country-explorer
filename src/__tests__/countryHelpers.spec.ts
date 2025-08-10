import { describe, it, expect } from "vitest";

import {
  getLanguages,
  getCurrencies,
  getTimezones,
  getCapital,
  formatPopulation,
  handleImageError,
} from "@/utils/countryHelpers";

describe("countryHelpers", () => {
  describe("getLanguages", () => {
    it("returns 'N/A' if no languages provided", () => {
      expect(getLanguages()).toBe("N/A");
    });

    it("joins multiple languages with comma", () => {
      expect(getLanguages({ en: "English", fr: "French" })).toBe("English, French");
    });
  });

  describe("getCurrencies", () => {
    it("returns 'N/A' if no currencies provided", () => {
      expect(getCurrencies()).toBe("N/A");
    });

    it("formats currencies with symbol", () => {
      expect(
        getCurrencies({
          USD: { name: "United States dollar", symbol: "$" },
          EUR: { name: "Euro", symbol: "€" },
        })
      ).toBe("United States dollar ($), Euro (€)");
    });

    it("uses 'N/A' if symbol is missing", () => {
      expect(getCurrencies({ IDR: { name: "Rupiah" } })).toBe("Rupiah (N/A)");
    });
  });

  describe("getTimezones", () => {
    it("returns 'N/A' if no timezones provided", () => {
      expect(getTimezones()).toBe("N/A");
    });

    it("joins timezones with comma", () => {
      expect(getTimezones(["UTC+7", "UTC+8"])).toBe("UTC+7, UTC+8");
    });
  });

  describe("getCapital", () => {
    it("returns 'N/A' if no capital provided", () => {
      expect(getCapital()).toBe("N/A");
    });

    it("joins capitals with comma", () => {
      expect(getCapital(["Jakarta", "Bogor"])).toBe("Jakarta, Bogor");
    });
  });

  describe("formatPopulation", () => {
    it("returns 'N/A' if no population provided", () => {
      expect(formatPopulation()).toBe("N/A");
    });

    it("formats number with commas", () => {
      expect(formatPopulation(1000000)).toBe("1,000,000");
    });
  });

  describe("handleImageError", () => {
    it("sets image src to fallback SVG on error", () => {
      const img = document.createElement("img");
      const event = new Event("error");
      Object.defineProperty(event, "target", { value: img });

      handleImageError(event);

      expect(img.src).toContain("data:image/svg+xml");
    });
  });
});
