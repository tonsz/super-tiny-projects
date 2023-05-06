const container = document.querySelector(".container")
const flipperButton = document.getElementById("color-flipper")
const saverButton = document.getElementById("color-saver")
const inventory = document.querySelector(".inventory")
const hexCodeDisplay = document.getElementById("hex-code")
const resetButton = document.getElementById("background-reset")

const hexDigits = '0123456789ABCDEF'
let colorCollection = []
let hexCode = '#';
let hexCodeBuffer = '';

const generateCode = () => {

    for(let i = 0; i < 6; i++) {
        hexCode += hexDigits[generateRandomNum()]
    }

    hexCodeDisplay.innerText = hexCode
    container.style.backgroundColor = hexCode
    
    // reset
    hexCodeBuffer = hexCode
    hexCode = '#'
    
}

const saveColor = () => {
    const newColor = document.createElement('div')
    newColor.classList.add('square')
    inventory.appendChild(newColor)
    newColor.style.backgroundColor = hexCodeBuffer
    
}

const resetBackground = () => {
    hexCodeDisplay.innerText = "#FFFFFF"
    container.style.backgroundColor = "#FFFFFF";
}
const generateRandomNum = () => {
    return Math.floor(Math.random() * 16)
}

flipperButton.addEventListener("click", generateCode)
saverButton.addEventListener("click", saveColor)
resetButton.addEventListener("click", resetBackground)
