// output variable is created outside of function because we'll access it later
// to determine the winner.
let output; 

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