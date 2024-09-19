const playerSelection = parseInt(prompt('Lets Play Rock, Paper and Scissors\n 1. for Rock, 2. for Paper 3. for Scissors'))
const computerSelection = Math.floor(Math.random() * 3) + 1

function getComputerChoice() {
    if (computerSelection == 1) {
        return 'Rock'
    } else if (computerSelection == 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

console.log(`Computer chose ${getComputerChoice()}`);

function getPlayerChoice() {
    if (playerSelection == 1) {
        return 'Rock'
    } else if (playerSelection == 2) {
        return 'Paper'
    } else if (playerSelection == 3) {
        return 'Scissors'
    } else {
        return 'Incorrect Choice'
    }
}

console.log(`You chose ${getPlayerChoice()}`)

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 1 && computerSelection == 3 || playerSelection == 2 && computerSelection == 1 || playerSelection == 3 && computerSelection == 2) {
        return 'You Win!'
    } else if (playerSelection == 1 && computerSelection == 2 || playerSelection == 2 && computerSelection == 3 || playerSelection == 3 && computerSelection == 1) {
        return 'You Loose!'
    } else {
        return 'Its a Tie'
    }
}

if (playRound(playerSelection, computerSelection) == 'You Win!') {
    console.log(`${playRound(playerSelection, computerSelection)} ${getPlayerChoice()} beats ${getComputerChoice()}`)
} else if (playRound(playerSelection, computerSelection) == 'You Loose!') {
    console.log(`${playRound(playerSelection, computerSelection)} ${getComputerChoice()} beats ${getPlayerChoice()}`)
} else {
    console.log(playRound(playerSelection, computerSelection))
}

let playerScore = 0
let computerScore = 0