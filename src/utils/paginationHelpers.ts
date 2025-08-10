/**
 * Returns the CSS class string for a pagination button based on whether it is the current active page.
 *
 * @param page - The page number for the button.
 * @param currentPage - The currently active page number.
 * @returns A string containing the combined CSS classes for the button.
 *
 * - If the button corresponds to the current page, it includes active styles such as a yellow gradient background,
 *   darker text, shadow, and a slight upward translation.
 * - Otherwise, it applies default styles with semi-transparent white background, blur effect, gray text, and
 *   hover effects for background, shadow, and translation.
 */
export function getPageButtonClass(
  page: number,
  currentPage: number
): string {
  const baseClass =
    "px-4 py-2 rounded-xl font-semibold transition-all duration-300 min-w-[44px]";
  if (currentPage === page) {
    return (
      baseClass +
      " bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 shadow-lg -translate-y-1"
    );
  }
  return (
    baseClass +
    " bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg hover:-translate-y-1"
  );
}
