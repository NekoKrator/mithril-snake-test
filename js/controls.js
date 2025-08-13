export class Controls {
  constructor(snake) {
    this.snake = snake;
    document.addEventListener('keydown', (e) => this.handleDirectionInput(e));
  }

  handleDirectionInput(event) {
    const directionMap = {
      ArrowUp: 'up',
      ArrowDown: 'down',
      ArrowLeft: 'left',
      ArrowRight: 'right',
      w: 'up',
      s: 'down',
      a: 'left',
      d: 'right',
    };

    const direction = directionMap[event.key].toLowerCase();

    if (direction) {
      event.preventDefault();
      this.snake.setDirection(direction);
    }
  }
}
