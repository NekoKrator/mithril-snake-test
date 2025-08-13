export function rendererBoard(boardSize, cellsPerRow) {
  const boardElement = document.querySelector('#game-board');
  boardElement.innerHTML = '';

  const totalCells = cellsPerRow * cellsPerRow;

  boardElement.style.display = 'grid';
  boardElement.style.gridTemplateColumns = `repeat(${cellsPerRow}, 1fr)`;
  boardElement.style.gridTemplateRows = `repeat(${cellsPerRow}, 1fr)`;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('game-board__cell');
    boardElement.appendChild(cell);
  }
}
