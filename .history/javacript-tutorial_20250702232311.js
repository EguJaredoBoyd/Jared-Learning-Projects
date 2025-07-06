let cartQuantity = 0;
function cartDisplay(){
    document.getElementById('cart-quantity').innerHTML = cartQuantity;
};

function addCart(){
    cartQuantity = cartQuantity + 1;
};

function addCart2(){
    cartQuantity += 2;
};

function addCart3(){
    cartQuantity += 3;
};

function cartReset(){
    alert("Cart has been reset");
    cartQuantity = 0;
};



let computerMove = '';
let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

// Look at computer's notepad to remember old score
const storage = localStorage.getItem('gameScore');
if (storage) {
    score = JSON.parse(storage);
}

function selectRock() {
    let randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';
    if (computerMove === 'rock') result = 'tie';
    else if (computerMove === 'paper') result = 'lose';
    else result = 'win';

    updateScore(result);

    alertResult('rock', result);
}

function selectPaper() {
    let randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';
    if (computerMove === 'paper') result = 'tie';
    else if (computerMove === 'scissors') result = 'lose';
    else result = 'win';

    updateScore(result);

    alertResult('paper', result);
}

function selectScissors() {
    let randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';
    if (computerMove === 'scissors') result = 'tie';
    else if (computerMove === 'rock') result = 'lose';
    else result = 'win';

    updateScore(result);

    alertResult('scissors', result);
}

function updateScore(result) {
    if (result === 'win') score.wins += 1;
    else if (result === 'lose') score.losses += 1;
    else score.ties += 1;

    localStorage.setItem('gameScore', JSON.stringify(score));
}

function alertResult(playerChoice, result) {
    let message = `You picked ${playerChoice} and the computer picked ${computerMove}, you ${result}!\n`;
    message += `You have ${score.wins} wins, ${score.losses} losses, and ${score.ties} ties.`;

    alert(message);
}

function selectReset() {
    score = { wins: 0, losses: 0, ties: 0 };
    localStorage.removeItem('gameScore');
    alert("Your score has been reset.");
}
