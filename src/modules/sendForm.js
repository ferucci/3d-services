'use strict';

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId)
  const formBtn = form.querySelectorAll('.form-btn')
  const statusBlock = document.createElement('div')
  const loadText = 'Загрузка...'
  const errorText = 'Данные заполнены не правильно!'
  const successText = 'Спасибо! Наш менеджер свяжиться с вами в ближайшее время'

  let formElements = form.querySelectorAll('input')

  statusBlock.style.color = 'white'

  const validate = (list) => {
    let success = true
    formElements = form.querySelectorAll('input')

    const addClass = (input) => {
      input.classList.remove('false')
      input.classList.add('success')
    }
    const removeClass = (input) => {
      input.classList.add('false')
      input.classList.remove('success')
    }

    const addEl = (el, err) => {
      err.style.cssText = `font-weight: bold; color: red; font-size: 1.2rem;`
      if (el.querySelector('p')) {
        el.remove()
        el.append(err)
      } else {
        el.append(err)
      }

    }
    const removeEl = () => {
      form.querySelectorAll('p').forEach((item) => {
        item.remove()
      })
    }

    list.forEach((input) => {
      let parentEl = input.parentNode
      let errorText = document.createElement('p')

      if (input === input.closest('[name="user_name"]')) {
        if (/[а-яА-Я]/g.test(input.value)) {
          addClass(input)
          if (errorText) {
            removeEl()
          }
        } else {
          removeClass(input)
          errorText.textContent = "Неправильно заполнено Имя"

          addEl(parentEl, errorText)
        }
      }
      if (input === input.closest('[name="user_email"]')) {
        if (/[\w\-\.]+@([\w]+\.)+[\w]+/gi.test(input.value) || input.value == '') {
          addClass(input)
        } else {
          removeClass(input)
          errorText.textContent = "Неправильно заполнен Емайл"

          addEl(parentEl, errorText)
        }
      }
      if (input === input.closest('[name="user_phone"]')) {
        if (/[\d\-\+\(\)]+/g.test(input.value)) {
          addClass(input)
          if (errorText) {
            removeEl()
          }
        } else {
          removeClass(input)
          errorText.textContent = "Неправильно заполнен Телефон"

          addEl(parentEl, errorText)
        }
      }

      if (input === input.closest('[name="user_message"]')) {
        if (/[а-яА-Я\.\,\!\?\$\:\-\d\s]/g.test(input.value)) {
          addClass(input)
          if (errorText) {
            removeEl()
          }
        } else {
          removeClass(input)
          errorText.textContent = "Введите сообщение"

          addEl(parentEl, errorText)
        }
      }
    })

    list.forEach(input => {
      if (!input.classList.contains('success')) {
        success = false
      }
    })

    return success
  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {

    let animBlock = document.querySelector('.sk-spinner')

    // Правильный подход создания объекта:
    // Создаю экземпляр форм даты
    const formData = new FormData(form)
    // Собираю из форм даты объект:
    // а так же он полезен будет для дополнительного содержимого
    const formBody = {}

    statusBlock.textContent = loadText
    animBlock.style.display = 'block'
    form.append(statusBlock)

    formData.forEach((value, key) => {
      // Записываю в объект значения
      formBody[key] = value
    })

    someElem.forEach(elem => {
      // Получаю элемент по id:
      const element = document.getElementById(elem.id)

      if (elem.type === 'block' && element.textContent !== '0') {
        formBody[elem.id] = element.textContent
      } else if (elem.type === 'input' && element.value !== '0') {
        formBody[elem.id] = element.value  // можно записать и name
      }
    })

    if (validate(formElements)) {
      // придут с сервера обработанные данные
      sendData(formBody)
        .then(data => {
          animBlock.style.display = 'none'
          statusBlock.textContent = successText
          formElements.forEach(input => {
            input.value = ''
          })
        })
        .catch(error => {
          statusBlock.textContent = errorText
        })
    } else {
      animBlock.style.display = 'none'
      statusBlock.textContent = errorText
    }

  }

  try {
    if (!form) {
      throw new Error('Верните форму на место!)')
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm()

      setTimeout(() => statusBlock.remove(), 5000);
    })
  } catch (error) {
    console.log(error.message);
  }

}

export default sendForm