var randomNumber1 = Math.floor((Math.random()*6) + 1 );//random Number for img 1
var randomNumber2 = Math.floor((Math.random()*6) + 1 );//random Number for img 2

document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNumber1 +".png");//change img 1-6 for player 1
document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNumber2 +".png");//change img 1-6 for player 2

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "📍Draw!";//draw condition
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🥇Player 2 WINS!";//player 2 win condition
}
else{
    document.querySelector("h1").innerHTML = "🥇Player 1 WINS!";//player 1 win condition
}