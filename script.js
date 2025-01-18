alert(`Let's play Rock Paper Scissors.`)

//TASK 1: Creating a function that randomly chooses between three choices.
//Arrays are not being used as they were not yet introduced in The Odin Project curriculum.

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        return 'rock';
    } else if (randomNumber == 2) {
        return 'paper';
    } else if (randomNumber == 3) {
        return 'scissors';
    }
}

//TASK 2: Creating a function that takes in player choice.

function getPlayerChoice() {
    let choice = prompt('Your Move\n\nEnter rock, paper or scissors').toLowerCase();
    return choice;
}

//TASK 3: Creating the game function.

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert(`You chose ${playerSelection} against ${computerSelection}\nIt's a Tie!`);
        return 'Tie'
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        alert(`You chose ${playerSelection} against ${computerSelection}\nYou Win!`);
        return 'You Win!'
    } else {
        alert(`You chose ${playerSelection} against ${computerSelection}\nYou Loose!`);
        return 'You Loose!'
    }
}

//TASK 4: Looping that game function 5 times. for loop was used for this purpose.
//for loops were not yet covered in the curriculum as well but could not think of any other way to achieve this. 

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const win = playRound(playerSelection, computerSelection);
        console.log(win);
        if (win === 'You Win!') {
            playerScore++
        } else if (win === 'You Loose!') {
            computerScore++
        }
    }
    if (playerScore > computerScore) {
        alert(`You Win!\n\nYour Score = ${playerScore}\nComputer Score = ${computerScore}`)
    } else if (playerScore < computerScore) {
        alert(`You Loose!\n\nYour Score = ${playerScore}\nComputer Score = ${computerScore}`)
    }
}

//Calling the function that puts it all in motion.

playGame();