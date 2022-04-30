'use strict';

const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');
  const dotsBlock = document.querySelector('.portfolio-dots');

  let dots = [];
  // заношу в переменную время выполнения слайдера
  let timeInterval = 3300;

  // Для смены слайдов создаю переменную счётчик и по индексу буду доставать необходимый слайд
  let currentSlide = 0;
  // для очистки интервала
  let interval;

  const addedSliderDots = () => {

    const dot = document.createElement('li');
    let dotClone;
    dot.classList.add('dot');

    slides.forEach(() => {
      dotClone = dot.cloneNode(true);

      dotsBlock.append(dotClone);

      dots.push(dotClone)
    });

  }

  const prevSlide = (elems, index, strClass) => {
    // Обращаюсь к активному слайду и удаляю класс active
    elems[index].classList.remove(strClass);
  }

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  }

  const startSlide = (timer = 2200) => {
    interval = setInterval(autoSlide, timer);
  }

  const stopSlide = () => {
    clearInterval(interval);
  }

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    // Увеличиваю счётчик на 1
    currentSlide++;
    // условие, которое проверяет длину псевдомассива
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  }

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .portfolio-btn')) {
      return;
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if (e.target.matches('#arrow-right')) {
      currentSlide++;
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--;
    } else if (e.target.classList.contains('dot')) {
      // перебор всех дотсов
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  });

  // событие при наведении
  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      stopSlide()
    }
  }, true);

  //событие при уведении
  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
      startSlide(timeInterval)
    }
  }, true); // активирую всплытие, чтоб событие отрабатывало на дочерних элементах

  addedSliderDots();
  startSlide(timeInterval);
}

export default slider;