import { isOnSnake } from '../lib/isOnSnake.js';

export class Collisions {
  constructor(snake, boardConfig) {
    this.snake = snake;
    this.cellsPerRow = boardConfig.cellsPerRow;
  }

  isWallCollision() {
    const head = this.snake.head;

    return (
      head.x < 0 ||
      head.x >= this.cellsPerRow ||
      head.y < 0 ||
      head.y >= this.cellsPerRow
    );
  }

  isSelfCollision() {
    const [head, ...body] = this.snake.body;

    return isOnSnake(head, { body: body });
  }

  checkGameOver() {
    return this.isWallCollision() || this.isSelfCollision();
  }
}
