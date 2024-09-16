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