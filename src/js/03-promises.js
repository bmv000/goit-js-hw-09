// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name=delay]');
const inputDelayStep = document.querySelector('input[name=step]');
const inputAmount = document.querySelector('input[name=amount]');
const btnStart = document.getElementsByTagName('button');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
  
}

 form.addEventListener('submit', event => {
  event.preventDefault();

    const delayValue = Number(inputDelay.value);
    const stepValue = Number(inputDelayStep.value);
   const amountValue = Number(inputAmount.value);
   
      for (let position = 1; position <= amountValue; position += 1) {
        const delay = delayValue + (stepValue * (position - 1));
        createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      }
});


