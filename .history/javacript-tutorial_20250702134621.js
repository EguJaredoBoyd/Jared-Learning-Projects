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



let randomNumber = Math.random();
let computerMove = '';
let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

storage = localStorage.getItem('gameScore', 'score')
console.log(storage);






function selectRock (){
    if (randomNumber >= 0 && randomNumber <= 1/3) {
        computerMove =  'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber <= 2/3){
        computerMove = 'paper'
    } 
    else if (randomNumber >= 2/3 && randomNumber <= 2/3 || randomNumber <= 3/3){
        computerMove = 'scissors'
    };

    if (computerMove === 'rock') {
        result = 'tie'
    }
    else if (computerMove === 'paper') {
        result = 'lose'
    }
    else if (computerMove === 'scissors') {
        result =  'win'
    };

    if (result === 'win') {
        score.wins += 1
        newResult = 'wins!'

    }

    else if (result === 'lose') {
        score.losses += 1
        newResult = 'losses!'
    }
    
    else if (result === 'tie') { 
        score.ties += 1
        newResult = 'ties!'
    };

    if (newResult === 'wins!') {
        newScore = score.wins
        valueOne = score.losses
        outcomeOne = 'losses'
        valueTwo = score.ties
        outcomeTwo = 'ties'
    }
    else if (newResult === 'losses!') {
        newScore = score.losses
        valueOne = score.wins
        outcomeOne = 'wins'
        valueTwo = score.ties
        outcomeTwo = 'ties'
    }
    else if (newResult === 'ties!') {
        newScore = score.ties
        valueOne = score.wins
        outcomeOne = 'wins'
        valueTwo = score.losses
        outcomeTwo = 'losses'
    };

    localStorage.setItem('gameScore', JSON.stringify(score));

    alert(`You picked rock and the computer picked ${computerMove}, you ${result}!
You have ${newScore} ${newResult}, ${valueOne} ${outcomeOne}, and ${outcomeTwo} ${valueTwo}`);
};

function selectPaper () {
    if (randomNumber >= 0 && randomNumber <= 1/3) {
        computerMove =  'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber <= 2/3){
        computerMove = 'paper'
    } 
    else if (randomNumber >= 2/3 && randomNumber <= 2/3 || randomNumber <= 3/3){
        computerMove = 'scissors'
    };

    if (computerMove === 'paper') {
        result = 'tie'
    }
    else if (computerMove === 'scissors') {
        result = 'lose'
    }
    else if (computerMove === 'rock') {
        result =  'win'
    };

    if (result === 'win') {
        score.wins += 1
        newResult = 'wins!'

    }

    else if (result === 'lose') {
        score.losses += 1
        newResult = 'losses!'
    }
    
    else if (result === 'tie') { 
        score.ties += 1
        newResult = 'ties!'
    };

    if (newResult === 'wins!') {
        newScore = score.wins
        valueOne = score.losses
        outcomeOne = 'losses'
        valueTwo = score.ties
        outcomeTwo = 'ties'
    }
    else if (newResult === 'losses!') {
        newScore = score.losses
        valueOne = score.wins
        outcomeOne = 'wins'
        valueTwo = score.ties
        outcomeTwo = 'ties'
    }
    else if (newResult === 'ties!') {
        newScore = score.ties
        valueOne = score.wins
        outcomeOne = 'wins'
        valueTwo = score.losses
        outcomeTwo = 'losses'
    };

    alert(`You picked rock and the computer picked ${computerMove}, you ${result}!
You have ${newScore} ${newResult}, ${valueOne} ${outcomeOne}, and ${outcomeTwo} ${valueTwo}`);
};

function selectScissors () {
    if (randomNumber >= 0 && randomNumber <= 1/3) {
        computerMove =  'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber <= 2/3){
        computerMove = 'paper'
    } 
    else if (randomNumber >= 2/3 && randomNumber <= 2/3 || randomNumber <= 3/3){
        computerMove = 'scissors'
    };

    if (computerMove === 'scissors') {
        result = 'tie'
    }
    else if (computerMove === 'rock') {
        result = 'lose'
    }
    else if (computerMove === 'paper') {
        result =  'win'
    };

    if (result === 'win') {
        score.wins += 1
        newResult = 'wins!'

    }

    else if (result === 'lose') {
        score.losses += 1
        newResult = 'losses!'
    }
    
    else if (result === 'tie') { 
        score.ties += 1
        newResult = 'ties!'
    };

    if (newResult === 'wins!') {
        newScore = score.wins
        valueOne = score.losses
        outcomeOne = 'losses'
        valueTwo = score.ties
        outcomeTwo = 'ties'
    }
    else if (newResult === 'losses!') {
        newScore = score.losses
        valueOne = score.wins
        outcomeOne = 'wins'
        valueTwo = score.ties
        outcomeTwo = 'ties'
    }
    else if (newResult === 'ties!') {
        newScore = score.ties
        valueOne = score.wins
        outcomeOne = 'wins'
        valueTwo = score.losses
        outcomeTwo = 'losses'
    };

    alert(`You picked rock and the computer picked ${computerMove}, you ${result}!
You have ${newScore} ${newResult}, ${valueOne} ${outcomeOne}, and ${outcomeTwo} ${valueTwo}`);
}

function selectReset() {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };

    alert(`Your score has been reset.`);
};










