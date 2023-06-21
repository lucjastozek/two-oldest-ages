/**
 * Returns two highest numbers within the array
 * @param ages - array of numbers (ages)
 * @returns array of two highest numbers
 */
function twoOldestAges(ages: number[]): number[] {
  const arr = [...ages];
  arr.sort((a: number, b: number): number => b - a);

  return [arr[1], arr[0]];
}

export default twoOldestAges;
