export const OPPOSITE_DIRECTIONS = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
};

export const CSS_CLASSES = {
  CELL: 'game-board__cell',
  HEAD: 'snake-head',
  BODY: 'snake-body',
  FOOD: 'food',
};

export const DIRECTION_MAP = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  KeyW: 'up',
  KeyS: 'down',
  KeyA: 'left',
  KeyD: 'right',
};

export const GAME_SPEED_MS = 200;

export const GAME_MESSAGES = {
  WALL_COLLISION: 'You hit the wall!',
  SELF_COLLISION: 'You hit yourself!',
};

export const SCORE = {
  START: 0,
  INCREMENT: 1,
  INITIAL_SNAKE_LENGTH: 3,
};
