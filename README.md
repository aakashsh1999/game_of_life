**The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.**

This React implementation of the Game of Life provides a visual representation of the cellular automaton's evolution based on a set of rules.
Installation

    Clone the repository to your local machine:

bash

**git clone https://github.com/aakashsh1999/game-of-life.git**

    Navigate into the project directory:

bash

cd game-of-life

    Install dependencies:

bash

**npm install**

Usage

To start the Game of Life, run the following command:

bash

**npm start**

This will start the development server and open the Game of Life in your default web browser.
Features

    Interactive Grid: Click to toggle cells on/off.
    Customizable Grid Size: Choose the size of the grid to fit your preferences.
    Start/Stop Button: Control the evolution of the Game of Life with a start/stop button.
    Speed Control: Adjust the speed of evolution to observe patterns at different rates.
    Randomize: Randomly populate the grid with live cells.
    Clear: Clear the grid to start with a blank canvas.
    Responsive Design: The game interface is designed to be responsive and work well on various screen sizes.
**
Rules**

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent.

At each step in time, the following transitions occur:

    Any live cell with fewer than two live neighbors dies, as if by underpopulation.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by overpopulation.
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

**Credits**

    This project is developed using React.js.
    Created by Akash Sharma
