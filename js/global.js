"use strict";

let intervalIds = [];

/**
 * Die bessere Weise der beendigung der Intervale, da hier jedes Interval in das laufende Array eingetragen wird.
 * The better way of terminating intervals, because here each interval is entered into the current array.
 */
function setStoppableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervalIds.push(id);
  // console.log(id);
}

function clearAllIntervals() {
  intervalIds.forEach(clearInterval);
  intervalIds = [];
}
