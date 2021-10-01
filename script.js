let age = window.prompt("You must be 21 to play this game. Please enter your age:"); 
if (age < 21) {
    alert("You are too young!"); 
}

let hasBlackJack = false; 
let isAlive = true; 
let message = "";
const faceCards = ['J', 'Q', 'K']; 
let myCards; 
let hosueCards;

let mySum; 
let houseSum; 
let min = 2; 
let max = 11; 

let deck = [
{ 
    display: "2",
    value: 2,
    isDealt: false
},  
{
    display: "3",
    value: 3,
    isDealt: false
},
{
    display: "4",
    value: 4,
    isDealt: false
},
{ 
    display: "5",
    value: 5,
    isDealt: false
},  
{
    display: "6",
    value: 6,
    isDealt: false
},
{
    display: "7",
    value: 7,
    isDealt: false
},
{ 
    display: "8",
    value: 8,
    isDealt: false
},  
{
    display: "9",
    value: 9,
    isDealt: false
},
{
    display: "10",
    value: 10,
    isDealt: false
},
{ 
    display: "J",
    value: 10,
    isDealt: false

},  
{
    display: "Q",
    value: 10,
    isDealt: false
},
{
    display: "K",
    value: 10,
    isDealt: false
}
]; 

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
    else if (mySum == houseSum) {
        message = "Tie Game!"; 
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
    
