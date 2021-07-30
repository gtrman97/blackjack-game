var hasBlackJack = false; 
var isAlive = true; 
var message = "";
const faceCards = ['J', 'Q', 'K']; 
var myCards; 
var hosueCards;

var mySum; 
var houseSum; 
var min = 2; 
var max = 11; 

function startGame() { 

    myCards = [];
    hosueCards = [];

    myCards.push(Math.floor(Math.random() * (max - min) + min));
    myCards.push(Math.floor(Math.random() * (max - min) + min));

    hosueCards.push(Math.floor(Math.random() * (max - min) + min));
    hosueCards.push(Math.floor(Math.random() * (max - min) + min));
    
    sum();
    document.getElementById("my-sum").innerHTML = mySum; 

    // if (myCards[0] == 10) {
    //     myCards[0] = faceCards[Math.floor(Math.random() * (faceCards.length))]
    // }
    // if (myCards[1] == 10) {
    //     myCards[1] = faceCards[Math.floor(Math.random() * (faceCards.length))]
    // }

    document.getElementById("my-cards").innerHTML = myCards[0] + " - " + myCards[1];
    document.getElementById("my-sum").innerHTML = mySum; 
    document.getElementById("house-cards").innerHTML = hosueCards[0] + " - ?"; 
    document.getElementById("house-sum").innerHTML = "?"; 

    bust();

}
function newCard() {

    myCards.push(Math.floor(Math.random() * (max - min) + min)); 
    sum();  
    document.getElementById("my-cards").innerHTML = myCards.join(' - '); 
    document.getElementById("my-sum").innerHTML = mySum; 
    bust();

}
function stay() {
    
    document.getElementById("house-cards").innerHTML = hosueCards.join(' - '); 
    document.getElementById("house-sum").innerHTML = houseSum;  

    if (mySum > houseSum) {
        
        message = "You Win!"; 
        document.getElementById("message-el").innerHTML = message; 

    }
    else {
        
        message = "House Wins!"; 
        document.getElementById("message-el").innerHTML = message; 

    }

}
function bust() {

    if (mySum < 21) {
        message = "Would you like a new card?"; 
        document.getElementById("message-el").innerHTML = message; 
    } 
    else if (mySum === 21) {
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
function sum() {

    mySum = 0;
    houseSum = 0;

    for (let i=0; i<myCards.length; i++){
        mySum += myCards[i]; 
    }

    for (let j=0; j<hosueCards.length; j++){
        houseSum += hosueCards[j]; 
    }
} 
    
