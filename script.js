"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let curScore = 20;
let highScore = 0;

const btnCheck = document.querySelector(".check");
const score = document.querySelector(".score");
const number = document.querySelector(".number");
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

btnCheck.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage("You need to insert a number");
  } else if (guess === randomNumber) {
    displayMessage("You guessed it right!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.textContent = guess;
    if (curScore > highScore) {
      highScore = curScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== randomNumber) {
    if (curScore > 1) {
      displayMessage(guess > randomNumber ? "Too high!" : "Too low");
      curScore--;
      score.textContent = curScore;
    } else {
      displayMessage("You lost the game...");
      score.textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  curScore = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  score.textContent = curScore;
  number.textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  number.style.width = "15rem";
});
