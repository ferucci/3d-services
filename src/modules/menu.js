'use strict';
const menu = () => {
  const menu = document.querySelector('menu');
  const menuAllLinks = menu.querySelectorAll('a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  }

  document.addEventListener('click', (e) => {
    const menuBtn = e.target.closest('.menu');

    if (menuBtn) {
      handleMenu();
      return;
    } else if (e.target.matches('menu>ul>li>a') || e.target.matches('menu>a')) {
      menuAllLinks.forEach(link => {
        if (e.target === link) {
          e.preventDefault();
          handleMenu();
          return;
        }
      });
    } else if (menu.closest('.active-menu') && e.target !== menu) {
      handleMenu();
    }
  });

};



export default menu;

