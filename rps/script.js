const weapons = ["Rock", "Paper", "Scissor"];
const win = 3;
let uPoints = 0;
let cPoints = 0;
let uWeapon;
let cWeapon;
let round;

const newGameBtn = document.querySelector("#new-game-btn");
newGameBtn.addEventListener("click", () => newGame());

const uRockBtn = document.querySelector("#u-rock-btn");
const uPaperBtn = document.querySelector("#u-paper-btn");
const uScissorBtn = document.querySelector("#u-scissor-btn");
uRockBtn.addEventListener("click", () => getWeapons(0));
uPaperBtn.addEventListener("click", () => getWeapons(1));
uScissorBtn.addEventListener("click", () => getWeapons(2));

const uPointsEl = document.querySelector("#u-points-el");
const cPointsEl = document.querySelector("#c-points-el");
const uChoiceEl = document.querySelector("#u-choice-el");
const cChoiceEl = document.querySelector("#c-choice-el");
const winnerEl = document.querySelector("#winner-el");



function newGame () {
  uPoints = 0;
  cPoints = 0;
  round = 0;
  //TODO: ACTIVE BUTTONS
  clearUI();
}

function getWeapons (user) {
  if (uPoints === win || cPoints === win) {
    winnerEl.textContent = "Start a new game";
  } else {
    uWeapon = user;
    cWeapon = Math.floor(Math.random() * 3);
    winnerEl.textContent = "";
    playRound(uWeapon, cWeapon);
  }
}

function playRound (user, computer) {
  round++;
  uChoiceEl.textContent = `User choose ${weapons[uWeapon]}`;
  cChoiceEl.textContent = `Computer choose ${weapons[cWeapon]}`;

  if (user === computer) winnerEl.textContent = "Draw!";
  else if (
    user === 0 && computer === 2 ||
    user === 1 && computer === 0 ||
    user === 2 && computer === 1) {
      winnerEl.textContent = "User point +";
      uImg.setAttribute('src', 'assets/ugrin.png');
      cImg.setAttribute('src', 'assets/cdizzy.png');
      uPoints++;
    }
  else {
    winnerEl.textContent = "Alien point +";
    uImg.setAttribute('src', 'assets/udizzy.png');
    cImg.setAttribute('src', 'assets/cgrin.png');
    cPoints++;
  }

  if (uPoints === 3) {
    winnerEl.textContent = "User wins!";
    uImg.setAttribute('src', 'assets/uloved.png');
    cImg.setAttribute('src', 'assets/cknocked.png');
    //TODO DEACTIVATE BUTTONS
  } else if (cPoints === 3) {
    winnerEl.textContent = "Computer wins!";
    uImg.setAttribute('src', 'assets/uknocked.png');
    cImg.setAttribute('src', 'assets/cloved.png');
    //TODO DEACTIVATE BUTTONS
  }
  
  renderPoints();
}

function renderPoints() {
  uPointsEl.textContent = uPoints;
  cPointsEl.textContent = cPoints;
}

function clearUI() {
  uChoiceEl.textContent = "";
  cChoiceEl.textContent = "";
  winnerEl.textContent = "";
  uPointsEl.textContent = "";
  cPointsEl.textContent = "";
  uImg.setAttribute('src', 'assets/uchallenge.png');
  cImg.setAttribute('src', 'assets/cchallenge.png');
}

const uImg = document.querySelector("#u-img");
const cImg = document.querySelector("#c-img");

const uWBtn = document.querySelectorAll(".u-w-btn");
const cWBtn = document.querySelectorAll(".c-w-btn");

uWBtn.forEach(function(button) {
  button.addEventListener("mouseover", () => uImg.setAttribute('src', 'assets/udoubt.png'));
  button.addEventListener("mouseout", () => uImg.setAttribute('src', 'assets/uchallenge.png'));
});

cWBtn.forEach(function(button) {
  button.addEventListener("mouseover", () => cImg.setAttribute('src', 'assets/cangry.png'));
  button.addEventListener("mouseout", () => cImg.setAttribute('src', 'assets/cchallenge.png'));
});


