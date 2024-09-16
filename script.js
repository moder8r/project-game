const computer = Math.floor(Math.random() * 3);

function getComputerChoice(computer) {
    if(computer === 0) {
        return 'Rock'
    } else if (computer === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

console.log(getComputerChoice(computer))

const player = parseInt(prompt('Enter 1 for Rock, 2 for Paper and 3 for Scissors'))

function getHumanChoice(player) {
    if (player === 1) {
        return 'Rock'
    } else if (player === 2) {
        return 'Paper'
    } else if (player === 3) {
        return 'Scissors'
    } else {
        return 'Incorrect Entry'
    }
}

console.log(getHumanChoice(player));