import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }}, delay);
  });
}

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = parseInt(event.target.delay.value);
  const step = parseInt(event.target.step.value);
  const amount = parseInt(event.target.amount.value);

  for(let i = 1; i <=  amount; i++) {
    const currentDelay = delay + i * step;
    createPromise(i, currentDelay)
    .then(value => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${value.position} in ${value.delay}ms`);
  })
  .catch(error => {
    Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
  });
}
});