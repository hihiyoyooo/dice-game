let gameOver = false;

const rollButton = document.querySelector(".btn-roll");
const diceImge = document.querySelector(".dice-img");

const rollDice = () => {
  if (!gameOver) {
    // Math.floor()는 괄호 안에 값을 내림하여 정슈 뷰뷴먼 남기는 역할을 한다.
    const dice = Math.floor(Math.random() * 6) + 1;
    diceImge.src = `dice-${dice}.png`;
    diceImge.style.opacity = 1;
  }
};
rollButton.addEventListener("click", rollDice);
