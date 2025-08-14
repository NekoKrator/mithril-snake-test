export class Controls {
  constructor(snake) {
    this.snake = snake;
    document.addEventListener('keydown', (e) => this.handleDirectionInput(e));
  }

  handleDirectionInput(event) {
    const code = event.code;

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

    const direction = directionMap[code];

    if (direction) {
      event.preventDefault();
      this.snake.setDirection(direction);
    }
  }
}
