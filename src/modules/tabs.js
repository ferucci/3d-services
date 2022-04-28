'use strict';

const tabs = () => {
  const tabsPanel = document.querySelector('.service-header');
  const tabs = document.querySelectorAll('.service-header-tab');
  const tabsContent = document.querySelectorAll('.service-tab');

  tabsPanel.addEventListener('click', (e) => {
    // if (e.target.classList.contains('service-header-tab')) 
    // при клике на дочерний элемент - заменяет ниже написанный код
    if (e.target.closest('.service-header-tab')) {
      const tabBtn = e.target.closest('.service-header-tab');
      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          tab.classList.add('active');
          // Передаю элемент коллекции с индексом. Осталось понять как интерпретатор понимает,что это именно тот индекс?
          tabsContent[index].classList.remove('d-none');
        } else {
          tab.classList.remove('active');
          tabsContent[index].classList.add('d-none');
        }
      });
    }
  });



}

export default tabs;