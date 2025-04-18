var canvas = new handwriting.Canvas(document.getElementById("canvas"), 3);

// Confetti Effect (Runs Without Disrupting the Screen)
function startConfetti() {
    let duration = 2 * 100; // Confetti runs for 2 seconds
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


canvas.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare").value) {
        document.getElementById("ans").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
        
    if (err) throw err;
    else document.getElementById("result").innerHTML = data;
});

canvas.setLineWidth(5);
canvas.set_Undo_Redo(true, true);

//Set options
canvas.setOptions({
    language: "hi",
    numOfReturn: 1
});

var paintMode = false;
var x = 918,
    y = 549;
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
        true,
        true,
        window,
        0,
        0,
        0,
        x,
        y,
        false,
        false,
        false,
        false,
        0,
        null
    );
    element.dispatchEvent(clickEvent);
}

function recognizeAndCompare() {
    canvas.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value.trim()) {
            resultDisplay.innerHTML = "Yes";
           // resultDisplay.classList.add("correct");
           // resultDisplay.className = "correct";
        } else {
            resultDisplay.innerHTML = "No";
            //resultDisplay.classList.remove("correct");
            //resultDisplay.className = "incorrect";
        }
    }).catch(function(err) {
        console.error(err);
    });
}


var canvas1 = new handwriting.Canvas(document.getElementById("canvas1"), 3);

canvas1.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare1").value) {
        document.getElementById("ans1").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans1").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result1").innerHTML = data;
});

canvas1.setLineWidth(5);
canvas1.set_Undo_Redo(true, true);

//Set options
canvas1.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare1() {
    canvas1.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas2 = new handwriting.Canvas(document.getElementById("canvas2"), 3);

canvas2.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare2").value) {
        document.getElementById("ans2").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans2").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result2").innerHTML = data;
});

canvas2.setLineWidth(5);

//Set options
canvas2.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare2() {
    canvas2.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}

var canvas3 = new handwriting.Canvas(document.getElementById("canvas3"), 3);

canvas3.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare3").value) {
        document.getElementById("ans3").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans3").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result3").innerHTML = data;
});

canvas3.setLineWidth(5);
canvas3.set_Undo_Redo(true, true);

//Set options
canvas3.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare3() {
    canvas3.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas4 = new handwriting.Canvas(document.getElementById("canvas4"), 3);

canvas4.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare4").value) {
        document.getElementById("ans4").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans4").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result4").innerHTML = data;
});

canvas4.setLineWidth(5);
canvas4.set_Undo_Redo(true, true);

//Set options
canvas4.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare4() {
    canvas4.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas5 = new handwriting.Canvas(document.getElementById("canvas5"), 3);

canvas5.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare5").value) {
        document.getElementById("ans5").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans5").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result5").innerHTML = data;
});

canvas5.setLineWidth(5);
canvas5.set_Undo_Redo(true, true);

//Set options
canvas5.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare5() {
    canvas5.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas6 = new handwriting.Canvas(document.getElementById("canvas6"), 3);

canvas6.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare6").value) {
        document.getElementById("ans6").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans6").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result6").innerHTML = data;
});

canvas6.setLineWidth(5);
canvas6.set_Undo_Redo(true, true);

//Set options
canvas6.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare6() {
    canvas6.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas7 = new handwriting.Canvas(document.getElementById("canvas7"), 3);

canvas7.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare7").value) {
        document.getElementById("ans7").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans7").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result7").innerHTML = data;
});

canvas7.setLineWidth(5);
canvas7.set_Undo_Redo(true, true);

//Set options
canvas7.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare7() {
    canvas7.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas8 = new handwriting.Canvas(document.getElementById("canvas8"), 3);

canvas8.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare8").value) {
        document.getElementById("ans8").innerText = "✅ सही उत्तर!";
        startConfetti();
    } else
        document.getElementById("ans8").innerText = "❌ गलत उत्तर!";
    if (err) throw err;
    else document.getElementById("result8").innerHTML = data;
});

canvas8.setLineWidth(5);
canvas8.set_Undo_Redo(true, true);

//Set options
canvas8.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare8() {
    canvas8.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas9 = new handwriting.Canvas(document.getElementById("canvas9"), 3);

canvas9.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare9").value) {
        document.getElementById("ans9").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans9").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result9").innerHTML = data;
});

canvas9.setLineWidth(5);
canvas9.set_Undo_Redo(true, true);


//Set options
canvas9.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare9() {
    canvas9.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas10 = new handwriting.Canvas(document.getElementById("canvas10"), 3);

canvas10.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare10").value) {
        document.getElementById("ans10").innerText = "✅ सही उत्तर!";
         
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else
        document.getElementById("ans10").innerText = "❌ गलत उत्तर!";
    if (err) throw err;
    else document.getElementById("result10").innerHTML = data;
});

canvas10.setLineWidth(5);
canvas10.set_Undo_Redo(true, true);

//Set options
canvas10.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare10() {
    canvas10.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas11 = new handwriting.Canvas(document.getElementById("canvas11"), 3);

canvas11.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare11").value) {
        document.getElementById("ans11").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans11").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result11").innerHTML = data;
});

canvas11.setLineWidth(5);
canvas11.set_Undo_Redo(true, true);

//Set options
canvas11.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare11() {
    canvas11.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas12 = new handwriting.Canvas(document.getElementById("canvas12"), 3);

canvas12.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare12").value) {
        document.getElementById("ans12").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans12").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result12").innerHTML = data;
});

canvas12.setLineWidth(5);
canvas12.set_Undo_Redo(true, true);

//Set options
canvas12.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare12() {
    canvas12.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas13 = new handwriting.Canvas(document.getElementById("canvas13"), 3);

canvas13.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare13").value) {
        document.getElementById("ans13").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans13").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result13").innerHTML = data;
});

canvas13.setLineWidth(5);
canvas13.set_Undo_Redo(true, true);

//Set options
canvas13.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare13() {
    canvas13.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas14 = new handwriting.Canvas(document.getElementById("canvas14"), 3);

canvas14.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare14").value) {
        document.getElementById("ans14").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans14").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result14").innerHTML = data;
});

canvas14.setLineWidth(5);
canvas14.set_Undo_Redo(true, true);

//Set options
canvas14.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare14() {
    canvas14.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas15 = new handwriting.Canvas(document.getElementById("canvas15"), 3);

canvas15.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare15").value) {
        document.getElementById("ans15").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans15").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result15").innerHTML = data;
});

canvas15.setLineWidth(5);
canvas15.set_Undo_Redo(true, true);

//Set options
canvas15.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare15() {
    canvas15.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas16 = new handwriting.Canvas(document.getElementById("canvas16"), 3);

canvas16.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare16").value) {
        startConfetti();
        document.getElementById("ans16").innerText = "✅ सही उत्तर!";
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans16").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result16").innerHTML = data;
});

canvas16.setLineWidth(5);
canvas16.set_Undo_Redo(true, true);

//Set options
canvas16.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare16() {
    canvas16.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas17 = new handwriting.Canvas(document.getElementById("canvas17"), 3);

canvas17.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare17").value) {
        document.getElementById("ans17").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans17").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result17").innerHTML = data;
});

canvas17.setLineWidth(5);
canvas17.set_Undo_Redo(true, true);

//Set options
canvas17.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare17() {
    canvas17.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas18 = new handwriting.Canvas(document.getElementById("canvas18"), 3);

canvas18.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare18").value) {
        document.getElementById("ans18").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans18").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result18").innerHTML = data;
});

canvas18.setLineWidth(5);
canvas18.set_Undo_Redo(true, true);

//Set options
canvas18.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare18() {
    canvas18.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas19 = new handwriting.Canvas(document.getElementById("canvas19"), 3);

canvas19.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare19").value) {
        document.getElementById("ans19").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans19").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result19").innerHTML = data;
});

canvas19.setLineWidth(5);
canvas19.set_Undo_Redo(true, true);

//Set options
canvas19.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare19() {
    canvas19.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas20 = new handwriting.Canvas(document.getElementById("canvas20"), 3);

canvas20.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare20").value) {
        document.getElementById("ans20").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans20").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result20").innerHTML = data;
});

canvas20.setLineWidth(5);
canvas20.set_Undo_Redo(true, true);

//Set options
canvas20.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare20() {
    canvas20.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas21 = new handwriting.Canvas(document.getElementById("canvas21"), 3);

canvas21.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare21").value) {
        document.getElementById("ans21").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans21").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result21").innerHTML = data;
});

canvas21.setLineWidth(5);
canvas21.set_Undo_Redo(true, true);

//Set options
canvas21.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare21() {
    canvas21.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
var canvas22 = new handwriting.Canvas(document.getElementById("canvas22"), 3);

canvas22.setCallBack(function(data, err) {
    if (data == document.getElementById("letterToCompare22").value) {
        document.getElementById("ans22").innerText = "✅ सही उत्तर!";
        startConfetti();
        var clapSound = document.getElementById("clapSound");
        clapSound.play();
    } else{
        document.getElementById("ans22").innerText = "❌ गलत उत्तर!";
        var sadsound = document.getElementById("lose");
        sadsound.play();}
    if (err) throw err;
    else document.getElementById("result22").innerHTML = data;
});

canvas22.setLineWidth(5);
canvas22.set_Undo_Redo(true, true);

//Set options
canvas22.setOptions({
    language: "hi",
    numOfReturn: 1
});

function recognizeAndCompare22() {
    canvas22.recognize().then(function(data) {
        var resultDisplay = document.getElementById("result");
        if (data.trim() === document.getElementById("letterToCompare").value) {
            resultDisplay.innerHTML = "Yes";
        } else {
            resultDisplay.innerHTML = "No";
        }
    }).catch(function(err) {
        console.error(err);
    });
}
// var canvas23 = new handwriting.Canvas(document.getElementById("canvas23"), 3);

// canvas23.setCallBack(function(data, err) {
//     if (data == document.getElementById("letterToCompare23").value) {
//         document.getElementById("ans23").innerText = "✅ सही उत्तर!";
//         startConfetti();
//         var clapSound = document.getElementById("clapSound");
//         clapSound.play();
//     } else{
//         document.getElementById("ans23").innerText = "❌ गलत उत्तर!";
//         var sadsound = document.getElementById("lose");
//         sadsound.play();}
//     if (err) throw err;
//     else document.getElementById("result23").innerHTML = data;
// });

// canvas23.setLineWidth(5);

// //Set options
// canvas23.setOptions({
//     language: "hi",
//     numOfReturn: 1
// });

// function recognizeAndCompare23() {
//     canvas23.recognize().then(function(data) {
//         var resultDisplay = document.getElementById("result");
//         if (data.trim() === document.getElementById("letterToCompare").value) {
//             resultDisplay.innerHTML = "Yes";
//         } else {
//             resultDisplay.innerHTML = "No";
//         }
//     }).catch(function(err) {
//         console.error(err);
//     });
// }
// var canvas24 = new handwriting.Canvas(document.getElementById("canvas24"), 3);

// canvas24.setCallBack(function(data, err) {
//     if (data == document.getElementById("letterToCompare24").value) {
//         document.getElementById("ans24").innerText = "✅ सही उत्तर!";
//         startConfetti();
//         var clapSound = document.getElementById("clapSound");
//         clapSound.play();
//     } else{
//         document.getElementById("ans24").innerText = "❌ गलत उत्तर!";
//         var sadsound = document.getElementById("lose");
//         sadsound.play();}
//     if (err) throw err;
//     else document.getElementById("result24").innerHTML = data;
// });

// canvas24.setLineWidth(5);

// //Set options
// canvas24.setOptions({
//     language: "hi",
//     numOfReturn: 1
// });

// function recognizeAndCompare24() {
//     canvas24.recognize().then(function(data) {
//         var resultDisplay = document.getElementById("result");
//         if (data.trim() === document.getElementById("letterToCompare").value) {
//             resultDisplay.innerHTML = "Yes";
//         } else {
//             resultDisplay.innerHTML = "No";
//         }
//     }).catch(function(err) {
//         console.error(err);
//     });
// }
// var canvas25 = new handwriting.Canvas(document.getElementById("canvas25"), 3);

// canvas25.setCallBack(function(data, err) {
//     if (data == document.getElementById("letterToCompare25").value) {
//         document.getElementById("ans25").innerText = "✅ सही उत्तर!";
//         startConfetti();
//         var clapSound = document.getElementById("clapSound");
//         clapSound.play();
//     } else{
//         document.getElementById("ans25").innerText = "❌ गलत उत्तर!";
//         var sadsound = document.getElementById("lose");
//         sadsound.play();}
//     if (err) throw err;
//     else document.getElementById("result25").innerHTML = data;
// });

// canvas25.setLineWidth(5);

// //Set options
// canvas25.setOptions({
//     language: "hi",
//     numOfReturn: 1
// });

// function recognizeAndCompare25() {
//     canvas25.recognize().then(function(data) {
//         var resultDisplay = document.getElementById("result");
//         if (data.trim() === document.getElementById("letterToCompare").value) {
//             resultDisplay.innerHTML = "Yes";
//         } else {
//             resultDisplay.innerHTML = "No";
//         }
//     }).catch(function(err) {
//         console.error(err);
//     });
// }
// var canvas26 = new handwriting.Canvas(document.getElementById("canvas26"), 3);

// canvas26.setCallBack(function(data, err) {
//     if (data == document.getElementById("letterToCompare26").value) {
//         document.getElementById("ans26").innerText = "✅ सही उत्तर!";
//         startConfetti();
//         var clapSound = document.getElementById("clapSound");
//         clapSound.play();
//     } else{
//         document.getElementById("ans26").innerText = "❌ गलत उत्तर!";
//         var sadsound = document.getElementById("lose");
//         sadsound.play();}
//     if (err) throw err;
//     else document.getElementById("result26").innerHTML = data;
// });

// canvas26.setLineWidth(5);

// //Set options
// canvas26.setOptions({
//     language: "hi",
//     numOfReturn: 1
// });

// function recognizeAndCompare26() {
//     canvas26.recognize().then(function(data) {
//         var resultDisplay = document.getElementById("result");
//         if (data.trim() === document.getElementById("letterToCompare").value) {
//             resultDisplay.innerHTML = "Yes";
//         } else {
//             resultDisplay.innerHTML = "No";
//         }
//     }).catch(function(err) {
//         console.error(err);
//     });
// }
// var canvas27 = new handwriting.Canvas(document.getElementById("canvas27"), 3);

// canvas27.setCallBack(function(data, err) {
//     if (data == document.getElementById("letterToCompare26").value) {
//         document.getElementById("ans27").innerText = "✅ सही उत्तर!";
//         startConfetti();
//         var clapSound = document.getElementById("clapSound");
//         clapSound.play();
//     } else{
//         document.getElementById("ans27").innerText = "❌ गलत उत्तर!";
//         var sadsound = document.getElementById("lose");
//         sadsound.play();}
//     if (err) throw err;
//     else document.getElementById("result27").innerHTML = data;
// });

// canvas27.setLineWidth(5);
// canvas27.set_Undo_Redo(true, true);

// //Set options
// canvas27.setOptions({
//     language: "hi",
//     numOfReturn: 1
// });

// function recognizeAndCompare26() {
//     canvas27.recognize().then(function(data) {
//         var resultDisplay = document.getElementById("result");
//         if (data.trim() === document.getElementById("letterToCompare").value) {
//             resultDisplay.innerHTML = "Yes";
//         } else {
//             resultDisplay.innerHTML = "No";
//         }
//     }).catch(function(err) {
//         console.error(err);
//     });
// }

