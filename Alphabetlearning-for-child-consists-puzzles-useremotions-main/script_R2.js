const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const letters = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'क', 'ख', 'ग', 'घ', 'च', 'छ', 'ज', 'झ', 'ट'];
let currentLetterIndex = 0;
let completenessPercentage=0;

const images = {
    'अ': '../images/images_2/anar.png',
    'आ': '../images/images_2/aam.png',
    'इ': '../images/images_2/imli.png',
    'ई': '../images/images_2/ikh.png',
    'उ': '../images/images_2/ullu.png',
    'ऊ': '../images/images_2/oonth.png',
    'ए': '../images/images_2/edi.png',
    'ऐ': '../images/images_2/ainak.png',
    'ओ': '../images/images_2/okhli.png',
    'औ': '../images/images_2/aurat.png',
    'अं': '../images/images_2/angoor.png',
    'क': '../images/images_2/kabootar.png',
    'ख': '../images/images_2/khargosh.png',
    'ग': '../images/images_2/gamla.png',
    'घ': '../images/images_2/ghadi.png',
    'च': '../images/images_2/chammach.png',
    'छ': '../images/images_2/chatri.png',
    'ज': '../images/images_2/jahaz.png',
    'झ': '../images/images_2/jhanda.png',
    'ट': '../images/images_2/tamatar.png',
};

const captions = {
    'अ': 'anar',
    'आ': 'aam',
    'इ': 'imli',
    'ई': 'ikh',
    'उ': 'ullu',
    'ऊ': 'oonth',
    'ए': 'edi',
    'ऐ': 'ainak',
    'ओ': 'okhli',
    'औ': 'aurat',
    'अं': 'angoor',
    'क': 'kabootar',
    'ख': 'khargosh',
    'ग': 'gamla',
    'घ': 'ghadi',
    'च': 'chammach',
    'छ': 'chatri',
    'ज': 'jahaz',
    'झ': 'jhanda',
    'ट': 'tamatar',
};
// Draw the initial letter
drawLetter();

// Event listeners for mouse movement
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);
canvas.addEventListener('mouseout', endDrawing);

// Function to start drawing
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    ctx.strokeStyle = document.getElementById('colorPicker').value;
    ctx.lineWidth = document.getElementById('strokeWidth').value;
}

// Function to draw
function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to end drawing
function endDrawing() {
    isDrawing = false;
}

// Function to reset canvas
function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLetter();
}

// Function to speak the letter
function speakLetter() {
    const utterance = new SpeechSynthesisUtterance(letters[currentLetterIndex]);
    window.speechSynthesis.speak(utterance);
}
var clapSound = document.getElementById("clapSound");


var sadsound = document.getElementById("lose");


// Function to draw the current letter
function drawLetter() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([5,5]); // Set line dash pattern for dotted line
    ctx.font = '300px Arial';
    ctx.fillStyle = '#ffffff'; // Fill with white initially
    ctx.textAlign = 'center'; // Center the text horizontally
    ctx.textBaseline = 'middle'; // Center the text vertically
    ctx.fillText(letters[currentLetterIndex], canvas.width / 2, canvas.height / 2); // Position at the center
    ctx.strokeStyle = '#000000';
    
    ctx.lineWidth = 2; // Increase border width for better visibility (thicker line)
    ctx.strokeText(letters[currentLetterIndex], canvas.width / 2, canvas.height / 2); // Position at the center
    document.getElementById('letterTitle').innerText = `Write the Letter ${letters[currentLetterIndex]}:`;

    const currentAlphabet = letters[currentLetterIndex];
    document.getElementById('image').src = images[currentAlphabet] || 'default_image.jpeg';
    document.getElementById('imageCaption').innerText = (captions[currentAlphabet] || currentAlphabet).toUpperCase();
}

// Function to check the completeness of the drawing and update CSS class accordingly
function checkCompletion() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let filledPixels = 0;
    for (let i = 0; i < data.length; i += 4) {
        // Check if the pixel is not white (filled)
        if (data[i] !== 255 || data[i + 1] !== 255 || data[i + 2] !== 255) {
            filledPixels++;
        }
    }

    const totalPixels = canvas.width * canvas.height;
    
    completenessPercentage = (filledPixels / totalPixels) * 100;

    //let completionMessage = '';
    let completionMessage = `Completion: ${Math.round(completenessPercentage-20)}% - `;
    if (completenessPercentage >= 99.99) {
        completionMessage += "Hurrah! Perfect! 🎉"; // Add emoji here
        document.getElementById('completionMessage').classList.remove("partial", "try-again"); // Remove other classes
        document.getElementById('completionMessage').classList.add("perfect"); // Add perfect class
    } else if (completenessPercentage >= 90) {
        completionMessage += "Well done! 😊";
        clapSound.play();
        document.getElementById('completionMessage').classList.remove("perfect", "try-again"); // Remove other classes
        document.getElementById('completionMessage').classList.add("partial"); // Add partial class
    } else {
        completionMessage += "Try again! 🥲";
        sadsound.play();
        document.getElementById('completionMessage').classList.remove("perfect", "partial"); // Remove other classes
        document.getElementById('completionMessage').classList.add("try-again"); // Add try-again class
    }

    document.getElementById('completionMessage').innerText = completionMessage;
}

// function previousLetter() {
//     currentLetterIndex--;
//     if (currentLetterIndex < 0) {
//         currentLetterIndex = letters.length - 1;
//     }
//     drawLetter();
// }

// // Function to navigate to the next letter
// function nextLetter() {
//     currentLetterIndex++;
//     if (currentLetterIndex >= letters.length) {
//         currentLetterIndex = 0;
//     }
//     drawLetter();
// }

function previousLetter() {
    if (completenessPercentage >= 90) {
        currentLetterIndex--;
        if (currentLetterIndex < 0) {
            currentLetterIndex = letters.length - 1;
        }
        drawLetter();
    } else {
        alert("Complete at least 70% before moving to the previous letter! ✋");
    }
}

// Function to navigate to the next letter only if completion is above 90%
function nextLetter() {
    if (completenessPercentage >= 90) {
        currentLetterIndex++;
        if (currentLetterIndex >= letters.length) {
            currentLetterIndex = 0;
        }
        drawLetter();
    } else {
        alert("Complete at least 70% before moving to the next letter! ✋");
    }
}
