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
      xTurnNo++;
    } else {
      event.target.innerText = "O";
      let square = document.getElementById(`${event.target.id}`);
      square.removeEventListener("click", play);
      turn = true;
      oTurnNo++;
    }

    if (xTurnNo >= 3 && !turn) {
      if (isVictory(cells)) {
        winnerBanner.innerText = " Winner : X ";

        cells.forEach((cell) => {
          cell.removeEventListener("click", play);
        });
      }
    } else if (oTurnNo >= 3 && turn) {
      if (isVictory(cells)) {
        winnerBanner.innerText = " Winner : O ";
        cells.forEach((cell) => {
          cell.removeEventListener("click", play);
        });
      } else if (oTurnNo + xTurnNo == 8) {
        winnerBanner.innerText = " DRAW ";
      }
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

  function isVictory(cells) {
    let combs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let comb of combs) {
      if (
        cells[comb[0]].textContent == cells[comb[1]].textContent &&
        cells[comb[1]].textContent == cells[comb[2]].textContent &&
        cells[comb[0]].textContent != ""
      ) {
        return true;
      }
    }

    return false;
  }

  //EVENT LISTENERS
  console.log(cells);
  cells.forEach((cell) => {
    cell.addEventListener("click", play);
  });

  newGame.addEventListener("click", newGameFn);
  giveUp.addEventListener("click", giveUpFn);
});
