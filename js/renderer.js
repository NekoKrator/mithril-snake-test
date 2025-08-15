import { getCellIndex } from '../lib/getCellIndex.js';
import { CSS_CLASSES } from '../lib/const.js';

const { CELL, HEAD, BODY, FOOD } = CSS_CLASSES;

export function rendererBoard(cellsPerRow) {
  const boardElement = document.querySelector('#game-board');
  boardElement.innerHTML = '';
  const totalCells = cellsPerRow * cellsPerRow;
  const cells = [];

  boardElement.style.setProperty('--cells-per-row', cellsPerRow);

  boardElement.style.gridTemplateColumns = `repeat(${cellsPerRow}, 1fr)`;
  boardElement.style.gridTemplateRows = `repeat(${cellsPerRow}, 1fr)`;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add(CELL);
    boardElement.appendChild(cell);
    cells.push(cell);
  }

  return cells;
}

export function renderSnake(snake, cells) {
  const cellsPerRow = Math.sqrt(cells.length);

  for (let i = 0; i < snake.body.length; i++) {
    const segment = snake.body[i];

    /**
     * У цьому проєкті, як і в класичній змійці, я використовував математичну модель координат, де точка (0, 0) знаходиться в лівому нижньому куті,
     * а вісь Y зростає вгору
     *
     * У браузері (DOM) ситуація протилежна: точка (0, 0) - це лівий верхній кут, і вісь Y зростає вниз
     *
     * Приклад 3х3 матриці:
     *
     * 1. Математична логіка (модель гри):
     *
     * Y
     * 2 | (0,2)(1,2)(2,2)
     * 1 | (0,1)(1,1)(2,1)
     * 0 | (0,0)(1,0)(2,0) X
     *
     * 2. DOM (відображення в браузері):
     *
     * Y
     * 0 | (0,0)(1,0)(2,0)
     * 1 | (0,1)(1,1)(2,1)
     * 2 | (0,2)(1,2)(2,2) X
     *
     * Тому для коректного рендерингу координату Y потрібно інвертувати
     */

    const index = getCellIndex(segment.x, segment.y, cellsPerRow);

    if (index < 0 || index >= cells.length) continue;

    const cell = cells[index];

    if (i === 0) {
      cell.classList.add(HEAD);
    } else {
      cell.classList.add(BODY);
    }
  }
}

export function clearSnake(cells) {
  for (const cell of cells) {
    cell.classList.remove(HEAD, BODY);
  }
}

export function clearBoard(cells) {
  for (const cell of cells) {
    cell.classList.remove(HEAD, BODY, FOOD);
  }
}
