// helpers/paginationHelper.ts
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
