const equationDisplay = document.getElementById("equation")
const answerDisplay = document.getElementById("answer")
const addButton = document.getElementById("add")
const subtractButton = document.getElementById("subtract")
const multiplyButton = document.getElementById("multiply")
const divideButton = document.getElementById("divide")



const numDisplay = document.querySelector(".num-row")
const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let n = 0;
for (let i=1; i<4; i++) {
    numDisplay.innerHTML += `<div class="row" id="row-${i}"></div>`
    for (let j=1; j<5; j++){
        if (digits[n] !== undefined) {
            document.getElementById(`row-${i}`).innerHTML += `<button id="${digits[n]}"><h4>${digits[n]}</h4></button>` 
        } else {
            document.getElementById(`row-${i}`).innerHTML += 
            `<button id="erase"><h4>C</h4></button><button id="equals"><h4>=</h4></button>` 
            break;
        }
        n++
    }
}

const numbers = document.querySelectorAll(".num-row .row button")
let equationText = '';

numbers.forEach(numbers => numbers.addEventListener("click", (e) => {
    if(equationDisplay.innerHTML && answerDisplay == '0') {
        equationText = e.target.id
    } else {
        equationText += e.target.id

    }

    
    equationDisplay.innerHTML = equationText;
    answerDisplay.innerHTML = equationText;
}))

// problems: 0 placeholder digit at first.
// possible solution: treat the value of innerHTMLs as numbers and not digits, if it is 0
// as a calculator user, i want to see the numbers im choosing on the screen.

const add = (a, b) => { return a + b; }
const subtract = (a, b) => { return a - b; }
const multiply = (a, b) => { return a * b; }
const divide = (a, b) => { return a / b; }