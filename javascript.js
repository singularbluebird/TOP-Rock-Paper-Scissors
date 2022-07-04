// output variable is created outside of function because we'll access it later
// to determine the winner.
let output; 

const choices = ["Rock", "Scissors", "Paper"];

// These variables will be numbers associated with the player's selection 
// and similarly for the computer, they'll be used to determine who wins.
let computerChoice;
let playerChoice;

// Randomly returns Rock, Paper, or Scissors
function computerPlay() {
    output = Math.floor(Math.random() * 3); 
    let decision;

    switch (output) {
        case 0:
            decision = "Rock";
            break;
        case 1:
            decision = "Paper";
            break;
        case 2:
            decision = "Scissors";
            break;
        default:
            return "Oops, something went wrong!";
    }

    return decision;
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
    else if (playerSelection - computerSelection > 0) {
        outcome = "Win";
        winner = playerSelection;
    }
    else {
        outcome = "Lose";
        looser = computerSelection;
    }

    return `You ${outcome}! ${winner} beats ${looser}`;

}

/** Your issue right now is that you want to have an array with all choices in the 
 * game, and then determine who the winner is by determining who has the greater
 * position in the array. YOu also need to be able to switch between the array and
 * the actual choice made in the game to both determine the winner and output a 
 * string to let the player know who won. You'll have to research arrays in 
 * javascript in order to see if you can achieve this.
 */