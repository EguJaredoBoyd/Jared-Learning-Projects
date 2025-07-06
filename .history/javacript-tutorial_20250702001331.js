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
        score.losses = 0
        score.ties = 0;
    }

    else if (result === 'lose') {
        score.losses +=1;
        newResult = 'losses!'
        score.losses = 0
        score.ties = 0;
    }
    
    else if (resullt === 'tie') { 
        score.ties += 1;
        newResult = 'ties!'
        score.losses = 0
        score.ties = 0;
    };

    alert(`You picked rock and the computer picked ${computerMove}, you ${result}!
You have ${score.wins} ${newResult}, ${score.losses} losses, and ${score.ties} ties.`);
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
        newResult = 'wins !'
        score.losses = 0
        score.ties = 0;
    }

    else if (result === 'lose') {
        score.losses +=1;
    }
    
    else if (resullt === 'tie') { 
        score.ties += 1;
    };

    alert(`You picked paper and the computer picked ${computerMove}, you ${result}!`);
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

    alert(`You picked scissors and the computer picked ${computerMove}, you ${result}!`);
}

function selectReset() {
    const score = {
    wins: 0,
    losses: 0,
    ties: 0,
};


if (result === 'win') {
    score.wins += 1;

}
else if (result ==='lose') {
    score.losses +=1;

}
else if (resullt === 'tie') { 
    score.ties += 1;

}

alert(`You have ${score}`)

}








