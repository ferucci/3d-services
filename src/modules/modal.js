'use strict';

import { animate } from './helpers';

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const modalContent = modal.querySelector('.popup-content');

  let requestId;

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
        modal.style.display = 'block';
      } else {
        requestId = requestAnimationFrame(challenge);
      }
    });

  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
    }
  });
};

export default modal;

