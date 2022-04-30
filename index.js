var randomNumber1 = Math.floor(Math.random() * 6) + 1; // value = 1 - 6
var randomDiceImgage = "dice" + randomNumber1 + ".png" //dice1.png - dice2.png
var randomImageSource = "images/" + randomDiceImgage; //images/dice1.png - images./dice2.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // value = 1 - 6
var randomImageSource = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images./dice2.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector('h1').textContent = "Draw!"
}
else{
    document.querySelector("h1").textContent = "Player 2 Wins 🚩";
}