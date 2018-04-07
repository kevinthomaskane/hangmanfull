
var wordBank = ["hello", "bed", "blanket", "computer", "mouse", "bike", "elephant", "table"]
var compChoice;
var guesses;
var userGuess;

compChoose();

function compChoose() {
  var i = Math.floor(Math.random() * wordBank.length);
  compChoice = wordBank[i];
  console.log(compChoice)
  guesses = compChoice.length;
  writeSpaces();
}

function writeSpaces() {
  for (let i = 0; i < compChoice.length; i++) {
    console.log("hello")
    $("#spaces").append("_ ");
  }
}

$(document).keypress(function (event) {
  userGuess = String.fromCharCode(event.which);
  checkCorrect();
});

function checkCorrect(){
  for (let i = 0; i < compChoice.length; i++){
    if (userGuess === compChoice[i]){
      $("#spaces").append(compChoice[i]);
    } else {
      $("#spaces").append("_ ");
    }
  }
}

function checkWin(){
  
}