import { getBoardConfig } from '../lib/getBoardConfig.js';
import { rendererBoard, renderSnake, clearBoard } from './renderer.js';
import { Snake } from './snake.js';
import { Controls } from './controls.js';
import { Food } from './food.js';
import { Collisions } from './collisions.js';
import { GAME_SPEED_MS, GAME_MESSAGES, SCORE } from '../lib/const.js';

let game = null;

function startGame() {
  const boardName = document.querySelector('#board-size').value;
  const boardConfig = getBoardConfig(boardName);

  if (game) {
    game.destroy();
  }

  game = new Game(boardConfig);
  game.initGame();
}

function updateScore(points = 1) {
  const scoreEl = document.getElementById('score');
  let score = parseInt(scoreEl.textContent, 10) || 0;
  score += points;
  scoreEl.textContent = score;

  const highScoreEl = document.getElementById('high-score');
  let highScore = parseInt(highScoreEl.textContent, 10) || 0;
  if (score > highScore) highScoreEl.textContent = score;
}

function showGameOverModal(reason, score) {
  const modal = document.getElementById('game-over-modal');
  const reasonEl = document.getElementById('game-over-reason');
  const scoreEl = document.getElementById('modal-final-score');

  reasonEl.textContent = reason;
  scoreEl.textContent = score;

  modal.showModal();
}

class Game {
  constructor(boardConfig) {
    this.boardConfig = boardConfig;
    this.snake = null;
    this.controls = null;
    this.gameLoop = null;
    this.cells = [];
    this.speed = GAME_SPEED_MS;
    this.food = null;
    this.collisions = null;
  }

  initGame() {
    if (this.gameLoop) {
      clearInterval(this.gameLoop);
    }

    const scoreEl = document.getElementById('score');
    scoreEl.textContent = SCORE.START.toString();

    this.cells = rendererBoard(this.boardConfig.cellsPerRow);
    this.snake = new Snake(this.boardConfig.boardCenter);
    this.food = new Food(this.boardConfig.cellsPerRow, this.snake);
    this.controls = new Controls(this.snake);
    this.collisions = new Collisions(this.snake, this.boardConfig);

    this.food.spawnAndRender(this.cells);
    renderSnake(this.snake, this.cells);

    this.gameLoop = setInterval(() => this.updateGame(), this.speed);
  }

  updateGame() {
    this.snake.move();

    if (this.collisions.checkGameOver()) {
      clearInterval(this.gameLoop);
      this.gameLoop = null;

      const reason = this.collisions.isWallCollision()
        ? GAME_MESSAGES.WALL_COLLISION
        : GAME_MESSAGES.SELF_COLLISION;
      const score = this.snake.body.length - SCORE.INITIAL_SNAKE_LENGTH;

      showGameOverModal(reason, score);
      return;
    }

    this.checkFoodCollision();
    this.render();
  }

  render() {
    clearBoard(this.cells);
    renderSnake(this.snake, this.cells);
    this.food.render(this.cells);
  }

  checkFoodCollision() {
    const food = this.food.position;

    if (this.snake.head.x === food.x && this.snake.head.y === food.y) {
      this.snake.grow();
      this.food.spawnAndRender(this.cells);
      updateScore(SCORE.INCREMENT);
    }
  }

  destroy() {
    if (this.gameLoop) {
      clearInterval(this.gameLoop);
      this.gameLoop = null;
    }

    this.controls?.destroy();
    this.controls = null;

    clearBoard(this.cells);
  }
}

document.querySelector('#start-btn').addEventListener('click', startGame);

document.querySelector('#restart-btn').addEventListener('click', () => {
  const modal = document.querySelector('#game-over-modal');
  modal.close();
  document.querySelector('#start-btn').click();
});
