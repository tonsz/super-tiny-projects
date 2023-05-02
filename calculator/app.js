const numDisplay = document.querySelector(".num-row")
const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let n = 0;
// render numpad 
for (let i=1; i<4; i++) {
    numDisplay.innerHTML += `<div class="row" id="row-${i}"></div>`
    for (let j=1; j<5; j++){
        if (digits[n] !== undefined) {
            document.getElementById(`row-${i}`).innerHTML += `<button>${digits[n]}</button>` 
        } else {
            document.getElementById(`row-${i}`).innerHTML += 
            `<button id='erase'>C</button><button id='equals'>&equals;</button>` 
            break;
        }
        n++
    }
}

let runningTotal = 0
let buffer = "0"
let previousOperator; 

const screen = document.getElementById("answer")

// do separate things if the button clicked is a number or a symbol
// NaN - not a number 
function handleClick(value) {
    if(isNaN(value)) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
    // show entered number on the screen
    screen.innerText = buffer
}

function handleSymbol(symbol) {
    // do these if the input is not a number
    switch(symbol) {
        case 'C':
            // reset variables
            buffer = '0';
            runningTotal = 0;
            break;
        case '=': 
            // if there is no previous operator clicked, 
            // do nothing, wait for another button to be clicked            
            if(previousOperator === null) {
                return
            }
            // do the operation 
            flushOperation(parseInt(buffer))
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol)
            break;
    }
}

function handleMath(symbol) {
    // if there is no value in the buffer (the first value)
    // do nothing, wait for another button to be clicked
    if (buffer === 0) {
        return
    } 

    // parseInt - conver string type to int
    const intBuffer = parseInt(buffer)
 
    // if total is still 0, no operation performed yet
    if (runningTotal === 0) {
        // assign buffer to Total 
        runningTotal = intBuffer
    } else {
        // perform operation with previously clicked operator
        flushOperation(intBuffer)
    }

    // symbol becomes previous operator
    previousOperator = symbol

    // back to 0, to wait for a new number to be typed
    buffer = '0'
}

function flushOperation(intBuffer) {
    if(previousOperator === '+') {
        runningTotal += intBuffer
    } else if(previousOperator === '−') {
        runningTotal -= intBuffer
    }
    if(previousOperator === '×') {
        runningTotal *= intBuffer
    }
    if(previousOperator === '÷') {
        runningTotal /= intBuffer
    }
}

function handleNumber(numberString) {
    if(buffer === '0') {
        buffer = numberString
    } else {
        buffer += numberString
    }

}

function init() {
    const buttons = document.querySelectorAll(".calculator button")
    buttons.forEach(buttons => buttons.addEventListener("click", (e) => {
        handleClick(e.target.innerText)
    }))
}

init();