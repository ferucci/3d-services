import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import smoothScrolling from './modules/smoothScrolling';
import validForms from './modules/validForms';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


timer('13 may 2022');
menu();
modal();
smoothScrolling();
validForms();
tabs();
slider();
calc(300);
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});
sendForm({
  formId: 'form2',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});
sendForm({
  formId: 'form3',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});

