// Generate randomly rock, paper or scissor
// Prompt the user to enter rock, paper or scissor
// Check which player won
// Based on the result increase by 1 or 0 each player's score starting at 0
// Redo this process 5 times 
// Based on the results declare the final winner


// Create a function that randomly returns rock, paper or scissor

const myArray = ['rock', 'paper', 'scissor'];
let humanScore = 0;
let computerScore = 0;

function playRound() {
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("That's a draw! Try again...");
    } 

    if (humanChoice === 'rock' && computerChoice === 'scissor') {
        score(true);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        score(true);
    } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
        score(true);
    }  else {
        score(false);
    }

    console.log(computerChoice);
    console.log(humanScore);

    // Functions that playRound needs to run
    function getHumanChoice() {
        let userChoice = prompt("Choose between rock, paper or scissor!");
        return userChoice
    }

    function getComputerChoice() {
        return myArray[Math.floor(Math.random() * myArray.length)];
    }

    function score(humanWon) {
        if (humanWon) {
            console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        } else {
            console.log(`You lost... ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        }
    }
}




console.log(playRound());

