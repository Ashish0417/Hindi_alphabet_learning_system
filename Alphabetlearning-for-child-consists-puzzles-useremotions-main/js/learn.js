const data = [
    { letter: "अ", word: "अनार", image: "../images/anar.png", audio: "../audio/anar.mp3" },
    { letter: "आ", word: "आम", image: "../images/aam.png", audio: "../audio/aam.mp3" },
    { letter: "इ", word: "इमली", image: "../images/imli.png", audio: "../audio/imli.mp3" },
    { letter: "ई", word: "ईख", image: "../images/ikh.png", audio: "../audio/ikh.mp3" },
    { letter: "उ", word: "उल्लू", image: "../images/ullu.png", audio: "../audio/ullu.mp3" },
    { letter: "ऊ", word: "ऊँट", image: "../images/oonth.png", audio: "../audio/oonth.mp3" },
    { letter: "ए", word: "एड़ी", image: "../images/edi.png", audio: "../audio/edi.mp3" },
    { letter: "ऐ", word: "ऐनक", image: "../images/ainak.png", audio: "../audio/ainak.mp3" },
    { letter: "ओ", word: "ओखली", image: "../images/okhli.png", audio: "../audio/okhli.mp3" },
    { letter: "औ", word: "औरत", image: "../images/aurat.png", audio: "../audio/aurat.mp3" },
    { letter: "अं", word: "अंगूर", image: "../images/angoor.png", audio: "../audio/angoor.mp3" },
    { letter: "क", word: "कबूतर", image: "../images/kabootar.png", audio: "../audio/kabootar.mp3" },
    { letter: "ख", word: "खरगोश", image: "../images/khargosh.png", audio: "../audio/khargosh.mp3" },
    { letter: "ग", word: "गमला", image: "../images/gamla.png", audio: "../audio/gamla.mp3" },
    { letter: "घ", word: "घड़ी", image: "../images/ghadi.png", audio: "../audio/ghadi.mp3" },
    { letter: "च", word: "चमचा", image: "../images/chammach.png", audio: "../audio/chammach.mp3" }, //changes req here
    { letter: "छ", word: "छाता", image: "../images/chatri.png", audio: "../audio/chatri.mp3" }, //changes req here
    { letter: "ज", word: "जहाज़", image: "../images/jahaz.png", audio: "../audio/jahaz.mp3" },
    { letter: "झ", word: "झंडा", image: "../images/jhanda.png", audio: "../audio/jhanda.mp3" },
    { letter: "ट", word: "टमाटर", image: "../images/tamatar.png", audio: "../audio/tamatar.mp3" }
  ];
  
  let current = 0;
  
  updateCard();
  
  function updateCard() {
    document.getElementById('letter').innerText = data[current].letter;
    document.getElementById('word').innerText = data[current].word;
    document.getElementById('image').src = data[current].image;
    document.getElementById('audio').src = data[current].audio;
  }
  
  function playAudio() {
    document.getElementById('audio').play();
  }
  
  function next() {
    current = (current + 1) % data.length;
    updateCard();
  }
  
  function prev() {
    current = (current - 1 + data.length) % data.length;
    updateCard();
  }
  