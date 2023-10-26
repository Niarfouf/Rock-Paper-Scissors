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

const body = document.querySelector(".container")
const icons = document.querySelector(".icons")
const icon = document.querySelectorAll(".icon")
const logo = document.querySelector("#logo")
const buttons = document.querySelectorAll("button")
const resultDiv = document.querySelector("#result-div")
const playerScoreDiv = document.createElement("div")
const computerScoreDiv = document.createElement("div")
const playAgain = document.createElement("button")
playAgain.classList.add("again")
playAgain.textContent = "Play again?"
playerScoreDiv.classList.add("score")
computerScoreDiv.classList.add("score")
let playerScore = 0;
let computerScore = 0;


playAgain.addEventListener("click", function() {
    document.location.href = 'index.html';
})
buttons.forEach(button => {
    button.addEventListener("click", function() {
        let score = document.querySelectorAll(".score")
        if (score.length === 0) {
            icons.insertBefore(playerScoreDiv, icon[0])
            icons.appendChild(computerScoreDiv)
            
        }
        
        let playerSelection = button.value
        let computerSelection = getComputerChoice()
        
        let roundResult = playRound(playerSelection, computerSelection)
        
        if (roundResult === 0) {
            resultDiv.textContent = `Tie, ${playerSelection} ties with ${computerSelection}`
        } else if (roundResult === 1) {
            resultDiv.textContent = `You lose, ${playerSelection} loses versus ${computerSelection}`
            computerScore++
        } else {
            resultDiv.textContent = `You win, ${playerSelection} wins versus ${computerSelection}`
            playerScore++
        }
        playerScoreDiv.textContent = `Player: ${playerScore}`
        computerScoreDiv.textContent = `Computer: ${computerScore}`
        if (computerScore === 5) {
            resultDiv.textContent = `You lose the game, final score is ${playerScore} for you and ${computerScore} for the computer, try again!`
            icon.forEach(e => {
                icons.removeChild(e)
            })
            icons.insertBefore(playAgain, computerScoreDiv)
        } else if (playerScore === 5 ) {
            resultDiv.textContent = `You win the game, final score is ${playerScore} for you and ${computerScore} for the computer, good job!`
            icon.forEach(e => {
                icons.removeChild(e)
            })
            icons.insertBefore(playAgain, computerScoreDiv)
        }
        
        
        })  
})