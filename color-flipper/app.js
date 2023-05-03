const container = document.querySelector(".container")
const flipperButton = document.getElementById("color-flipper")
const hexCode = document.getElementById("hex-code")

const hexArr = '0123456789ABCDEF'
let code = '#';

const handleClick = () => {

    // generate a random hex number 
    for(let i = 0; i < 6; i++) {
        code += hexArr[Math.floor(Math.random() * 16)]
    }
    
    // put that hex number as the innerhtml of hexCode
    hexCode.innerText = code

    // change the container's background color to that color 
    container.style.backgroundColor = code

    // reset
    code = '#';
 
}

flipperButton.addEventListener("click", handleClick)
