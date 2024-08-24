
const startBtnEl = document.querySelector('[data-action-start]');
const stopBtnEl = document.querySelector('[data-action-stop]');
const clockFaceEl = document.querySelector('.js-clock-face');

const timer  ={
    intervalId: null,
    isActive: false,

    start(){
        if(this.isActive){
            return;
        }

        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = getTimeComponents(deltaTime);

            updataClockFace(time)
        }, 1000);
    },

    stop(){
        clearInterval(this.intervalId);
        this.isActive = false;
    },
}

startBtnEl.addEventListener('click', () => {
    timer.start();
})

stopBtnEl.addEventListener('click', () => {
    timer.stop()
})

function updataClockFace({hours, mins, secs}){
    clockFaceEl.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value){
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
    const secs = pad(Math.floor((time % (1000 * 60)) / (1000)))

    return {hours, mins, secs};
}