export function getCellIndex(x, y, cellsPerRow) {
  const invertedY = cellsPerRow - 1 - y;
  return invertedY * cellsPerRow + x;
}
