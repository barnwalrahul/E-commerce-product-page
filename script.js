let cart = document.getElementById("cart-icon");
let cart_box = document.getElementById("cart-page");
let cart_delete = document.getElementById("cart-delete");

cart.addEventListener("click" , function(){
    cart_box.style.display = "block";
})


cart_delete.addEventListener("click" , function(){
    cart_box.style.display = "none";
})


function imgtwo(){
    document.getElementById("two").style.display = "block";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("one").style.display = "none";
}
function imgthree(){
    document.getElementById("three").style.display = "block";
    document.getElementById("two").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("one").style.display = "none";
}
function imgfour(){
    document.getElementById("four").style.display = "block";
    document.getElementById("three").style.display = "none";
    document.getElementById("two").style.display = "none";
    document.getElementById("one").style.display = "none";
}
function imgone(){
    document.getElementById("one").style.display = "block";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("two").style.display = "none";
}

let count = 1;
let zero = document.getElementById("zero");


function plus(){
    if(zero.innerHTML >= 6){
        zero.innerHTML = "6";
    }
    else if(zero.innerHTML < 6){
        let add = ++count;
        zero.innerHTML = add;
    }
    
}
function minus(){
    if(zero.innerHTML <= 0){
        zero.innerHTML = "0";
        document.getElementById("cart-btn").style.display = "none";
    }
    else if(zero.innerHTML > 0 ){
        let minus = --count;
        zero.innerHTML = minus;
    }
}

let price = document.getElementById("price");

function cart_count(){
    document.getElementById("item-count").style.display = "block";
    document.getElementById("item-count").innerHTML = zero.innerText;
    document.getElementById("quan").innerHTML = zero.innerText;
    document.getElementById("final-price").innerHTML = zero.innerText * price.innerHTML+".00";
    document.getElementById("cart-product-img").style.display = "block";
    document.getElementById("cart-product-name").style.display = "block";
    document.getElementById("total-rate").style.display = "block";
    document.getElementById("delete").style.display = "flex";
    document.getElementById("empty").style.display = "none";
    document.getElementById("check").style.display = "block";
    document.getElementById("cart-text").style.display = "block";
}



function item_delete(){
    document.getElementById("cart-product-img").style.display = "none";
    document.getElementById("delete").style.display = "none";
    document.getElementById("cart-text").style.display = "none";
    document.getElementById("empty").style.display = "block";
    document.getElementById("item-count").style.display = "none";
    document.getElementById("cart-page").style.display = "none";
    document.getElementById("check").style.display = "none";
    zero.innerText = 0;


}

function checkout(){
    document.getElementById("cart-product-img").style.display = "none";
    document.getElementById("delete").style.display = "none";
    document.getElementById("cart-text").style.display = "none";
    document.getElementById("empty").style.display = "block";
    document.getElementById("empty").innerHTML = "Order Placed!";
    document.getElementById("item-count").style.display = "none";
    // document.getElementById("cart-page").style.display = "none";
    document.getElementById("check").style.display = "none";
    zero.innerText = 0;
}

let lightbox = document.getElementsByClassName("light-box");

let current;

for(var i = 0; i<lightbox.length; i++ ){
    lightbox[i].addEventListener("click" , function(){
     let getcurrent = document.getElementById("pop-img").src = this.src;
     document.getElementById("popup").style.display = "flex";
     document.getElementById("header").style.opacity = "0.1";
    })
}

// get cureent image number

function getcurrentimg(){
    for(var i = 0; i<lightbox.length; i++ ){
        if(lightbox[i].src ==  document.getElementById("pop-img").src){
            current = i;
        }
    }
}

// Right arrow image

function Rightarrow(){
    getcurrentimg();
    current++;
    document.getElementById("pop-img").src = lightbox[current].src;
checkarrow();

}

function checkarrow(){
    getcurrentimg();

    if(current == lightbox.length-1){
        document.getElementById("right").style.display = "none"
        document.getElementById("left").style.display = "block"
    }
    else if(current == "0"){
        document.getElementById("left").style.display = "none"
        document.getElementById("right").style.display = "block"
     
    }
    else{
    document.getElementById("left").style.display = "block"
    document.getElementById("right").style.display = "block"
    }
}



// left arrow image

function Leftarrow(){
    getcurrentimg();
    current--;
    document.getElementById("pop-img").src = lightbox[current].src;
checkarrow();

}




function closepopup(){
    let getcurrent = document.getElementById("pop-img").src = "";
    document.getElementById("popup").style.display = "none";
    document.getElementById("header").style.opacity = "1";

}

function menuopen(){
    document.getElementById("ul").style.display = "block";
}
function listhide(){
    document.getElementById("ul").style.display = "none";
}

