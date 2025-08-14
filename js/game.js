import { getBoardConfig } from '../lib/getBoardConfig.js';
import { rendererBoard, renderSnake, clearBoard } from './renderer.js';
import { Snake } from './snake.js';
import { Controls } from './controls.js';
import { Food } from './food.js';
import { Collisions } from './collisions.js';

function startGame() {
  const boardName = document.querySelector('#board-size').value;
  const boardConfig = getBoardConfig(boardName);
  const game = new Game(boardConfig);
  game.initGame();
}

function updateScore(points = 10) {
  const scoreEl = document.getElementById('score');
  let score = parseInt(scoreEl.textContent, 10) || 0;
  score += points;
  scoreEl.textContent = score;

  const highScoreEl = document.getElementById('high-score');
  let highScore = parseInt(highScoreEl.textContent, 10) || 0;
  if (score > highScore) highScoreEl.textContent = score;
}

class Game {
  constructor(boardConfig) {
    this.boardConfig = boardConfig;
    this.snake = null;
    this.controls = null;
    this.gameLoop = null;
    this.cells = [];
    this.speed = 200;
    this.food = null;
    this.collisions = null;
  }

  initGame() {
    if (this.gameLoop) {
      clearInterval(this.gameLoop);
    }

    const scoreEl = document.getElementById('score');
    scoreEl.textContent = '0';

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
      alert(`Game Over! Ваш счёт: ${this.snake.body.length - 3}`);
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
    const head = this.snake.body[0];
    const food = this.food.position;

    if (head.x === food.x && head.y === food.y) {
      this.snake.grow();
      this.food.spawnAndRender(this.cells);
      updateScore(10);
    }
  }
}

document.querySelector('#start-btn').addEventListener('click', startGame);
