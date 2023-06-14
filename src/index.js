
function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"];
    const indexNum = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[indexNum];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Draw";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() === "paper"){
        return "Computer wins";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() === "scissors"){
        return "Computer wins";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() === "paper"){
        return "Computer wins";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() === "rock"){
        return "Player wins";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() === "scissors"){
        return "Player wins";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() === "paper"){
        return "Player wins";
    } else {
        return "Error";
    }
  }

function game() {
    
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));