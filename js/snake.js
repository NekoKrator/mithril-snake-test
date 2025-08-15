import { OPPOSITE_DIRECTIONS } from '../lib/const.js';

export class Snake {
  constructor(boardCenter) {
    this.direction = 'right';
    this.body = [
      { x: boardCenter.x, y: boardCenter.y, type: 'head', dir: 'right' },
      { x: boardCenter.x - 1, y: boardCenter.y, type: 'body', dir: 'right' },
      { x: boardCenter.x - 2, y: boardCenter.y, type: 'tail', dir: 'right' },
    ];
  }

  move() {
    const head = this.head;
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

    head.type = 'body';
    head.dir = this.direction;

    this.body.unshift(nextHead);
    this.body.pop();
  }

  getDirection(from, to) {
    if (from.x === to.x) {
      return from.y > to.y ? 'up' : 'down';
    }

    if (from.y === to.y) {
      return from.x > to.x ? 'left' : 'right';
    }
  }

  setDirection(newDirection) {
    if (newDirection !== OPPOSITE_DIRECTIONS[this.direction]) {
      this.direction = newDirection;
    }
  }

  grow() {
    const tail = this.body[this.body.length - 1];
    this.body.push({ x: tail.x, y: tail.y });
  }

  get head() {
    return this.body[0];
  }
}
