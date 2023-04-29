const computerChoice = document.getElementById("computer-choice")
const userChoice = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result-display")
const possibleChoices = document.querySelectorAll(".control button")

let computer
let user
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    userChoice.style.backgroundColor = "#fff";
    computerChoice.style.backgroundColor = "#fff";
    computerChoice.style.color = "#333";
    userChoice.style.color = "#333";

    user = e.target.id 
    userChoice.innerHTML = user
    getComputerChoice()
    getResult()

}))

function getComputerChoice () {
   // generate a random number from 1-3 
   // math floor - always rounds down no matter what. 
   // math random - gives a random fraction (0 to 1)
   let number
   number = Math.floor(Math.random() * 3) + 1;

   // take the random number and equate it to r/p/s
   if (number === 1) {
    computer = 'rock'
   } 
   if (number === 2) {
    computer = 'paper'
   } 
   if (number === 3) {
    computer = 'scissors'
   } 

   computerChoice.innerHTML = computer

}

function getResult () {
    if (computer === user) {
        result = "it's a draw! boring."
    } else if (computer === 'rock' && user === 'paper') {
        result = "you win! one step against AI."
        userChoice.style.backgroundColor = "#5ca0aa";
        userChoice.style.color = "#fff";
    } else if (computer === 'rock' && user === 'scissors') {
        result = "a robot beat you. think about that."
         computerChoice.style.backgroundColor = "#5ca0aa";
         computerChoice.style.color = "#fff";

    } else if (computer === 'paper' && user === 'scissors') {
        result = "you win! one step against AI."
        userChoice.style.backgroundColor = "#5ca0aa";
        userChoice.style.color = "#fff";

    } else if (user === 'rock' && computer === 'paper') {
        result = "a robot beat you. think about that."
         computerChoice.style.backgroundColor = "#5ca0aa";
         computerChoice.style.color = "#fff";
    } else if (user === 'rock' && computer=== 'scissors') {
        result = "you win! one step against AI."
        userChoice.style.backgroundColor = "#5ca0aa";
        userChoice.style.color = "#fff";

    } else if (user === 'paper' && computer === 'scissors') {
        result = "a robot beat you. think about that."
         computerChoice.style.backgroundColor = "#5ca0aa";
         computerChoice.style.color = "#fff";

    }

    resultDisplay.innerHTML = result
}

