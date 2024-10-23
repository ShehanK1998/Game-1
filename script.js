let score = 0;
let timeLeft = 10;
let timerId = null;

const clickButton = document.getElementById('click-button');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-button');

clickButton.disabled = true;

clickButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
});

startButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;

    clickButton.disabled = false;
    startButton.disabled = true;

    timerId = setInterval(countDown, 1000);
}

function countDown() {
    timeLeft--;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft === 0) {
        clearInterval(timerId);
        clickButton.disabled = true;
        startButton.disabled = false;
        alert(`Time's up! Your final score is: ${score}`);
    }
}
