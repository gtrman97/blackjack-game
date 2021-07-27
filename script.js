var hasBlackJack = false; 
var isAlive = true; 
var message = "";

var min = 2; 
var max = 12; 

function startGame() {

    let firstCard = Math.floor(Math.random() * (max - min) + min);  
    let secondCard = Math.floor(Math.random() * (max - min) + min);
    
    let sum = firstCard + secondCard; 
    
    console.log(sum);
    
    if (sum < 21) {
        message = "Would you like a new card?"; 
    } 
    else if (sum === 21) {
        message = "You've got blackjack!";
        hasBlackJack = true; 
    }
    else {
        message = "You lose!";
        isAlive = false; 
    }
    
    console.log(message);


}
