'use strict';

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId)
  const statusBlock = document.createElement('div')
  const loadText = 'Загрузка...'
  const errorText = 'Ошибка...'
  const successText = 'Спасибо! Наш менеджер свяжиться с вами в ближайшее время'




  const validate = (list) => {
    let success = true

    // list.forEach(input => {
    //   if (!input.classList.contains('success')) {
    //     success = false
    //   }
    // })

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
    const formElements = form.querySelectorAll('input')

    // Правильный подход создания объекта:
    // Создаю экземпляр форм даты
    const formData = new FormData(form)
    // Собираю из форм даты объект:
    // а так же он полезен будет для дополнительного содержимого
    const formBody = {}

    statusBlock.textContent = loadText

    form.append(statusBlock)

    formData.forEach((value, key) => {
      // Записываю в объект значения
      formBody[key] = value  // НУЖНО ПОНЯТЬ как присваивается
    })

    someElem.forEach(elem => {
      // Получаю элемент по id:
      const element = document.getElementById(elem.id)


      if (elem.type === 'block') {    // Здесь проверяю на ТИП 
        formBody[elem.id] = element.textContent
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value  // можно записать и name
      }
    })

    if (validate(formElements)) {
      // придут с сервера обработанные данные
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText
          formElements.forEach(input => {
            input.value = ''
          })
        })
        .catch(error => {
          statusBlock.textContent = errorText
        })
    } else {
      alert('Данные не валидны!!!')
    }

  }

  try {
    if (!form) {
      throw new Error('Верните форму на место!)')
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let animBlock = document.querySelector('.sk-spinner')
      animBlock.style.display = 'block'
      console.log('submit')
      submitForm()
    })
  } catch (error) {
    console.log(error.message);
  }


}

export default sendForm