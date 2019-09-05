var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.arr = word.split("");
    this.letters = [];
    this.str = "";
    for (var i = 0; i < this.arr.length; i++) {
        this.letters[i] = new Letter(this.arr[i]);
    }

    // Displays word
    this.display = function () {
        this.str = "";
        for (var i = 0; i < this.letters.length; i++) {
            this.str += this.letters[i].write();
        }
        console.log(this.str);
    }

    // Checks guess and updates letters array
    this.guessCheck = function (guess){
        for(var i = 0; i < this.letters.length; i++){
            this.letters[i].check(guess);
        }
        this.display();
    }
}

// var x = new Word("hello");
// x.guessCheck("e");
// x.guessCheck("h");
// x.guessCheck("o");
// x.guessCheck("l");

module.exports = Word;