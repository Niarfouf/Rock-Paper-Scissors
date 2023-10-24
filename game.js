//A function that randomly return rock, paper or scissors (it simulates the player's opponent)
function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    switch (randomNumber) {
        case 1: 
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors"
            break;
    }
    return computerChoice;
}
function getNumberFromString(choiceString) {
    let choiceNumber;
    switch (choiceString) {
        case "rock":
            choiceNumber = 1;
            break;
        case "paper":
            choiceNumber = 2;
            break;
        case "scissors":
            choiceNumber = 3;
            break;
    }
    return choiceNumber;
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let playerNumber = getNumberFromString(playerSelection)
    let computerNumber = getNumberFromString(computerSelection)
    
    if (playerNumber - computerNumber === 0) {
        return `Tie, ${playerSelection} ties with ${computerSelection}`
    } else if (playerNumber - computerNumber === - 1 || playerNumber - computerNumber === 2) {
        return `You lose, ${playerSelection} loses versus ${computerSelection}`
    } else {
        return `You win, ${playerSelection} wins versus ${computerSelection}`
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));