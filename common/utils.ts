export function createArrayOfNumbers(
  n: number,
  startFrom: number = 0
): Array<number> {
  if (startFrom > 0) {
    n = n + startFrom;
    return Array.from(Array(n).keys()).slice(startFrom);
  }
  return Array.from(Array(n).keys());
}
