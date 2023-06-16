
// Tracking Scores and the winner of that round
let playerScore = 0;
let computerScore = 0;
let roundStatus = "";

// UI buttons users to interact with
const rockButton = document.querySelector('#rbtn');
const paperButton = document.querySelector('#pbtn');
const scissorsButton = document.querySelector('#sbtn');
const rstButton = document.querySelector('#restartbtn');

// Scoredboard
const winnerStatus = document.querySelector('#status');
const player = document.querySelector('#player-Score');
const computer = document.querySelector('#computer-Score');


// final scores
const finalMessage = document.querySelector('#final-message');

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    const indexNum = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[indexNum];
}

function isGameFinished() {
    return playerScore == 3 || computerScore == 3; 
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
    if(winner == "computer") {
        winnerStatus.textContent = "You lose!";
    } else if (winner == "player"){
        winnerStatus.textContent = "You win!";
    } else {
        winnerStatus.textContent = "Draw!";
    }
    player.textContent = `Player: ${playerScore}`;
    computer.textContent = `Computer: ${computerScore}`;
}

function finalStatus() {
    return (playerScore < computerScore) ? (finalMessage.textContent = 'You lose!') : (finalMessage.textContent = 'You win!');
}

// refactor
rockButton.addEventListener("click", (e) => {
    playerWordSelection = e.target.textContent;
    ComputerWordSelection = getComputerChoice();
    if (isGameFinished()) {
        return;
    }
    playRound(playerWordSelection, ComputerWordSelection);
    updateScore();
    if (isGameFinished()) {
        finalStatus();
        return;
    }
    console.log(playerScore);
    console.log(computerScore);
    console.log(roundStatus);
});

paperButton.addEventListener("click", (e) => {
    playerWordSelection = e.target.textContent;
    ComputerWordSelection = getComputerChoice();

    if (isGameFinished()) {
        return;
    }
    playRound(playerWordSelection, ComputerWordSelection);
    updateScore();
    if (isGameFinished()) {
        finalStatus();
        return;
    }
    console.log(playerScore);
    console.log(computerScore);
    console.log(roundStatus);
});

scissorsButton.addEventListener("click", (e) => {
    playerWordSelection = e.target.textContent;
    ComputerWordSelection = getComputerChoice();

    if (isGameFinished()) {
        return;
    }
    playRound(playerWordSelection, ComputerWordSelection);
    updateScore();
    if (isGameFinished()) {
        finalStatus();
        return;
    }
    console.log(playerScore);
    console.log(computerScore);
    console.log(roundStatus);
});

rstButton.addEventListener("click", (e) => {
    playerScore = 0;
    computerScore = 0;
    player.textContent = "Player: 0";
    computer.textContent = "Computer: 0";
    winnerStatus.textContent = "";
    finalMessage.textContent = "";
    console.log(playerScore);
    console.log(computerScore);
});



