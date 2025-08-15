import { getRandomFoodPosition } from '../lib/getRandomFoodPosition.js';
import { getCellIndex } from '../lib/getCellIndex.js';
import { CSS_CLASSES } from '../lib/const.js';

const { FOOD } = CSS_CLASSES;

export class Food {
  constructor(cellsPerRow, snake) {
    this.cellsPerRow = cellsPerRow;
    this.snake = snake;
    this.position = null;
  }

  getCellIndex() {
    if (!this.position) return -1;
    return getCellIndex(this.position.x, this.position.y, this.cellsPerRow);
  }

  render(cells) {
    const index = this.getCellIndex();
    if (index < 0 || index >= cells.length) return;
    cells[index].classList.add(FOOD);
  }

  clear(cells) {
    const index = this.getCellIndex();
    if (index >= 0 && index < cells.length) {
      cells[index].classList.remove(FOOD);
    }
  }

  spawnAndRender(cells) {
    if (this.position) this.clear(cells);
    this.position = getRandomFoodPosition(this.cellsPerRow, this.snake);
    this.render(cells);
  }
}
