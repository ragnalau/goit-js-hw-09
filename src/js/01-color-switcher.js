

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerBackgroundChange = null;

startBtn.addEventListener('click', 
    () => {
    timerBackgroundChange = setInterval(getBackgroundColor, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});


stopBtn.addEventListener('click', () => {
    stopInterval();
    startBtn.disabled = false;
    stopBtn.disabled = true;
})


function getBackgroundColor(){
    document.body.style.background =
      getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function stopInterval() {
  clearTimeout(timerBackgroundChange);
}
