let secretNumber = generateRandomNumber();
let score = 0;
let highScore = 0;
let checkCount = 0;

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const resetGame = function () {
  score = 0;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '1';
  displayMessage('Guessing...');
  secretNumber = generateRandomNumber();
  checkCount = 0;
  document.querySelector('.check-count').textContent = '👇 Check Count: ' + checkCount;
};

const reset = function() {
    checkCount = 0;
    document.querySelector('.check-count').textContent = '👇 Check Count: ' + checkCount;
}

document.querySelector('.check').addEventListener('click', function () {
    checkCount += 1;
    document.querySelector('.check-count').textContent = '👇 Check Count: ' + checkCount;
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Exist Number');
    document.querySelector('.guess').value = '1';
  } else if (guess < 1 || guess > 20) {
    displayMessage('Enter a number between 1 and 20');
    document.querySelector('.guess').value = '1';
  } else if (guess === secretNumber) {
    displayMessage('Correct number');
    document.querySelector('.number').textContent = secretNumber;
    reset();
    if (score === 20) {
      document.querySelector('.check-count').textContent = '👇 Check Count: ' + checkCount;
      resetGame();
    } else {
      score += 1;
      document.querySelector('.score').textContent = score;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      secretNumber = generateRandomNumber();
    }
  } else if (guess > secretNumber) {
    displayMessage('Enter a smaller number');
  } else if (guess < secretNumber) {
    displayMessage('Enter a higher number');
  }

});

document.querySelector('.again').addEventListener('click', resetGame);
