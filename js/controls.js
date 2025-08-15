export class Controls {
  constructor(snake) {
    this.snake = snake;
    this.onKeyDown = this.onKeyDown.bind(this);
    document.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(event) {
    const directionMap = {
      ArrowUp: 'up',
      ArrowDown: 'down',
      ArrowLeft: 'left',
      ArrowRight: 'right',
      KeyW: 'up',
      KeyS: 'down',
      KeyA: 'left',
      KeyD: 'right',
    };

    const direction = directionMap[event.code];
    if (direction) {
      event.preventDefault();
      this.snake.setDirection(direction);
    }
  }

  destroy() {
    document.removeEventListener('keydown', this.onKeyDown);
  }
}
