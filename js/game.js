import { getCellsPerRow } from '../lib/getCellsPerRow.js';
import { rendererBoard } from './renderer.js';

document.querySelector('#start-btn').addEventListener('click', () => {
  const boardSize = document.querySelector('#board-size').value;
  const cellsPerRow = getCellsPerRow(boardSize);

  rendererBoard(boardSize, cellsPerRow);
});
