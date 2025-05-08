'use strict';
// selecting element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const rollDiceEl = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
let currentScore0 = Number(document.querySelector('#current--0').textContent);

let currentScore1 = Number(document.querySelector('#current--1').textContent);
let activePlayer = 0;
let currentScore = 0;
// console.log(score0El, score1El);
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');
// rolling dice
rollDiceEl.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6 + 1);
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    // add dice to curent score
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    // switch to next player
  }

  console.log(dice);
});
