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


console.log(getComputerChoice())