export function isOnSnake(pos, snake) {
  return snake.body.some(
    (segment) => segment.x === pos.x && segment.y === pos.y
  );
}
