let humanScore = 0
let computerScore = 0

function getComputerChoice (){
    value = Math.floor(Math.random() * 3) + 1;
    if (value === 1) {
        return "rock";
    } else if (value === 2) {
        return "paper";
    } else {
        return "scissors";
    }
} 



function getHumanChoice (){
    choice = prompt();
    return choice;
}


function playRound(humanChoice, computerChoice){

    if (humanChoice.substring(0).toLowerCase() === 'rock' && computerChoice === 'rock'){
        console.log("Rock and rock, it's a tie!");
    } else if (humanChoice.substring(0).toLowerCase() === 'rock' && computerChoice === 'paper'){
        computerScore = computerScore + 1;
        console.log("You lose! Paper beats rock.");
    } else if (humanChoice.substring(0).toLowerCase() === 'rock' && computerChoice === 'scissors'){
        humanScore = humanScore + 1;
        console.log("You win! Rock beats scissors.");
    } else if (humanChoice.substring(0).toLowerCase() === 'paper' && computerChoice === 'paper'){
        console.log("Paper and paper, it's a tie!");
    } else if (humanChoice.substring(0).toLowerCase() === 'paper' && computerChoice === 'rock'){
        humanScore = humanScore + 1;
        console.log("You win! Paper beats rock.");
    } else if (humanChoice.substring(0).toLowerCase() === 'paper' && computerChoice === 'scissors'){
        computerScore = computerScore + 1;
        console.log("You lose! Scissors beat paper.");
    } else if (humanChoice.substring(0).toLowerCase() === 'scissors' && computerChoice === 'scissors'){
        console.log("Scissors and scissors, it's a tie!");
    } else if (humanChoice.substring(0).toLowerCase() === 'scissors' && computerChoice === 'rock'){
        computerScore = computerScore + 1;
        console.log("You lose! Rock beats scissors!")
    } else {
        humanScore = humanScore + 1;
        console.log("You win! Scissors beat rock!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);