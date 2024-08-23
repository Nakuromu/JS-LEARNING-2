const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let changeColorInterval;

stopBtnEl.setAttribute("disabled", "");

startBtnEl.addEventListener('click', startBtnInterval);
stopBtnEl.addEventListener('click', stopBtnInterval);

function startBtnInterval(){
    startBtnEl.setAttribute('disabled', '');
    stopBtnEl.removeAttribute('disabled');


    changeColorInterval = setInterval(() => {
        const backgroundColor = getRandomHexColor();
        bodyEl.style.backgroundColor = backgroundColor
    }, 1000)
}

function stopBtnInterval(){
    startBtnEl.removeAttribute('disabled');
    stopBtnEl.setAttribute('disabled', '');

    clearInterval(changeColorInterval);
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }