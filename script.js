var hasBlackJack = false; 
var isAlive = true; 
var message = "";

var min = 2; 
var max = 12; 

var firstCard = Math.floor(Math.random() * (max - min) + min);  
var secondCard = Math.floor(Math.random() * (max - min) + min);

var sum = firstCard + secondCard; 

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