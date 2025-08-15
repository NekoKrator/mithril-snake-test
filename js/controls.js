import { DIRECTION_MAP } from '../lib/const.js';

export class Controls {
  constructor(snake) {
    this.snake = snake;
    this.onKeyDown = this.onKeyDown.bind(this);
    document.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(event) {
    const direction = DIRECTION_MAP[event.code];

    if (!direction) {
      return;
    }

    event.preventDefault();
    this.snake.setDirection(direction);
  }

  destroy() {
    document.removeEventListener('keydown', this.onKeyDown);
  }
}
