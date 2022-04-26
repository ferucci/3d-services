'use strict';

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeModal = modal.querySelector('.popup-close');
  const modalContent = modal.querySelector('.popup-content');

  let requestId;



  function animate({ timing, draw, duration }) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      let progress = timing(timeFraction);

      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }

    });
  }

  const challenge = () => {
    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modal.style.display = 'block';
        modalContent.style.opacity = progress * 100 + '%';
        modalContent.style.top = progress * 15 + '%';
      }
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (document.documentElement.clientWidth < 768) {
        console.log('Нет анимации, экран меньше 768xpx')
      } else {
        requestId = requestAnimationFrame(challenge);
      }

    });

  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

export default modal;

