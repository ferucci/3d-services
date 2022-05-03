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

      inputsAll.forEach((input) => {

        if (input === input.closest('.form-email')) {
          input.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/[^\w\s*\@\-\.\!\~\*\']+/g, '').replace(/\s+/g, ' ');
          });
        }

        if (input === input.closest('[type="text"]')) {
          input.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/(?:^|\s|[-"'([{])+\S/g, (str) => str.toUpperCase()).replace(/[^а-яА-Я\-\s]/g, '').replace(/\s+/g, ' ');
          });
        }

        if (input === input.closest('.mess')) {
          input.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\.\,\!\?\$\:\-\d\s]/g, '').replace(/\s+/g, ' ');
          });
        }

        if (input === input.closest('.form-phone')) {
          input.addEventListener('blur', (e) => {
            e.target.value = e.target.value.replace(/[^\d\s\-\(\)\+]+/g, '').replace(/\s+/g, ' ');;
          });
        }

      });

    });

  };

  checkValid();
  checkCalc();

};


export default validForms;