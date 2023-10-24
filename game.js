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
        return 0
    } else if (playerNumber - computerNumber === - 1 || playerNumber - computerNumber === 2) {
        return 1
    } else {
        return 2
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection
    while (playerScore < 3 && computerScore < 3) {
        do {
             playerSelection = prompt("Rock, paper or scissors?")
        } while (!playerSelection)
        
        let computerSelection = getComputerChoice()
        let roundResult = playRound(playerSelection, computerSelection)
        if (roundResult === 0) {
            console.log(`Tie, ${playerSelection} ties with ${computerSelection}`)
        } else if (roundResult === 1) {
            console.log(`You lose, ${playerSelection} loses versus ${computerSelection}`)
            computerScore++
        } else {
            console.log(`You win, ${playerSelection} wins versus ${computerSelection}`)
            playerScore++
        }
    }
    if (playerScore === 3) {
        return console.log(`You win ${playerScore} to ${computerScore} vs the computer`)
    } else {
        return console.log(`You lose ${playerScore} to ${computerScore} vs the computer`)
    }  
}

game()