export function getCellsPerRow(boardSize) {
  const sizeMap = { medium: 20, large: 30 };
  return sizeMap[boardSize] || sizeMap.medium;
}
