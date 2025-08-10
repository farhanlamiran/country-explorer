import { describe, it, expect } from "vitest";
import { getPageButtonClass } from "@/utils/paginationHelpers";

describe("getPageButtonClass", () => {
  const baseClass =
    "px-4 py-2 rounded-xl font-semibold transition-all duration-300 min-w-[44px]";

  it("mengembalikan class active jika page sama dengan currentPage", () => {
    const result = getPageButtonClass(2, 2);
    expect(result).toContain(baseClass);
    expect(result).toContain("bg-gradient-to-r from-yellow-400 to-yellow-500");
    expect(result).toContain("text-gray-800");
    expect(result).toContain("shadow-lg");
    expect(result).toContain("-translate-y-1");
  });

  it("mengembalikan class default jika page berbeda dengan currentPage", () => {
    const result = getPageButtonClass(1, 2);
    expect(result).toContain(baseClass);
    expect(result).toContain("bg-white/90 backdrop-blur-sm text-gray-700");
    expect(result).toContain("hover:bg-white");
    expect(result).toContain("hover:shadow-lg");
    expect(result).toContain("hover:-translate-y-1");
  });
});
