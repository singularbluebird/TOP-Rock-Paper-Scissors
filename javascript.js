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
    else if (((playerSelection + 1) % 3) - (computerSelection + 1) % 3 === -1) {
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

/** Your issue right now is that you want to have an array with all choices in the 
 * game, and then determine who the winner is by determining who has the greater
 * position in the array. YOu also need to be able to switch between the array and
 * the actual choice made in the game to both determine the winner and output a 
 * string to let the player know who won. You'll have to research arrays in 
 * javascript in order to see if you can achieve this.
 */