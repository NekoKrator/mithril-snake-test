import { getCellIndex } from '../lib/getCellIndex.js';

export function rendererBoard(cellsPerRow) {
  const boardElement = document.querySelector('#game-board');
  boardElement.innerHTML = '';

  const totalCells = cellsPerRow * cellsPerRow;
  const cells = [];

  const cellSize = 20; // px
  const boardSize = cellsPerRow * cellSize;
  boardElement.style.width = `${boardSize}px`;
  boardElement.style.height = `${boardSize}px`;

  boardElement.style.display = 'grid';
  boardElement.style.gridTemplateColumns = `repeat(${cellsPerRow}, 1fr)`;
  boardElement.style.gridTemplateRows = `repeat(${cellsPerRow}, 1fr)`;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('game-board__cell');
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
      cell.classList.add('snake-head');
    } else {
      cell.classList.add('snake-body');
    }
  }
}

export function clearSnake(cells) {
  for (const cell of cells) {
    cell.classList.remove('snake-head', 'snake-body');
  }
}

export function clearBoard(cells) {
  for (const cell of cells) {
    cell.classList.remove('snake-head', 'snake-body', 'food');
  }
}

export function updateSnakeOnBoard(snake, cells, boardConfig) {
  const tail = snake.body[snake.body.length - 1];
  const tailIndex = getCellIndex(tail.x, tail.y, boardConfig.cellsPerRow);
  if (tailIndex >= 0 && tailIndex < cells.length) {
    cells[tailIndex].classList.remove('snake-body', 'snake-head');
  }

  const head = snake.body[0];
  const headIndex = getCellIndex(head.x, head.y, boardConfig.cellsPerRow);
  if (headIndex >= 0 && headIndex < cells.length) {
    cells[headIndex].classList.add('snake-head');
  }

  if (snake.body.length > 1) {
    const prevHead = snake.body[1];
    const prevHeadIndex = getCellIndex(
      prevHead.x,
      prevHead.y,
      boardConfig.cellsPerRow
    );
    if (prevHeadIndex >= 0 && prevHeadIndex < cells.length) {
      cells[prevHeadIndex].classList.remove('snake-head');
      cells[prevHeadIndex].classList.add('snake-body');
    }
  }
}
