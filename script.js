const rollButton = document.querySelector(".btn-roll");
const diceImg = document.querySelector(".dice-img");
const currentScore0 = document.querySelector(".current-score-0");
const currentScore1 = document.querySelector(".current-score-1");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const score0Element = document.querySelector(".player0Score");
const score1Element = document.querySelector(".player1Score");
const btnNew = document.querySelector(".btn-new");
const btnHold = document.querySelector(".btn-hold");

let playing = true;
let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0];

// 초기설정
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  diceImg.style.opacity = 0;
  playing = true;
};

const switchPlayer = () => {
  // 플레이어 차례 변경
  document.querySelector(`.current-score-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

const rollDice = () => {
  // 1. 주사위 굴리는 기능
  if (playing) {
    // Math.floor()는 괄호 안에 값을 내림하여 정수 부분만 남기는 역할을 한다.
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `dice-${dice}.png`;
    diceImg.style.opacity = 1;
    if (dice >= 3) {
      currentScore += dice;
      document.querySelector(`.current-score-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

const scoreHold = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.player${activePlayer}Score`).textContent =
      scores[activePlayer];
  }
  if (scores[activePlayer] >= 50) {
    playing = false;
    diceImg.style.opacity = 0;
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.remove("player--active");
  } else {
    switchPlayer();
  }
};

btnHold.addEventListener("click", scoreHold);
rollButton.addEventListener("click", rollDice);
btnNew.addEventListener("click", init);
