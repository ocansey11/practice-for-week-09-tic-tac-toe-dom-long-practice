// Your code here
window.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  let xTurnNo = 0; //this increases everytime X plays. and we check if theres a winner when they reach their third attempt
  let oTurnNo = 0;
  let winnerBanner = document.getElementById("winner");

  let cells = document.querySelectorAll(".cell");

  //
  let newGame = document.getElementById("newGame");
  let giveUp = document.getElementById("giveUp");

  let turn = true; // X starts first. when tru X plays. when false o plays

  function play(event) {
    if (turn) {
      event.target.innerText = "X";
      let square = document.getElementById(`${event.target.id}`);
      square.removeEventListener("click", play);
      turn = false;
    } else {
      event.target.innerText = "O";
      let square = document.getElementById(`${event.target.id}`);
      square.removeEventListener("click", play);
      turn = true;
    }
  } //activates the blue circle effect. changes the turn, and implements the X | O imprint in each cell depending on turn

  function newGameFn() {
    location.reload();
  }
  function giveUpFn() {
    if (turn) {
      winnerBanner.innerText = " Winner : O ";
      cells.forEach((cell) => {
        cell.removeEventListener("click", play);
      });
    } else {
      winnerBanner.innerText = " Winner : X ";
      cells.forEach((cell) => {
        cell.removeEventListener("click", play);
      });
    }
  }

  //EVENT LISTENERS
  cells.forEach((cell) => {
    cell.addEventListener("click", play);
  });

  newGame.addEventListener("click", newGameFn);
  giveUp.addEventListener("click", giveUpFn);
});
