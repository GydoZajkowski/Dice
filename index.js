var randomNumber1 = (Math.floor(Math.random()*6)+1);
var diceNumber1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = (Math.floor(Math.random()*6)+1);
var diceNumber2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", diceNumber1);
document.getElementsByClassName("img2")[0].setAttribute("src", diceNumber2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}
if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a Draw";
}
