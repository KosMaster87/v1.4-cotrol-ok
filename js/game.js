"use strict";

let canvas;
let world;
let keyboard = new Keyboard();
let isGameRunning = false;

/**
 * New World load the canvas in world.class.js
 * Also check first if it is a mobile device or another device.
 */
function initGame() {
  canvas = document.getElementById("canvas");
  startGame();
  world = new World(canvas, keyboard);
}
