"use strict";

const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');

  let total = document.getElementById('total');

  const time = 1000;
  const step = 10;
  let idInterval;
  let numRemaining;

  // Ф-ция расчёта суммы и записи в total
  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    // для каждого инпута создаю изменяемую переменную
    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      // calcCountValue = calcCountValue + (calcCount.value / 10);
      calcCountValue += +calcCount.value / 10; // Происходит тоже самое ^
    }

    // Проверка на введеное поле (не равен null or undefined)
    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    total.textContent = Math.round(totalValue);

  }

  const animateCalc = (num, el) => {
    total = document.getElementById('total');
    let totalV = countCalc();
    let n = 0;

    numRemaining = Math.round(time / (num / step));
    idInterval = setInterval(() => {

      n = n + step;

      if (n >= num) {
        clearInterval(idInterval);
      }
      el.textContent = n - step;
    }, numRemaining);

    console.log(idInterval);
  }

  calcBlock.addEventListener('input', (e) => {

    if (e.target === calcSquare ||
      e.target === calcCount || e.target === calcDay) {
      countCalc()
      while (e.target === '' || e.target === 0) {
        clearInterval(idInterval);
      }
      animateCalc(total.textContent, total)

    }

  });
}

export default calc;