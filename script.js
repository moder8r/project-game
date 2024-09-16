let cpu = Math.floor(Math.random() * 3)
let player = parseInt(prompt('Enter 1 for Rock, 2 for Paper and 3 for Scissors'))

function cpuChoice(cpu) {
    if (cpu === 0) {
        return 'CPU chose Rock'
    } else if (cpu === 1) {
        return 'CPU chose Paper'
    } else {
        return 'CPU chose Scissors'
    }
}

function playerChoice(player) {
    if (player === 1) {
        return 'You chose Rock'
    } else if (player === 2) {
        return 'You chose Paper'
    } else if (player === 3) {
        return 'You chose Scissors'
    } else {
        return 'Incorrect Choice'
    }
}

console.log(playerChoice(player))
console.log(cpuChoice(cpu))

function playRound(player, cpu) {
    if (cpu === 0 && player === 1) {
        return 'Its a Tie!'
    } else if (cpu === 0 && player === 2) {
        return 'You Win! Paper beats Rock'
    } else if (cpu === 0 && player === 3) {
        return 'You Loose! Rock beats Scissors'
    } else if (cpu === 1 && player === 1) {
        return 'You Loose! Paper beats Rock'
    } else if (cpu === 1 && player === 2) {
        return 'Its a Tie'
    } else if (cpu === 1 && player === 3) {
        return 'You Win! Scissors beat Paper'
    } else if (cpu === 2 && player === 1) {
        return 'You Win! Rock beats Scissors'
    } else if (cpu === 2 && player === 2) {
        return 'You Loose! Scissors beat Paper'
    } else if (cpu === 2 && player === 3) {
        return 'Its a Tie'
    } else {
        return 'Incorrect Entry'
    }
}

console.log(playRound(player, cpu))