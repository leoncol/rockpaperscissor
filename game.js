let getHumanChoice;
let humanScore = 0
let computerScore = 0
let roundNumber = 0

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll(".gamebutton");
const playerHand = document.querySelector("#player-hand");
const computerHand = document.querySelector("#computer-hand");
const hands = document.querySelectorAll('.hand');


hands.forEach(hand => {
    hand.addEventListener('animationend', function(){
        this.style.animation = '';
    });
});

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Reset to rock before shaking
        playerHand.src = "./assets/rock.png"; // Assume rock image is named "rock.png"
        playerHand.style.animation = "shakePlayer 2s ease";

        // Reset computer hand to rock and start shake animation
        computerHand.src = "./assets/rock.png"; // Rock image
        computerHand.style.animation = "shakeComputer 2s ease";

        // Wait for the animation to finish, then change to the chosen hand
        setTimeout(() => {
            playerHand.src = `./assets/${button.id}`;
            playerHand.style.animation = ""; // Reset animation for future clicks
            getHumanChoice = button.id;

        // Update computer hand choice
        getComputerChoice();
        computerHand.style.animation = ""; // Reset animation for future clicks

            playGame(); // Play the game after the choice has been made
        }, 2000); // Match the animation duration (2s)
    });
});

const newgame = document.querySelector("#newgame");

newgame.addEventListener("click", newGame);

function newGame (){
    humanScore = 0
    computerScore = 0
    roundNumber = 0;
    const text = document.querySelector("#result");
    text.textContent = "";
    const score = document.querySelector("#score");
    score.textContent = "";
    const count = document.querySelector("#count");
    count.textContent = "-";
    playerHand.src = `./assets/rock.png`;
    computerHand.src = `./assets/rock.png`;
    gameOverMessage.textContent = "";
    buttons.forEach((button) => {
        button.disabled = false;
    });

}

function getComputerChoice (){
    value = Math.floor(Math.random() * 3) + 1;
    if (value === 1) {
        computerHand.src = "./assets/rock.png";
        return "rock.png";
    } else if (value === 2) {
        computerHand.src = "./assets/paper.png";
        return "paper.png";
    } else {
        computerHand.src = "./assets/scissors.png";
        return "scissors.png";
    }
} 


function playGame(){
        playRound();
        if ((humanScore == 2) && (humanScore > computerScore)){
            alert("Your score is " + humanScore + " " + "the computer score is " + computerScore + " " + "you win!" );
            alert(`Press the "Start a new game" button to begin a new game.`);
            triggerConfetti();
            buttons.forEach((button) => {
                button.disabled = true;
            });
        } else if ((computerScore == 2) && (computerScore > humanScore)){
            alert("Your score is " + humanScore + " " + "the computer score is " + computerScore + " " + "you lose!" );
            alert(`Press the "Start a new game" button to begin a new game.`);
            triggerGameOver();
            buttons.forEach((button) => {
                button.disabled = true;
            });
        } 
}
    function playRound(humanChoice, computerChoice){
            const humanSelection = getHumanChoice;
            const computerSelection = getComputerChoice();
            humanChoice = humanSelection;
            computerChoice = computerSelection;
            if (humanChoice.substring(0).toLowerCase() === 'rock.png' && computerChoice === 'rock.png'){
                roundNumber += 1;
                const text = document.querySelector("#result");
                text.textContent = "Rock and rock, it's a tie!";
                const score = document.querySelector("#score");
                score.textContent = `Computer score: ${computerScore} Human score: ${humanScore}`;
                const count = document.querySelector("#count");
                count.textContent = `${roundNumber}`;
            } else if (humanChoice.substring(0).toLowerCase() === 'rock.png' && computerChoice === 'paper.png'){
                roundNumber += 1;
                computerScore += 1;
                const text = document.querySelector("#result");
                text.textContent = "You lose! Paper beats rock.";
                const score = document.querySelector("#score");
                score.textContent = `Computer score: ${computerScore} Human score: ${humanScore}`;
                const count = document.querySelector("#count");
                count.textContent = `${roundNumber}`;
            } else if (humanChoice.substring(0).toLowerCase() === 'rock.png' && computerChoice === 'scissors.png'){
                roundNumber += 1;
                humanScore += 1;
                const text = document.querySelector("#result");
                text.textContent = "You win! Rock beats scissors.";
                const score = document.querySelector("#score");
                score.textContent = `Computer score: ${computerScore} Human score: ${humanScore}`;
                const count = document.querySelector("#count");
                count.textContent = `${roundNumber}`;
            } else if (humanChoice.substring(0).toLowerCase() === 'paper.png' && computerChoice === 'paper.png'){
                roundNumber += 1;
                const text = document.querySelector("#result");
                text.textContent = "Paper and paper, it's a tie!";
                const score = document.querySelector("#score");
                score.textContent = `Computer score: ${computerScore} Human score: ${humanScore}`;
                const count = document.querySelector("#count");
                count.textContent = `${roundNumber}`;
            } else if (humanChoice.substring(0).toLowerCase() === 'paper.png' && computerChoice === 'rock.png'){
                roundNumber += 1;
                humanScore += 1;
                const text = document.querySelector("#result");
                text.textContent = "You win! Paper beats rock.";
                const score = document.querySelector("#score");
                score.textContent = `Computer score: ${computerScore} Human score: ${humanScore}`;
                const count = document.querySelector("#count");
                count.textContent = `${roundNumber}`;
            } else if (humanChoice.substring(0).toLowerCase() === 'paper.png' && computerChoice === 'scissors.png'){
                roundNumber += 1;
                computerScore += 1;
                const text = document.querySelector("#result");
                text.textContent = "You lose! Scissors beat paper.";
                const score = document.querySelector("#score");
                score.textContent = `Computer score: ${computerScore} Human score: ${humanScore}`;
                const count = document.querySelector("#count");
                count.textContent = `${roundNumber}`;
            } else if (humanChoice.substring(0).toLowerCase() === 'scissors.png' && computerChoice === 'scissors.png'){
                roundNumber += 1;
                const text = document.querySelector("#result");
                text.textContent = "Scissors and scissors, it's a tie!";
                const score = document.querySelector("#score");
                score.textContent = `Computer score: ${computerScore} Human score: ${humanScore}`;
                const count = document.querySelector("#count");
                count.textContent = `${roundNumber}`;
            } else if (humanChoice.substring(0).toLowerCase() === 'scissors.png' && computerChoice === 'rock.png'){
                roundNumber += 1;
                computerScore += 1;
                const text = document.querySelector("#result");
                text.textContent = "You lose! Rock beats scissors!";
                const score = document.querySelector("#score");
                score.textContent = `Computer score: ${computerScore} Human score: ${humanScore}`;
                const count = document.querySelector("#count");
                count.textContent = `${roundNumber}`;
            } else if (humanChoice.substring(0).toLowerCase() === 'scissors.png' && computerChoice === 'paper.png'){
                roundNumber += 1;
                humanScore += 1;
                const text = document.querySelector("#result");
                text.textContent = "You win! Scissors beat paper!";
                const score = document.querySelector("#score");
                score.textContent = `Computer score: ${computerScore} Human score: ${humanScore}`;
                const count = document.querySelector("#count");
                count.textContent = `${roundNumber}`;
            }
        }       
        
    
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }, // Center of the screen
    });
}

function triggerGameOver() {
    const gameOverMessage = document.querySelector("#gameOverMessage");

    // Update the text content
    gameOverMessage.textContent = "Game Over, you lose!";

    // Remove the existing animation (if any)
    gameOverMessage.style.animation = 'none';

    // Trigger a reflow to restart the animation
    gameOverMessage.offsetHeight; // This is a trick to force the reflow

    // Reapply the animation
    gameOverMessage.style.animation = 'fallAndFade 5s forwards';

    // Make the message visible if it isn't already
    gameOverMessage.style.opacity = 1;
}