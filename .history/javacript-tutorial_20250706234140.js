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

function subscribe () {
    let subClick = document.querySelector('.sub-button');
        if (subClick.innerHTML === 'Subscribe') {
            subClick.innerHTML = 'Subscribed'
            subClick.classList.add('sub-button-two');
        } else{
            subClick.innerHTML = 'Subscribe'
            subClick.classList.remove('sub-button-two');

        }
    }




let computerMove = '';
let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

// ✅ Fix 1: Load saved score if it exists in localStorage
const storage = localStorage.getItem('gameScore');
if (storage) {
    score = JSON.parse(storage);
}

console.log(score); // Optional: Just to confirm score is loaded

function selectRock() {
    // ✅ Fix 2: New random number every time the function runs
    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';
    if (computerMove === 'rock') {
        result = 'tie';
    } else if (computerMove === 'paper') {
        result = 'lose';
    } else if (computerMove === 'scissors') {
        result = 'win';
    }

    let newResult = '';
    if (result === 'win') {
        score.wins += 1;
        newResult = 'wins!';
    } else if (result === 'lose') {
        score.losses += 1;
        newResult = 'losses!';
    } else {
        score.ties += 1;
        newResult = 'ties!';
    }

    // ✅ Fix 3: Save updated score to localStorage
    localStorage.setItem('gameScore', JSON.stringify(score));

    let newScore, valueOne, valueTwo, outcomeOne, outcomeTwo;

    if (newResult === 'wins!') {
        newScore = score.wins;
        valueOne = score.losses;
        outcomeOne = 'losses';
        valueTwo = score.ties;
        outcomeTwo = 'ties';
    } else if (newResult === 'losses!') {
        newScore = score.losses;
        valueOne = score.wins;
        outcomeOne = 'wins';
        valueTwo = score.ties;
        outcomeTwo = 'ties';
    } else {
        newScore = score.ties;
        valueOne = score.wins;
        outcomeOne = 'wins';
        valueTwo = score.losses;
        outcomeTwo = 'losses';
    }

    alert(`You picked rock and the computer picked ${computerMove}, you ${result}!
You have ${newScore} ${newResult}, ${valueOne} ${outcomeOne}, and ${valueTwo} ${outcomeTwo}`);

    let rock = document.querySelector('.win-paragraph');
    rock.innerHTML = (`You picked rock and the computer picked ${computerMove}, you ${result}!
    You have ${newScore} ${newResult}, ${valueOne} ${outcomeOne}, and ${valueTwo} ${outcomeTwo}`);

    let rockMove = document.querySelector('.move-paragraph');
    rockMove.innerHTML = (`You - rock : ${computerMove} - Computer`);

    let rockScore = document.querySelector('.score-paragraph');
    rockScore.innerHTML = (`You ${result}!`)

}

function selectPaper() {
    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';
    if (computerMove === 'paper') {
        result = 'tie';
    } else if (computerMove === 'scissors') {
        result = 'lose';
    } else if (computerMove === 'rock') {
        result = 'win';
    }

    let newResult = '';
    if (result === 'win') {
        score.wins += 1;
        newResult = 'wins!';
    } else if (result === 'lose') {
        score.losses += 1;
        newResult = 'losses!';
    } else {
        score.ties += 1;
        newResult = 'ties!';
    }

    localStorage.setItem('gameScore', JSON.stringify(score));

    let newScore, valueOne, valueTwo, outcomeOne, outcomeTwo;

    if (newResult === 'wins!') {
        newScore = score.wins;
        valueOne = score.losses;
        outcomeOne = 'losses';
        valueTwo = score.ties;
        outcomeTwo = 'ties';
    } else if (newResult === 'losses!') {
        newScore = score.losses;
        valueOne = score.wins;
        outcomeOne = 'wins';
        valueTwo = score.ties;
        outcomeTwo = 'ties';
    } else {
        newScore = score.ties;
        valueOne = score.wins;
        outcomeOne = 'wins';
        valueTwo = score.losses;
        outcomeTwo = 'losses';
    }

    alert(`You picked paper and the computer picked ${computerMove}, you ${result}!
You have ${newScore} ${newResult}, ${valueOne} ${outcomeOne}, and ${valueTwo} ${outcomeTwo}`);

    let paper = document.querySelector('.win-paragraph');
        paper.innerHTML = `You picked paper and the computer picked ${computerMove}, you ${result}!
You have ${newScore} ${newResult}, ${valueOne} ${outcomeOne}, and ${valueTwo} ${outcomeTwo}`;

    let paperMove = document.querySelector('.move-paragraph');
    paperMove.innerHTML = (`You - paper : ${computerMove} - Computer`);

    let paperScore = document.querySelector('.score-paragraph');
    paperScore.innerHTML = (`You ${result}!`)


}

function selectScissors() {
    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';
    if (computerMove === 'scissors') {
        result = 'tie';
    } else if (computerMove === 'rock') {
        result = 'lose';
    } else if (computerMove === 'paper') {
        result = 'win';
    }

    let newResult = '';
    if (result === 'win') {
        score.wins += 1;
        newResult = 'wins!';
    } else if (result === 'lose') {
        score.losses += 1;
        newResult = 'losses!';
    } else {
        score.ties += 1;
        newResult = 'ties!';
    }

    localStorage.setItem('gameScore', JSON.stringify(score));

    let newScore, valueOne, valueTwo, outcomeOne, outcomeTwo;

    if (newResult === 'wins!') {
        newScore = score.wins;
        valueOne = score.losses;
        outcomeOne = 'losses';
        valueTwo = score.ties;
        outcomeTwo = 'ties';
    } else if (newResult === 'losses!') {
        newScore = score.losses;
        valueOne = score.wins;
        outcomeOne = 'wins';
        valueTwo = score.ties;
        outcomeTwo = 'ties';
    } else {
        newScore = score.ties;
        valueOne = score.wins;
        outcomeOne = 'wins';
        valueTwo = score.losses;
        outcomeTwo = 'losses';
    }

    alert(`You picked scissors and the computer picked ${computerMove}, you ${result}!
You have ${newScore} ${newResult}, ${valueOne} ${outcomeOne}, and ${valueTwo} ${outcomeTwo}`);

    let scissors = document.querySelector('.win-paragraph');
    scissors.innerHTML = (`You picked scissors and the computer picked ${computerMove}, you ${result}!
You have ${newScore} ${newResult}, ${valueOne} ${outcomeOne}, and ${valueTwo} ${outcomeTwo}`);

    let scissorsMove = document.querySelector('.move-paragraph');
    scissorsMove.innerHTML = (`You - <img src="./images/two-fingers-emoji.jpg" alt=""> : <img src="/images/${computerMove}.jpg" alt=""> - Computer`);

    let scissorsScore = document.querySelector('.score-paragraph');
    scissorsScore.innerHTML = (`You ${result}!`)

}

function selectReset() {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };

    // ✅ Fix 4: Clear the score from localStorage too
    localStorage.removeItem('gameScore');

    alert(`Your score has been reset.`);

    let scoreReset = document.querySelector('.win-paragraph');
    scoreReset.innerHTML = ('Your score has been reset.');

    let resetMove = document.querySelector('.move-paragraph');
    resetMove.innerHTML = (``);

    let resetScore = document.querySelector('.score-paragraph');
    resetScore.innerHTML = (``)
};

function calculateTotal() {
    const amazonCost = document.querySelector('.amazon-cost');
    let cost = Number(amazonCost.value);

    let amount = 50;
    if (cost < amount) {
        cost = cost + 10;

    }

    document.querySelector('.shipping-cost').innerHTML = cost;
    console.log(cost);


    
};

function handleCost(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
};

