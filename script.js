const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const timerDiv = document.querySelector(".timer");
const fixedSeconds = 5;

let seconds = 5;
let intervalId;

function countdown() {
  seconds--;
  timerDiv.style.width = `${(seconds / fixedSeconds) * 100}%`;
  if (seconds === 0) {
    clearInterval(intervalId);
    intervalId = null;

    // adding another second here because
    // it will take 1 second to get back to 100% of the width.
    seconds = fixedSeconds + 1;
  }
}
startButton.addEventListener("click", () => {
  if (!intervalId) {
    // there is a delay on setInterval,
    // amended by calling the function early, once
    countdown();
    intervalId = setInterval(countdown, 1000);
  }
});
stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
