
let btn = document.getElementById("result");
btn.addEventListener("click",function(){let randomnumber1 = Math.floor(Math.random()*6)+1;
let randomimg1 = "./images/dice"+randomnumber1+".png";
let selector = document.querySelectorAll("img");
selector[0].setAttribute('src',randomimg1);

let randomnumber2 = Math.floor(Math.random()*6)+1;
let randomimg2 = "./images/dice"+randomnumber2+".png";
selector[1].setAttribute('src',randomimg2);
let paraselector = document.querySelector("h1")
if(randomnumber1>randomnumber2){
    paraselector.innerHTML = "Player 1 Won";

}
else if(randomnumber1<randomnumber2){
    paraselector.innerHTML = "Player 2 Won";

}
else{
    paraselector.innerHTML = "Draw!!!";
}



})