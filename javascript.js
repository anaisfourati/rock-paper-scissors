// Generate randomly rock, paper or scissor
// Prompt the user to enter rock, paper or scissor
// Check which player won
// Based on the result increase by 1 or 0 each player's score starting at 0
// Redo this process 5 times 
// Based on the results declare the final winner


// Create a function that randomly returns rock, paper or scissor

const myArray = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    return myArray[Math.floor(Math.random() * myArray.length)];
    // Explanation
    // const randomNumber = Math.random();
    // console.log(`Random Number = ${randomNumber}`);

    // const arrayLength = myArray.length;
    // console.log(`Array Length = ${arrayLength}`);

    // const multiplicationResult = randomNumber * arrayLength
    // console.log(`Multiplication result = ${multiplicationResult}`);

    // const roundedNumber = Math.floor(multiplicationResult);
    // console.log(`Rounded Number = ${roundedNumber}`);
    // return myArray[roundedNumber];
}

// Create a function that prompts the user to enter rock, paper or scissor and returns what the user entered

// let getHumanChoice = prompt("Choose between rock, paper or scissor!");

function getHumanChoice() {
    let promptUser = prompt("Choose between rock, paper or scissor!");

    if (getHumanChoice === "rock") {
        return "rock";
    } else if (getHumanChoice === "paper") {
        return "paper";
    } else if (getHumanChoice === "scissor") {
        return "scissor";
    }
    
}




