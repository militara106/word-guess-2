function Letter(char) {
    this.char = char;
    this.guessed = false;

    // Returns placeholder or letter based on guessed boolean
    this.write = function () {
        if (this.guessed == false) {
            return "_ ";
        } else {
            return char + " ";
        }
    }

    // Checks if char is the same as guess
    this.check = function (guess) {
        if (this.char == guess) {
            this.guessed = true;
        }
        // console.log(this.guessed);
    }

}

// var x = new Letter("a");
// x.check("b");
// console.log(x.write()+"_");
// x.check("a");
// x.check("b");
// console.log(x.write()+"_");

module.exports = Letter;