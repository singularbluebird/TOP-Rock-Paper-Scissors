// output variable is created outside of function because we'll access it later
// to determine the winner.
let output; 

const choices = ["Rock", "Scissors", "Paper"];

// These variables will be numbers associated with the player's selection 
// and similarly for the computer, they'll be used to determine who wins.
let computerChoice;
let playerChoice;

// Randomly returns Rock, Paper, or Scissors in the form of a number between 0
// and 2 inclusive
function computerPlay() {
    output = Math.floor(Math.random() * 3); 

    return output;
}

// Take inputs from the computer and the player and then determine who wins,
// displaying message at the end.
function gameRound(playerSelection, computerSelection) {

    let outcome;
    let winner;
    let looser;

    if (playerSelection - computerSelection === 0) {
        return "It's a tie!";
    }
    else if (modulo(playerSelection - computerSelection, 3) === 2) {
        outcome = "Win";
        winner = choices[playerSelection];
        looser = choices[computerSelection]
    }
    else {
        outcome = "Lose";
        looser = choices[playerSelection];
        winner = choices[computerSelection];
    }

    return `You ${outcome}! ${winner} beats ${looser}`;

}

// Takes word input of any kind and turns it into a number that can then be
// associated with the array of choices for the game.
function playerPlay(wordChoice) {

    let choice = wordChoice.charAt(0).toUpperCase() + wordChoice.slice(1).toLowerCase();

    let numChoice;

    for(let counter = 0; counter < 3; counter++) {
        
        if (choice === choices[counter]) {
            numChoice = counter;
        }
        else if (numChoice === undefined && counter === 2) {
            return "Oops, something went wrong!";
        }

    }

    return numChoice;
}

// I need a modulo function that returned the modulo class and not the remainder
// (the positive remainder).
function modulo(number, moded) {

    if (number%moded === 0) {
        return 0;
    }

    let difference = 0;

    while (number%moded !== 0) {

        difference++;
        number += difference;

    }

    result = moded - difference;

    return result;

}

