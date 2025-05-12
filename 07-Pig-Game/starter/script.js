'use strict';
// selecting element

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const rollDiceEl = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const play0 = document.querySelector('.player--0');
const play1 = document.querySelector('.player--1');
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');

let score, currentScore, activePlayer, playing;
const init = function () {
  activePlayer = 0;
  currentScore = 0;
  score = [0, 0];
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  diceEL.classList.add('hidden');
  play0.classList.remove('player--winner');
  play1.classList.remove('player--winner');
  play0.classList.add('player--active');
  play1.classList.remove('player--active');
  // .classList.add('player--winner');
};
init();
// console.log(score0El, score1El);
const switchplayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  play0.classList.toggle('player--active');
  play1.classList.toggle('player--active');
};

// rolling dice
rollDiceEl.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      // add dice to curent score
    } else {
      switchplayer();
      // switch to next player
    }
  }
});
btnHold.addEventListener('click', function () {
  // 1.add current score to the score of the current playe
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];

    //   check if score is up to 100
    if (score[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
  }

  // finish the game
  //   switch to the next player
});
btnNew.addEventListener('click', init);
// playing = true;
// document
//   .querySelector(`.player--${activePlayer}`)
//   .classList.remove('player--winner');
// // document.querySelector(`score--${activePlayer}`);
// score0El.textContent = 0;
// score1El.textContent = 0;
// currentScore0.textContent = 0;
// currentScore1.textContent = 0;
// console.log(currentScore0);
// console.log(currentScore1);
