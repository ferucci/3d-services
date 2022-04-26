'use strict';

const smoothScrolling = () => {
  const menu = document.querySelector('menu');
  const menuItems = menu.querySelectorAll('ul>li>a[href^="#"]');
  const linkNextBlock = document.querySelector('a');

  for (let item of menuItems) {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const id = item.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  linkNextBlock.addEventListener('click', (e) => {
    e.preventDefault();
    const id = linkNextBlock.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })

}

export default smoothScrolling;