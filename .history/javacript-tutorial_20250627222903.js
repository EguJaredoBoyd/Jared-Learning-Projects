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
let computerMove = ''
function selectClick (){
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
    alert('Success!')
};







