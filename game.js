
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




playGame();


function playGame(){
        let round = 0
        let humanScore = 0
        let computerScore = 0
        playRound();
        if (humanScore > computerScore){
            console.log("Your score is " + humanScore + " " + "the computer score is " + computerScore + " " + "you win!" );
        } else if (computerScore > humanScore){
            console.log("Your score is " + humanScore + " " + "the computer score is " + computerScore + " " + "you lose!" );
        } else {
            console.log("Your score is " + humanScore + " " + "the computer score is " + computerScore + " " + "it's a tie!" );
        }
    function playRound(humanChoice, computerChoice){
        if (round >= 0 && round < 5){
            round = round + 1;
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            humanChoice = humanSelection;
            computerChoice = computerSelection;
            if (humanChoice.substring(0).toLowerCase() === 'rock' && computerChoice === 'rock'){
                console.log("Rock and rock, it's a tie!");
                playRound(humanSelection, computerSelection);
            } else if (humanChoice.substring(0).toLowerCase() === 'rock' && computerChoice === 'paper'){
                computerScore = computerScore + 1;
                console.log("You lose! Paper beats rock.");
                playRound(humanSelection, computerSelection);
            } else if (humanChoice.substring(0).toLowerCase() === 'rock' && computerChoice === 'scissors'){
                humanScore = humanScore + 1;
                console.log("You win! Rock beats scissors.");
                playRound(humanSelection, computerSelection);
            } else if (humanChoice.substring(0).toLowerCase() === 'paper' && computerChoice === 'paper'){
                console.log("Paper and paper, it's a tie!");
                playRound(humanSelection, computerSelection);
            } else if (humanChoice.substring(0).toLowerCase() === 'paper' && computerChoice === 'rock'){
                humanScore = humanScore + 1;
                console.log("You win! Paper beats rock.");
                playRound(humanSelection, computerSelection);
            } else if (humanChoice.substring(0).toLowerCase() === 'paper' && computerChoice === 'scissors'){
                computerScore = computerScore + 1;
                console.log("You lose! Scissors beat paper.");
                playRound(humanSelection, computerSelection);
            } else if (humanChoice.substring(0).toLowerCase() === 'scissors' && computerChoice === 'scissors'){
                console.log("Scissors and scissors, it's a tie!");
                playRound(humanSelection, computerSelection);
            } else if (humanChoice.substring(0).toLowerCase() === 'scissors' && computerChoice === 'rock'){
                computerScore = computerScore + 1;
                console.log("You lose! Rock beats scissors!");
                playRound(humanSelection, computerSelection);
            } else if (humanChoice.substring(0).toLowerCase() === 'scissors' && computerChoice === 'paper'){
                humanScore = humanScore + 1;
                console.log("You win! Scissors beat paper!");
                playRound(humanSelection, computerSelection);
            } else {
                console.log("Incorrect choice. Enter a valid choice: rock, paper or scissors");
                playRound(humanSelection, computerSelection);
            }
        }       
        }
    
}

