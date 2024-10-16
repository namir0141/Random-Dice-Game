
function random_number(imgSelector)
 {
    var randomNumber1 = Math.random() * 6;
    randomNumber1 = Math.floor(randomNumber1) + 1; 

    var imgElement = document.querySelector(imgSelector);

    if(randomNumber1 == 1) {
        imgElement.setAttribute("src", "./images/dice1.png");
    } 
    else if(randomNumber1 == 2) {
        imgElement.setAttribute("src", "./images/dice2.png");
    } 
    else if(randomNumber1 == 3) {
        imgElement.setAttribute("src", "./images/dice3.png");
    } 
    else if(randomNumber1 == 4) {
        imgElement.setAttribute("src", "./images/dice4.png");
    } 
    else if(randomNumber1 == 5) {
        imgElement.setAttribute("src", "./images/dice5.png");
    } 
    else if(randomNumber1 == 6) {
        imgElement.setAttribute("src", "./images/dice6.png");
    }
    return randomNumber1;
}

var a=random_number(".img1");
var b=random_number(".img2");

if (a > b)
{
    document.querySelector("h1").innerText="🚩Player 1 Wins";
}
else if (a < b)
{
    document.querySelector("h1").innerText="Player 2 Wins 🚩";
}
else if (a == b)
{
    document.querySelector("h1").innerText="Draw ";
}