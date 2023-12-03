/**
 * This function returns the index of the last element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1.
 *
 * @param {Array} array - The array to search.
 * @param {Function} predicate - The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] - The index to start searching from.
 * @returns The index of the found element, else -1.
 */
export default function findLastIndex(
  array,
  predicate,
  fromIndex = array.length - 1
) {
  const indexToStartFrom =
    fromIndex > array.length - 1
      ? array.length - 1
      : fromIndex < 0
      ? array.length + fromIndex
      : fromIndex;

  for (let i = indexToStartFrom; i > -1; i--) {
    if (predicate(array[i])) {
      return i;
    }
  }

  return -1;
}
