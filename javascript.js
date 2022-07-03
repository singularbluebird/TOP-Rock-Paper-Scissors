// Randomly returns Rock, Paper, or Scissors
function computerPlay() {
    let output = Math.floor(Math.random() * 3); 
    let decision;

    switch (output) {
        case 0:
            decision = "Rock";
            break;
        case 1:
            decision = "Paper";
        case 2:
            decision = "Scissors";
        default:
            return "Oops, something went wrong!";
    }

    return decision;
}