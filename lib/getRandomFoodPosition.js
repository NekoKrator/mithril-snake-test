import { isOnSnake } from './isOnSnake.js';

export function getRandomIndex(limit) {
  return Math.floor(Math.random() * limit);
}

export function getRandomFoodPosition(cellsPerRow, snake) {
  let x, y, pos;

  do {
    x = getRandomIndex(cellsPerRow);
    y = getRandomIndex(cellsPerRow);
    pos = { x, y };
  } while (isOnSnake(pos, snake));

  return pos;
}
