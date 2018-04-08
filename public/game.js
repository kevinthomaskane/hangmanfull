
var wordBank = ["hello", "bed", "blanket", "computer", "mouse", "bike", "elephant", "table"]
var compChoice;
var guesses;
var userGuess;
var spaces = [];

compChoose();

function compChoose() {
  var i = Math.floor(Math.random() * wordBank.length);
  compChoice = wordBank[i];
  console.log(compChoice)
  guesses = compChoice.length;
  $("#guesses").text(guesses)
  writeSpaces();
}

function writeSpaces() {
  for (let i = 0; i < compChoice.length; i++) {
    spaces.push("_")
    $("#spaces").append(spaces[i] + " ");
  }
}

function printCorrect() {
  $("#spaces").empty();
  for (let i = 0; i < spaces.length; i++) {
    $("#spaces").append(spaces[i] + " ")
  }
}

$(document).keypress(function (event) {
  userGuess = String.fromCharCode(event.which);
  console.log(userGuess)
  checkCorrect();
});

function checkCorrect() {
  var correct;
  for (let i = 0; i < compChoice.length; i++) {
    if (userGuess === compChoice[i]) {
      spaces[i] = userGuess;
      printCorrect();
      checkWin();
      correct = true;
    }  
  }
  if (correct === undefined){
    console.log("in if")
    guesses--
    $("#guesses").text(guesses)
    checkLoss();
  }
}

function checkWin() {
  if (compChoice === spaces.join("")) {
    alert("you win")
    setTimeout(reset, 3000);
  }
}

function checkLoss() {
  if (guesses === 0) {
    alert("you lose");
    setTimeout(reset, 3000);
  }
}

function reset() {
  $("#spaces").empty();
  spaces = [];
  compChoice;
  guesses;
  userGuess;
  spaces = [];
  compChoose();
}