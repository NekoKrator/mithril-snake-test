import { getBoardConfig } from '../lib/getBoardConfig.js';
import { rendererBoard, renderSnake, clearBoard } from './renderer.js';
import { Snake } from './snake.js';

document.querySelector('#start-btn').addEventListener('click', startGame);

function startGame() {
  const boardName = document.querySelector('#board-size').value;
  const boardConfig = getBoardConfig(boardName);

  const game = new Game(boardConfig);
  game.initGame();
}

class Game {
  constructor(boardConfig) {
    this.boardConfig = boardConfig;
    this.snake = null;
    this.gameLoop = null;
    this.cells = [];
  }

  initGame() {
    this.cells = rendererBoard(this.boardConfig.cellsPerRow);
    this.snake = new Snake(this.boardConfig.boardCenter);
    renderSnake(this.snake, this.cells);
    this.gameLoop = setInterval(() => {
      this.updateGame();
    }, 200);
  }

  updateGame() {
    this.snake.move();
    this.checkCollisions();
    clearBoard(this.cells);
    renderSnake(this.snake, this.cells);
  }

  checkCollisions() {}
}
