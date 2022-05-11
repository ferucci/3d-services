'use strict';

const validForms = () => {
  const inputsCalc = document.querySelectorAll('input.calc-item');
  const forms = document.querySelectorAll('form[name="user_form"]');

  const checkCalc = () => {
    inputsCalc.forEach((input) => {
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]+/g, '');
      });
    });
  };

  const checkValid = () => {

    forms.forEach((item) => {
      const inputsAll = item.querySelectorAll('input');

      const addClass = (input) => {
        input.classList.remove('false')
        input.classList.add('success')
      }
      const removeClass = (input) => {
        input.classList.add('false')
        input.classList.remove('success')
      }

      inputsAll.forEach((input) => {

        let parentEl = input.parentNode
        let errorText = document.createElement('p')
        errorText.style.cssText = `font-weight: bold; color: red; font-size: 1.4rem;`

        if (input === input.closest('.form-email')) {
          input.classList.add('success')
          input.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/[^\w\s*\@\-\.\!\~\*\']+/g, '').replace(/\s+/g, ' ');
            if (/[\w\-\.]+@([\w]+\.)+[\w]+/gi.test(input.value) || input.value == '') {
              addClass(input)
              if (errorText) {
                errorText.remove()
              }
            } else {
              removeClass(input)
              errorText.textContent = "Неправильно заполнен Емайл"

              parentEl.append(errorText)
            }
          });
        }

        if (input === input.closest('[type="text"]')) {
          input.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/(?:^|\s|[-"'([{])+\S/g, (str) => str.toUpperCase()).replace(/[^а-яА-Я\-\s]/g, '').replace(/\s+/g, ' ');
            if (/[а-яА-Я]/g.test(input.value)) {
              addClass(input)
              if (errorText) {
                errorText.remove()
              }
            } else {
              removeClass(input)
              errorText.textContent = "Неправильно заполнено Имя"

              parentEl.append(errorText)

            }
          });
        }

        if (input === input.closest('.mess')) {
          input.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\.\,\!\?\$\:\-\d\s]/g, '').replace(/\s+/g, ' ');
            if (/[а-яА-Я\.\,\!\?\$\:\-\d\s]/g.test(input.value)) {
              addClass(input)
              if (errorText) {
                errorText.remove()
              }
            } else {
              removeClass(input)
              errorText.textContent = "Введите сообщение"

              parentEl.append(errorText)
            }
          });
        }

        if (input === input.closest('.form-phone')) {
          input.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/[^\d\s\-\(\)\+]+/g, '').replace(/\s+/g, ' ');
            if (/[\d\-\+\(\)]+/g.test(input.value)) {
              addClass(input)
              if (errorText) {
                errorText.remove()
              }
            } else {
              removeClass(input)
              errorText.textContent = "Неправильно заполнен Телефон"

              parentEl.append(errorText)
            }
          });
        }

      });

    });

  };

  checkValid();
  checkCalc();

};


export default validForms;