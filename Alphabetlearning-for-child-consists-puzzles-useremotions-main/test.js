// Hindi letters array (expanded pool)
const hindiLetters = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "च", "छ", "ज", "झ"];

let testLetters = [];
let currentQuestion = 0;
let correctAnswers = 0;
const totalQuestions = 5;

// Pick 5 random letters
function pickRandomLetters() {
  const shuffled = [...hindiLetters].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, totalQuestions);
}


// Init handwriting canvas
const canvas = new handwriting.Canvas(document.getElementById("testCanvas"), 3);
canvas.setLineWidth(5);
canvas.set_Undo_Redo(true, true);
canvas.setOptions({ language: "hi", numOfReturn: 1 });

// Audio elements
const clapSound = document.getElementById("clapSound");
const sadSound = document.getElementById("lose");



// Load current letter and update UI
function loadCurrentLetter() {
  const letter = testLetters[currentQuestion];
  document.getElementById("currentLetter").innerText = letter;
  document.getElementById("letterToCompare").value = letter;
  document.getElementById("progressText").innerText = `Question ${currentQuestion + 1} of ${totalQuestions}`;
  document.getElementById("emojiProgress").innerText = "🌕".repeat(currentQuestion) + "🌑".repeat(totalQuestions - currentQuestion);
  
  canvas.erase();
}

// Show final results
function showFinalResults() {
    // Hide all buttons and canvas
    document.getElementById("testCanvas").style.display = "none";
    document.getElementById("currentLetter").style.display = "none";
    document.getElementById("checkBtn").style.display = "none";
    document.getElementById("resetBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("progressText").style.display = "none";
    document.getElementById("emojiProgress").style.display = "none";
   
    // Show the final result area
    const resultBox = document.getElementById("finalScore");
    resultBox.style.display = "block";
  
    let message = "";
    let emojiRow = "";
  
    if (correctAnswers === totalQuestions) {
      message = "🎉 वाह! 🏆";
      emojiRow = "🌟🌟🌟🌟🌟";
      document.getElementById("clapSound").play();
    } else if (correctAnswers >= 3) {
      message = "👍 शाबाश!";
      emojiRow = "🌟".repeat(correctAnswers) + "⚪".repeat(totalQuestions - correctAnswers);
      document.getElementById("clapSound").play();
    } else {
      message = "😊 कोशिश करते रहो!";
      emojiRow = "🌟".repeat(correctAnswers) + "⚪".repeat(totalQuestions - correctAnswers);
      document.getElementById("lose").play();
    }
  
    resultBox.innerHTML = `
    <h2 style="font-size: 2rem;">${message}</h2>
    <p style="font-size: 2rem;">${emojiRow}</p>
    <button onclick="window.location.href='course.html'" 
            style="padding: 10px 20px; font-size: 1rem; margin-top: 20px; background-color: #27ae60; color: white; border: none; border-radius: 8px;">
            घर 🏠
    </button>
  `;

  }
  

// Handle answer submission
function submitTestAnswer(isCorrect) {
  if (isCorrect) correctAnswers++;
  document.getElementById("checkBtn").disabled = true;

  document.getElementById("resetBtn").disabled = true;
  document.getElementById("nextBtn").style.display = "inline-block";
  document.getElementById("checkBtn").classList.add("disabled");
  document.getElementById("resetBtn").classList.add("disabled");


  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;
}



// Reset canvas
document.getElementById("resetBtn").addEventListener("click", () => {
  canvas.erase();

});

// Next button logic
document.getElementById("nextBtn").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < totalQuestions) {
    loadCurrentLetter();
    document.getElementById("checkBtn").disabled = false;
    document.getElementById("resetBtn").disabled = false;
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("checkBtn").classList.remove("disabled");
    document.getElementById("resetBtn").classList.remove("disabled");

  } else {
    showFinalResults();
  }
});


// Confetti Effect
function startConfetti() {
    let duration = 2 * 100;
    let end = Date.now() + duration;

    function frame() {
        confetti({
            particleCount: 5,
            spread: 80,
            origin: { y: 0.6 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }
    frame();
}

// Set Callback for Recognition
canvas.setCallBack(function(data, err) {
    if (err) {
        console.error("Recognition error:", err);
        return;
    }

    const expected = document.getElementById("letterToCompare").value.trim();
  

    if (data[0] === expected) {
    
       
        startConfetti();

        const clapSound = document.getElementById("clapSound");
        if (clapSound) clapSound.play();
        submitTestAnswer(true);

  
    } else {
       

        const sadSound = document.getElementById("lose");
        if (sadSound) sadSound.play();
        submitTestAnswer(false);


    }
});

// Canvas Settings
canvas.setLineWidth(5);
canvas.set_Undo_Redo(true, true);
canvas.setOptions({
    language: "hi",
    numOfReturn: 1
});

// Paint Mode
let paintMode = false;
let x = 918, y = 549;

document.onmousemove = function(e) {
    x = e.clientX;
    y = e.clientY;
};

document.addEventListener("keydown", (event) => {
    if (event.code === "KeyP") {
        if (!paintMode) {
            paintMode = true;
            document.getElementById("paintMode").innerHTML = "ON";
            sendMouseEvent();
        }
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code === "KeyP") {
        if (paintMode) {
            paintMode = false;
            document.getElementById("paintMode").innerHTML = "OFF";
            sendMouseEvent();
        }
    }
});

function sendMouseEvent() {
    var eventName = paintMode ? "mousedown" : "mouseup";
    var element = document.getElementById("canvas");
    var clickEvent = document.createEvent("MouseEvents");
    clickEvent.initMouseEvent(
        eventName,
        true, true, window, 0, 0, 0, x, y,
        false, false, false, false, 0, null
    );
    element.dispatchEvent(clickEvent);
}

// Updated recognizeAndCompare function using callback
function recognizeAndCompare() {
    // Call recognize, which triggers the setCallBack handler
    canvas.recognize();
}
document.getElementById("checkBtn").addEventListener("click", function () {
    recognizeAndCompare();
});

// Initialize test on window load
window.onload = () => {
    testLetters = pickRandomLetters();
    loadCurrentLetter();
    console.log("done");
    document.getElementById("nextBtn").style.display = "none";
  };
  