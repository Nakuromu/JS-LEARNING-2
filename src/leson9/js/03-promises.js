import Notiflix from 'notiflix';

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldResolve) {
                resolve({position: position, delay: delay})
              } else {
                  reject({position: position, delay: delay})
              }
        }, delay)
    })
  }

const formEl = document.querySelector('.form');
const firstDelayEl = document.querySelector('[name="delay"]');
const stepDelayEl = document.querySelector('[name="step"]');
const promisesAmountEl = document.querySelector('[name="amount"]');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    let firstDelay = parseInt(firstDelayEl.value);
    let stepDelay = parseInt(stepDelayEl.value);
    let promisesAmount = 0;

    if(firstDelayEl.value < 0 || stepDelayEl.value < 0 || promisesAmountEl.value < 0){
        Notiflix.Notify.failure(`You written value which less than zero!`);
    }

    for(let index = promisesAmountEl.value; index > 0; index--){
        promisesAmount +=1;

        createPromise(promisesAmount, firstDelay).then(({position, delay}) => {
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }).catch(({position, delay}) => {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        })

        firstDelay += stepDelay;
    }
})
