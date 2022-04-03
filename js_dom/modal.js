const openModalBtn = document.querySelector('#openModalBtn');                      //реализация окна с помощью функции и разметка с помощью js
const modalBody = document.querySelector('#modalBody');
const successModal = createModal('Операция выполнена успешно!');


openModalBtn.addEventListener('click', function(e) {
  e.preventDefault;
  modalBody.appendChild(successModal); //в реале нужно модалку создавать внутри body, т.к. она перекрывает все сожержимое страницы
})


function createModal(content) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = content;
  overlay.appendChild(modal);

  const closeBtn = document.createElement('a');
  closeBtn.classList.add('close-btn');
  modal.appendChild(closeBtn);

  closeBtn.innerHTML = '<svg><use xlink:href = "./cross.svg#closeBtn"></use></svg>';

  closeBtn.addEventListener('click', function(e) {
    e.preventDefault;
    modalBody.removeChild(overlay);
  })
  
  overlay.addEventListener('click', function(e) {
    if (!e.target.classList.contains('modal')) {
      closeBtn.click();
    }
  })

  return overlay;
}

// const openModalBtn = document.querySelector('#openModalBtn');                         //реализация модального окна с помощью шаблона
// const modalBody = document.querySelector('#modalBody');
// const successModal = createModal('Операция выполнена успешно!');

// openModalBtn.addEventListener('click', e => {
//   e.preventDefault();
//   modalBody.appendChild(successModal);
// })


// function createModal(content) {
//   const overlay = document.createElement('div');
//   overlay.classList.add('overlay');
//   //функционал закрытия для overlay
//   overlay.addEventListener('click', e => {
//     if (e.target == overlay) {
//       closeBtn.click();
//     }
//   })
  
//   const template = document.querySelector('#overlayTemplate');
//   overlay.innerHTML = template.innerHTML;
  
//   //далее пишем функционал закрытия
//     const closeBtn = overlay.querySelector('.close-btn');
//   closeBtn.addEventListener('click', e => {
//     e.preventDefault();
//     modalBody.removeChild(overlay);
//   })
  
//   //далее вставляем сожержимое модального окна в разметку
//   const contentElement = overlay.querySelector('.content');
//   contentElement.innerHTML = content;

//   return overlay;
// }