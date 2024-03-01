const player = {
    name: "Mizanti",
    chips: 145,
}
let cards = [];
let sum = 0;
let round = 0;
let isAlive = false;
let gotBlackJack = false;

let playerEl = document.querySelector("#player-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let subEl = document.querySelector("#sub-el");

function getCard() {
    cards[round] = getRandom();
    cardsEl.textContent += cards[round] + " ";
    sum += cards[round];
    sumEl.textContent = "Sum: " + sum;
    round++;
    renderGame();
}

function getRandom() {
    let card = Math.floor(Math.random() * 13) + 1;
    if (card === 1) {
        return 11;
    } else if (card > 10) {
        return 10;
    } else {
        return card;
    }
}

function renderGame() {
    isAlive = true;
    playerEl.textContent = player.name + ": $" + player.chips;
    if (sum === 0) {
        subEl.textContent = "Let's start! Get a new card.";
    } else if (sum < 21) {
        subEl.textContent = "Do you want to try get another card?";
    } else if (sum === 21) {
        subEl.textContent = "Congratulations, tou got Black Jack!";
        gotBlackJack = true;
    } else if (sum > 21) {
        subEl.textContent = "You are not lucky today.";
        isAlive = false;
    } else {
        subEl.textContent("ERROR");
    }
}

