"use strict";

function resetGlobals() {
  isGameRunning = false;
  world = null;
}

function startGame() {
  document.getElementById("startScreenImage").style.display = "none";
  document.getElementById("buttonContainerFirst").style.display = "none";
  document.getElementById("customH1").style.display = "none";
  document.getElementById("canvas").style.display = "block";
  document.getElementById("buttonContainerThird").style.display = "flex";
  document.getElementById("Overlayer").classList.add("Overlayer_beginn");
  document
    .getElementById("instructionPopUpSelf_inGame")
    .classList.add("instructionPopUpSelf_inGame");
  isGameRunning = true;
  checkWidth();
}

function restart() {
  let popUpRef = document.getElementById("instructionPopUpSelf_inGame");
  popUpRef.style.display = "none";
  document.getElementById("gameOverLayerForCanvas").style.display = "none";
  document.getElementById("gameIsWinningOverLayerForCanvas").style.display =
    "none";
  clearAllIntervals();
  resetGlobals();
  initGame();
}

function gameOver() {
  let popUpRef = document.getElementById("instructionPopUpSelf_inGame");
  popUpRef.style.display = "none";
  document.getElementById("canvas").style.display = "none";
  document.getElementById("gameOverLayerForCanvas").style.display = "block";
  isGameRunning = false;
  clearAllIntervals();
}

function winningGame() {
  let popUpRef = document.getElementById("instructionPopUpSelf_inGame");
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
  document.getElementById("startScreenImage").style.display = "block";
  document.getElementById("buttonContainerFirst").style.display = "flex";
  document.getElementById("customH1").style.display = "block";
  document.getElementById("canvas").style.display = "none";
  document.getElementById("buttonContainerThird").style.display = "none";
  document.getElementById("Overlayer").classList.remove("Overlayer_beginn");
  returnToMenu_handle_instructionPopUpSelf_inGame();
}

function returnToMenu_handle_instructionPopUpSelf_inGame() {
  let popUpRef = document.getElementById("instructionPopUpSelf_inGame");
  popUpRef.style.display = "none";
  checkWidth();
}

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

function openInstructionPopUpSelf_inMenu() {
  document.getElementById("buttonContainerFirst").style.display = "none";
  let popUp = document.getElementById("instructionPopUpSelf_inMenu");

  if (popUp.style.display === "block") {
    popUp.style.display = "none";
    document.removeEventListener(
      "click",
      closeInstructionPopUpSelf_outside_inMenu
    );
  } else {
    popUp.style.display = "block";
    document.addEventListener(
      "click",
      closeInstructionPopUpSelf_outside_inMenu
    );
  }
}

function closeInstructionPopUpSelf_outside_inMenu(event) {
  let popUp = document.getElementById("instructionPopUpSelf_inMenu");

  if (
    !isGameRunning &&
    !popUp.contains(event.target) &&
    event.target !== instructionPopUpButton
  ) {
    document.getElementById("buttonContainerFirst").style.display = "flex";
    popUp.style.display = "none";
    document.removeEventListener(
      "click",
      closeInstructionPopUpSelf_outside_inMenu
    );
  }
}

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

function openInstructionPopUpSelf_inGame() {
  let popUp = document.getElementById("instructionPopUpSelf_inGame");

  if (popUp.style.display === "block") {
    popUp.style.display = "none";
    document.removeEventListener(
      "click",
      closeInstructionPopUpSelf_outside_inGame
    );
  } else {
    popUp.style.display = "block";
    document.addEventListener(
      "click",
      closeInstructionPopUpSelf_outside_inGame
    );
  }
}

function closeInstructionPopUpSelf_outside_inGame(event) {
  let popUp = document.getElementById("instructionPopUpSelf_inGame");

  if (
    isGameRunning &&
    !popUp.contains(event.target) &&
    event.target !== quikInstructionBtn
  ) {
    document.getElementById("buttonContainerFirst").style.display = "none";
    popUp.style.display = "none";
    document.removeEventListener(
      "click",
      closeInstructionPopUpSelf_outside_inGame
    );
  }
}
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

function closeInstructionPopUpSelf_manuel_inMenu() {
  document.getElementById("buttonContainerFirst").style.display = "flex";

  let popUpRef = document.getElementById("instructionPopUpSelf_inMenu");
  popUpRef.style.display = "none";
}

function closeInstructionPopUpSelf_manuel_inGame() {
  let popUpRef = document.getElementById("instructionPopUpSelf_inGame");
  popUpRef.style.display = "none";
}

// -----------------------------------------------------------------------

function checkWidth() {
  if (innerWidth < 1080) {
    document.getElementById("customH1").style.display = "none";
  } else {
    document.getElementById("customH1").style.display = "flex";
  }
}
