var hasBlackJack = false; 
var isAlive = true; 
var message = "";
const faceCards = ['J', 'Q', 'K']; 
var myCards = []; 
var hosueCards = [];

var mySum = 0; 
var houseSum = 0; 
var min = 2; 
var max = 11; 

function startGame() { 

    myCards.push(Math.floor(Math.random() * (max - min) + min));
    myCards.push(Math.floor(Math.random() * (max - min) + min));

    hosueCards.push(Math.floor(Math.random() * (max - min) + min));
    hosueCards.push(Math.floor(Math.random() * (max - min) + min));
    
    mySum = myCards[0] + myCards[1]; 
    houseSum = hosueCards[0] + hosueCards[1]; 

    if (myCards[0] == 10) {
        myCards[0] = faceCards[Math.floor(Math.random() * (faceCards.length))]
    }
    if (myCards[1] == 10) {
        myCards[1] = faceCards[Math.floor(Math.random() * (faceCards.length))]
    }

    document.getElementById("cards").innerHTML = myCards[0] + " - " + myCards[1];
    document.getElementById("sum-el").innerHTML = mySum; 
    document.getElementById("house-cards").innerHTML = hosueCards[0] + " - ?"; 
        
    // if (sum < 21) {
    //     message = "Would you like a new card?"; 
    //     document.getElementById("message-el").innerHTML = message; 
    // } 
    // else if (sum === 21) {
    //     message = "You've got blackjack!";
    //     document.getElementById("message-el").innerHTML = message; 
    //     hasBlackJack = true; 
    // }
    // else {
    //     message = "You lose!";
    //     document.getElementById("message-el").innerHTML = message; 
    //     isAlive = false; 
    // }


}
function newCard() {
    myCards.push(Math.floor(Math.random() * (max - min) + min)); 
    // sum += thirdCard; 
    // startGame(); 
}
function stay() {
    document.getElementById("house-cards").innerHTML = hosueCards[0] + " - " + hosueCards[1]; 
    
}
