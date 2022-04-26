'use strict';
const menu = () => {
  const btnMenu = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const menuClose = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  btnMenu.addEventListener('click', handleMenu);
  menuClose.addEventListener('click', handleMenu);

  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));
};



export default menu;

