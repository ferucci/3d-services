'use strict';
const menu = () => {
  const btnMenu = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const menuAllLinks = menu.querySelectorAll('a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  menuAllLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (e.target === e.target.closest('a')) {
        e.preventDefault();
        handleMenu();
      }
    });
  });

  btnMenu.addEventListener('click', handleMenu);
};



export default menu;

