import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');

const dataDayEl = document.querySelector('[data-days]');
const dataHoursEl = document.querySelector('[data-hours]');
const dataMinutesEl = document.querySelector('[data-minutes]');
const dataSecondsEl = document.querySelector('[data-seconds]');

let selectedDatesGlobal = 0;
let currentDateGlobl = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const currentTime = new Date();

        if(currentTime.getTime() >= selectedDates[0].getTime()){
            startBtnEl.setAttribute('disabled', '');

            return Notiflix.Notify.failure('Please choose a date in the future');
        }

        Notiflix.Notify.success('Great date!');
        startBtnEl.removeAttribute('disabled');
        selectedDatesGlobal = selectedDates[0].getTime();
    },
  };

flatpickr(inputEl, options);

startBtnEl.addEventListener('click', () => {
    const currentDate = new Date();
    currentDateGlobl = currentDate.getTime();

    startBtnEl.setAttribute('disabled', '');
    inputEl.setAttribute('disabled', '');

    const intervalForValueDate = setInterval(() => {
        if(currentDateGlobl >= selectedDatesGlobal){
            inputEl.removeAttribute('disabled');
            return clearInterval(intervalForValueDate);
        }

        const deltaTime = selectedDatesGlobal - currentDateGlobl;

        let convertDeltaTime = convertMs(deltaTime);

        dataDayEl.textContent = pad(convertDeltaTime.days)
        dataHoursEl.textContent = pad(convertDeltaTime.hours)
        dataMinutesEl.textContent = pad(convertDeltaTime.minutes)
        dataSecondsEl.textContent = pad(convertDeltaTime.seconds)

        selectedDatesGlobal -=1000;
    }, 1000)
})

function pad(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = pad(Math.floor(ms / day));
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

