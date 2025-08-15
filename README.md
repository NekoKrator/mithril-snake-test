# Snake Game — Mithril Development Test Task

## 1. Project Overview

A minimalist Snake Game built as part of a frontend internship test task.
Focused on clean architecture, modularity, and fail-safe logic.

## 2. Features

- Dynamic board size (**20×20** or **30×30**)
- Responsive UI with soft green tones
- Fail-safe logic for collisions and input
- Score and high-score tracking
- Keyboard and mobile controls

## 3. Architecture Notes

The project emphasizes separation of concerns and modularity.
Game logic, rendering, and configuration are split into dedicated modules.
The board is dynamically generated based on selected size, and the snake is rendered using CSS classes with visual layering.

## 4. What I Learned

This was my first experience applying **class-based architecture** in a real project.
It’s an excellent way to understand **classes** and **OOP principles** because Snake clearly separates objects _(snake, food, game board)_, their state, and behavior — vividly demonstrating **encapsulation**, **abstraction**, and architectural basics.
Even the simple logic of moving and growing the snake shows how objects interact and how classes help keep the code clean and maintainable.
While implementing the game, I also analyzed other developers’ implementations of Snake and adapted the best practices I found — refining them to fit my minimalist, modular approach.

## 5. Potential Improvements

- **Texture-based snake body segmentation**
  Add subtle textures or patterns to snake segments for improved visual clarity and style.

- **Advanced win condition**
  Introduce a victory check when the board is completely filled by the snake, with a score metric for "maximum field completion".

- **Variable game speed**
  Gradually increase the snake's speed as it grows, making gameplay more challenging over time.

## 6. Live Demo

The project is deployed on **GitHub Pages** and available here:
[mithril-snake-test by NekoKrator](https://nekokrator.github.io/mithril-snake-test/)

Simply open the link in your browser to start playing.

### Task Context

This project was developed as a **technical test assignment** for a frontend internship.
The goal was to implement a classic **Snake Game** in the browser using **HTML**, **CSS**, and **JavaScript**.

**Key requirements included:**

- Snake movement via keyboard
- Apple consumption and snake growth
- Game over on collision with walls or self
- Score tracking and restart functionality
- Minimalist UI and responsive design

All features were implemented within the given **72-hour timeframe**.
