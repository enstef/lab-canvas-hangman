var hangman;

function Hangman() {
  this.words = ["xylophon", "gnu"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  this.words.sort(function(){return Math.random()*0.5});
  this.secretWord = this.words[0];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  }
  else {
    return false;
  }
  
  // short:
  // return (keyCode >= 65 && keyCode <= 90)
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) === -1){
    return true
  }
  else {
    return false;
  }
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    return true;
  }
  else {
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
  if (this.secretWord === this.guessedLetter) {
    return true;
  }
  else {
    return false;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.checkWinner();
  this.guessedLetter = this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
};



document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
