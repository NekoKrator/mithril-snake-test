export function getBoardConfig(boardSize) {
  const sizeMap = { medium: 20, large: 30 };
  const cellsPerRow = sizeMap[boardSize];

  const boardCenter = {
    x: Math.floor(cellsPerRow / 2),
    y: Math.floor(cellsPerRow / 2),
  };

  return { cellsPerRow, boardCenter };
}
