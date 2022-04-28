'use strict';

const timer = (deadline) => {
  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  let idInterval;

  const getTimeRemaining = () => {

    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    // Высчитываю разность между датами:
    let timeRemaning = (dateStop - dateNow) / 1000; // получаю секунды

    let days = Math.floor(timeRemaning / 60 / 60 / 24);
    let hours = Math.floor((timeRemaning / 60 / 60) % 24); // остаток от деления на 24
    let minutes = Math.floor((timeRemaning / 60) % 60); // вычитываются минуты, а ниже секунды
    let seconds = Math.floor(timeRemaning % 60); // остаток от деления на 60

    return { timeRemaning, days, hours, minutes, seconds };
  }

  // Создаю ф-цию, которая будет обновлять таймер и переношу сюда значения
  const updateClock = () => {

    let getTime = getTimeRemaining();

    timerDays.textContent = ('0' + getTime.days).slice(-2);
    timerHours.textContent = ('0' + getTime.hours).slice(-2);
    timerMinutes.textContent = ('0' + getTime.minutes).slice(-2);
    timerSeconds.textContent = ('0' + getTime.seconds).slice(-2);

    if (getTime.timeRemaning > 0) {

    } else if (getTime.timeRemaning <= 0) {
      clearInterval(idInterval);
      timerDays.textContent = ('0' + '0');
      timerHours.textContent = ('0' + '0');
      timerMinutes.textContent = ('0' + '0');
      timerSeconds.textContent = ('0' + '0');
    }
  }

  idInterval = setInterval(updateClock, 1000);
};

export default timer;