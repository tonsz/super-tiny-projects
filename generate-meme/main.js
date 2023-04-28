const generateMemeBtn = document.querySelector(".meme-generator .meme-generator-btn")
const memeImage = document.querySelector(".meme-generator .image img")
const memeTitle = document.querySelector(".meme-generator h2")
const memeAuthor = document.querySelector(".meme-generator .meme-author")

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url)
    memeTitle.innerHTML = title
    memeAuthor.innerHTML = `Meme by: ${author}`
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author)
    })
}

generateMemeBtn.addEventListener("click", generateMeme)
