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





