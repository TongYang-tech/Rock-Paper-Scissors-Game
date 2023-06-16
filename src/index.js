
// Tracking Scores and the winner of that round
let playerScore = 0;
let computerScore = 0;
let roundStatus = "";

// UI buttons users to interact with
const rockButton = document.querySelector('#rbtn');
const paperButton = document.querySelector('#pbtn');
const scissorsButton = document.querySelector('#sbtn');

// Scoredboard
const winnerStatus = document.querySelector('#status');
const player = document.querySelector('#player-Score');
const computer = document.querySelector('#computer-Score');

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    const indexNum = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[indexNum];
}

function isGameFinished() {
    return playerScore == 2 || computerScore == 2; 
}

function playRound(playerSelection, computerSelection) {
    pSelect = playerSelection.toLowerCase();
    cSelect = computerSelection.toLowerCase();
    if (pSelect === cSelect) {
        roundStatus = "draw";
    }
    
    if (pSelect == "rock" && cSelect == "paper" || pSelect == "paper" && cSelect == "scissors" || pSelect == "scissors" && cSelect == "paper"){
        computerScore++;
        roundStatus = "computer";
    }
    
    if (pSelect == "paper" && cSelect == "rock" || pSelect == "rock" && cSelect == "scissors" || pSelect == "scissors" && cSelect == "paper"){
        playerScore++;
        roundStatus = "player";
    }
}

function updateScore() {
    winner = roundStatus.toLowerCase();
    player.textContent = `Player: ${playerScore}`;
    computer.textContent = `Computer: ${computerScore}`;
    
    if(winner == "computer") {
        winnerStatus.textContent = "You lose!";
    } else if (winner == "player"){
        winnerStatus.textContent = "You win!";
    } else {
        winnerStatus.textContent = "Draw!";
    }


}


// refactor
rockButton.addEventListener("click", (e) =>{
    playerWordSelection = e.target.textContent;
    ComputerWordSelection = getComputerChoice();

    if (isGameFinished()) {
        return;
    }
    playRound(playerWordSelection, ComputerWordSelection);
    updateScore();
    console.log(playerScore);
    console.log(computerScore);
    console.log(roundStatus);
});

paperButton.addEventListener("click", (e) =>{
    playerWordSelection = e.target.textContent;
    ComputerWordSelection = getComputerChoice();

    if (isGameFinished()) {
        return;
    }
    playRound(playerWordSelection, ComputerWordSelection);
    updateScore();
    console.log(playerScore);
    console.log(computerScore);
    console.log(roundStatus);
});

scissorsButton.addEventListener("click", (e) =>{
    playerWordSelection = e.target.textContent;
    ComputerWordSelection = getComputerChoice();

    if (isGameFinished()) {
        return;
    }
    playRound(playerWordSelection, ComputerWordSelection);
    updateScore();
    console.log(playerScore);
    console.log(computerScore);
    console.log(roundStatus);
});


