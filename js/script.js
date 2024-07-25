"use strict";

function resetGlobals() {
  isGameRunning = false;
  world = null;
}

function startGame() {
  document.getElementById("startLayerForCanvas").style.display = "none";
  document.getElementById("buttonContainerSecond").style.display = "none";
  document.getElementById("canvasParent").style.display = "block";
  document.getElementById("canvas").style.display = "block";
  document.getElementById("buttonContainerThird").style.display = "flex";
  isGameRunning = true;
  startGameHandleInstructionPopUpSelf();
}

function restart() {
  let popUpRef = document.getElementById("instructionPopUpSelf");
  popUpRef.style.display = "none";
  document.getElementById("gameOverLayerForCanvas").style.display = "none";
  document.getElementById("gameIsWinningOverLayerForCanvas").style.display =
    "none";
  clearAllIntervals();
  resetGlobals();
  initGame();
}

function gameOver() {
  let popUpRef = document.getElementById("instructionPopUpSelf");
  popUpRef.style.display = "none";
  document.getElementById("canvas").style.display = "none";
  document.getElementById("gameOverLayerForCanvas").style.display = "block";
  isGameRunning = false;
  clearAllIntervals();
}

function winningGame() {
  let popUpRef = document.getElementById("instructionPopUpSelf");
  popUpRef.style.display = "none";
  document.getElementById("canvas").style.display = "none";
  document.getElementById("gameIsWinningOverLayerForCanvas").style.display =
    "block";
  isGameRunning = false;
  clearAllIntervals();
}

function returnToMenu() {
  clearAllIntervals();
  resetGlobals();
  document.getElementById("startLayerForCanvas").style.display = "block";
  document.getElementById("buttonContainerSecond").style.display = "flex";
  document.getElementById("canvasParent").style.display = "none";
  document.getElementById("canvas").style.display = "none";
  document.getElementById("buttonContainerThird").style.display = "none";
  returnToMenuHandleInstructionPopUpSelf();
}

function startGameHandleInstructionPopUpSelf() {
  let popUpRef = document.getElementById("instructionPopUpSelf");
  popUpRef.style.display = "none";

  let returnToMenuBtnRef = document.querySelectorAll(".returnToMenuBtn");
  returnToMenuBtnRef.forEach((button) => {
    button.style.display = "block";
  });

  let restartAfterGameOverBtnRef = document.querySelectorAll(
    ".restartAfterGameOverBtn"
  );
  restartAfterGameOverBtnRef.forEach((button) => {
    button.style.display = "block";
  });
}

function returnToMenuHandleInstructionPopUpSelf() {
  let popUpRef = document.getElementById("instructionPopUpSelf");
  popUpRef.style.display = "none";
  let returnToMenuBtnRef = document.querySelectorAll(".returnToMenuBtn");
  returnToMenuBtnRef.forEach((button) => {
    button.style.display = "none";
  });

  let restartAfterGameOverBtnRef = document.querySelectorAll(
    ".restartAfterGameOverBtn"
  );
  restartAfterGameOverBtnRef.forEach((button) => {
    button.style.display = "none";
  });
}

/**
 * Open the "instruction PopUp".
 */
function openInstructionPopUpSelf() {
  let popUp = document.getElementById("instructionPopUpSelf");

  if (popUp.style.display == "block") {
    popUp.style.display = "none";
    document.removeEventListener("click", closeInstructionPopUpSelf_outside);
  } else {
    popUp.style.display = "block";
    document.addEventListener("click", closeInstructionPopUpSelf_outside);
  }
}

/**
 * Close the "instruction PopUp" with an eventlistener and remove the eventlistener.
 */
function closeInstructionPopUpSelf_outside(event) {
  let popUp = document.getElementById("instructionPopUpSelf");
  let instructionBtn = document.getElementById("instructionPopUpButton");

  if (
    !isGameRunning &&
    !popUp.contains(event.target) &&
    event.target !== instructionBtn
  ) {
    popUp.style.display = "none";
    document.removeEventListener("click", closeInstructionPopUpSelf_outside);
  }
}

function closeInstructionPopUpSelf_manuel() {
  let popUpRef = document.getElementById("instructionPopUpSelf");
  popUpRef.style.display = "none";
}
