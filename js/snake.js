export class Snake {
  constructor(boardCenter) {
    this.direction = 'right';
    this.body = [
      { x: boardCenter.x, y: boardCenter.y },
      { x: boardCenter.x - 1, y: boardCenter.y },
      { x: boardCenter.x - 2, y: boardCenter.y },
    ];
  }

  move() {
    const head = this.body[0];
    let nextHead;

    switch (this.direction) {
      case 'up':
        nextHead = { x: head.x, y: head.y + 1 };
        break;
      case 'down':
        nextHead = { x: head.x, y: head.y - 1 };
        break;
      case 'left':
        nextHead = { x: head.x - 1, y: head.y };
        break;
      case 'right':
        nextHead = { x: head.x + 1, y: head.y };
    }

    this.body.unshift(nextHead);
    this.body.pop();
  }

  setDirection(newDirection) {
    const opposites = {
      up: 'down',
      down: 'up',
      left: 'right',
      right: 'left',
    };

    if (newDirection !== opposites[this.direction]) {
      this.direction = newDirection;
    }
  }

  grow() {
    const tail = this.body[this.body.length - 1];
    this.body.push({ x: tail.x, y: tail.y });
  }
}
