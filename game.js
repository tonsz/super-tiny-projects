var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userChosenColor;
var userClickedPattern = [];
var level = 0;
var started = false;

function playSound(name) {
    var sound = new Audio(`./sounds/${name}.mp3`);
    sound.play();
}

function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function() {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}

function nextSequence() { 
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = buttonColors[randomNumber];

    gamePattern.push(randomColor);
    level++;
    userClickedPattern = [];

    playSound(randomColor);
    $(`#${randomColor}`).fadeOut(100).fadeIn(100);
    $("h1").text(`Level ${level}`);
}

function startOver() {
    gamePattern = [];
    level = 0;
    started = false;
}

function checkAnswer(currentLevel) {
    // currentLevel is the one trying to be checked 
    // if gamePattern[currentLevel] == userClickedPattern[currentLevel]
    // then, OK. 
    // if currentLevel == level 
    // call the next sequence and it will reset the userClickedPattern 
    // and generate a new color
    // if its not yet the actual level, wait for another button to be clicked
    // until the real level is clicked
    
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(currentLevel === (level - 1)) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        } 
    } else {
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 1000);

        playSound("wrong");
        $("h1").text(`Game over! Press any key to restart.`);

        startOver();
    }
}

$(".btn").on("click", function(event){
    userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);

    playSound(userChosenColor);
    animatePress(userChosenColor);         
})

$(document).keydown(function (e) {
    // started logic code credit to angela 
    if(!started) {
        $("h1").text(`Level ${level}`);
        nextSequence();
        started = true;
    }
});


