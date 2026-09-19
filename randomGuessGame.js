let ans;
let attempts = 0;
let maxNumber;

const maxInput = document.getElementById("maxNumber");
const startBtn = document.getElementById("startBtn");

const setup = document.getElementById("setup");
const gameArea = document.getElementById("gameArea");

const maxDisplay = document.getElementById("maxDisplay");

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");

const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

const newGameBtn = document.getElementById("newGameBtn");


// Start Game
startBtn.addEventListener("click", function () {

    maxNumber = Number(maxInput.value);

    if (maxNumber < 1 || !maxNumber) {
        alert("Please enter a valid number.");
        return;
    }

    ans = Math.floor(Math.random() * maxNumber) + 1;

    attempts = 0;

    maxDisplay.textContent = maxNumber;
    attemptsDisplay.textContent = attempts;

    setup.classList.add("hidden");
    gameArea.classList.remove("hidden");

    message.textContent = "Good luck! Make your first guess.";

    guessInput.focus();
});


// Guess Button
guessBtn.addEventListener("click", function () {

    let guess = Number(guessInput.value);

    if (!guess) {
        message.textContent = "Please enter a number.";
        return;
    }

    if (guess < 1 || guess > maxNumber) {
        message.textContent =
            `Please enter a number between 1 and ${maxNumber}.`;
        return;
    }

    attempts++;

    attemptsDisplay.textContent = attempts;


    if (guess === ans) {

        message.textContent =
            `🎉 Congrats! You won! The number was ${ans}.`;

        guessInput.disabled = true;
        guessBtn.disabled = true;

    }

    else if (guess > ans) {

        message.textContent =
            "Too high! Try a smaller number.";

    }

    else {

        message.textContent =
            "Too low! Try a bigger number.";

    }

    guessInput.value = "";
    guessInput.focus();

});


// New Game
newGameBtn.addEventListener("click", function () {

    setup.classList.remove("hidden");
    gameArea.classList.add("hidden");

    maxInput.value = "";

    guessInput.disabled = false;
    guessBtn.disabled = false;

    message.textContent = "";

    maxInput.focus();

});