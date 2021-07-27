var hasBlackJack = false; 
var isAlive = true; 
var message = "";
const faceCards = ['J', 'Q', 'K']; 
var thirdCard = ""; 

var sum = 0; 
var min = 2; 
var max = 11; 

function startGame() { 

    let firstCard = Math.floor(Math.random() * (max - min) + min);  
    let secondCard = Math.floor(Math.random() * (max - min) + min);
    
    sum = firstCard + secondCard; 

    if (firstCard == 10) {
        firstCard = faceCards[Math.floor(Math.random() * (faceCards.length))]
    }
    if (secondCard == 10) {
        secondCard = faceCards[Math.floor(Math.random() * (faceCards.length))]
    }

    document.getElementById("cards").innerHTML = firstCard + " " + secondCard + " " + thirdCard;
    document.getElementById("sum-el").innerHTML = sum; 
        
    if (sum < 21) {
        message = "Would you like a new card?"; 
        document.getElementById("message-el").innerHTML = message; 
    } 
    else if (sum === 21) {
        message = "You've got blackjack!";
        document.getElementById("message-el").innerHTML = message; 
        hasBlackJack = true; 
    }
    else {
        message = "You lose!";
        document.getElementById("message-el").innerHTML = message; 
        isAlive = false; 
    }


}
function newCard() {
    
    thirdCard = Math.floor(Math.random() * (max - min) + min);
    // sum += thirdCard; 
    startGame(); 
}
