function checkEnteredLetter(letter) {
    const userInput = document.getElementById(`letterInput${letter}`).value.trim().toUpperCase();
    const correctCheckEntered = document.getElementById(`correctCheckEntered${letter}`);
    correctCheckEntered.checked = userInput === letter;
    console.log(userInput === letter ? `Right (Entered ${letter})` : `Wrong (Entered ${letter})`);
}



// Function to reset the canvas and input field for each letter
function resetCanvas(letter) {
    const canvas = canvasMap[letter];
    const ctx = ctxMap[letter];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById(`letterInput${letter}`).value = "";
    document.getElementById(`correctCheckDrawn${letter}`).checked = false;
    document.getElementById(`correctCheckEntered${letter}`).checked = false;
}

// Function to speak the letter for each letter
function speakLetter(letter) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(letter);
    utterance.lang = "hi-IN";
    utterance.rate = 0.7;
    synth.speak(utterance);
}
// Function to draw each letter
function drawLetter(letter) {
    const lines = document.querySelectorAll(`.line${letter}`);
    let delay = 0;
    lines.forEach(line => {
        setTimeout(() => {
            drawLine(line, 2);
        }, delay * 1000);
        delay += 2;
    });
}
window.onload = () => {
    letterList.split('').forEach(letter => {
        drawLetter(letter);
    });
};
var currentLetterIndex = 0;

var containers = document.querySelectorAll('.writing-practice');
hideContainers()
containers[currentLetterIndex].style.display = 'block';

function hideContainers() {
    containers.forEach(function(container) {
        container.style.display = 'none';
    });
}

function nextLetter() {
    hideContainers();

    currentLetterIndex = (currentLetterIndex + 1) % 23;
    containers[currentLetterIndex].style.display = 'block';
     

}

function prevLetter() {
    hideContainers();
    containers_length=23;
    currentLetterIndex = (currentLetterIndex - 1 + containers_length) % 23;
    containers[currentLetterIndex].style.display = 'block';
}
