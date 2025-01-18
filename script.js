alert(`Let's play Rock Paper Scissors.`)
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

function getPlayerChoice() {
    let choice = prompt('Enter Your Choice:').toLowerCase();
    return choice;
}

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
    alert(`Your Score = ${playerScore} | Computer Score = ${computerScore}`)
}

playGame()