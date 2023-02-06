const prompt = require('prompt-sync')({sigint: true});

let num = Math.floor(Math.random() * 100) + 1;
let guess = Number(prompt("I'm thinking of a number bewtween 1 and 100. Try to guess it: "));
let count = 1;

while (guess != num && count < 3) {
    if (guess > num) {
        console.log("Sorry, too high!");
    } else {
        console.log("Sorry, too low!");
    }
    guess = Number(prompt('Guess again: '));
    count++;
} if (guess === num) {
    console.log("Congratulations, "+num+" is correct!");
} else {
    console.log("You lose! the number was "+num+".");
}