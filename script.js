const words = ["Apple", "Time", "Orange", "Robots" ,"Cars", "Strawberry", "Kiwi", "Spacecrafts" , "Mango", "Blueberry", "Peach", "Pear"];
let currentWord;
let startTime;
let timer;

const wordDisplay = document.getElementById("wordDisplay");
const wordInput = document.getElementById("wordInput");
const startButton = document.getElementById("startButton");
const result = document.getElementById("result");

startButton.addEventListener("click", startRace);
wordInput.addEventListener("input", checkInput);

function startRace() {
    wordInput.value = '';
    result.textContent = '';
    currentWord = getRandomWord();
    wordDisplay.textContent = currentWord;
    wordInput.disabled = false;
    wordInput.focus();
    startTime = new Date().getTime();
}

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function checkInput() {
    if (wordInput.value === currentWord) {
        const timeTaken = (new Date().getTime() - startTime) / 1000;
        result.textContent = `Congratulations! You typed it in ${timeTaken} seconds.`;
        wordInput.disabled = true;
        wordDisplay.textContent = '';
        clearInput();
    }
}

function clearInput() {
    wordInput.value = '';
}