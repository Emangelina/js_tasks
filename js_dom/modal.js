// const openModalBtn = document.querySelector('#openModalBtn');                      //реализация окна с помощью функции и разметка с помощью js
// const modalBody = document.querySelector('#modalBody');
// const successModal = createModal('Операция выполнена успешно!');


// openModalBtn.addEventListener('click', function(e) {
//   e.preventDefault;
//   modalBody.appendChild(successModal); //в реале нужно модалку создавать внутри body, т.к. она перекрывает все сожержимое страницы
// })


// function createModal(content) {
//   const overlay = document.createElement('div');
//   overlay.classList.add('overlay');

//   const modal = document.createElement('div');
//   modal.classList.add('modal');
//   modal.innerHTML = content;
//   overlay.appendChild(modal);

//   const closeBtn = document.createElement('a');
//   closeBtn.classList.add('close-btn');
//   modal.appendChild(closeBtn);
//   closeBtn.textContent = 'X';
//   closeBtn.href='#';

//   // const closeBtn = document.createElement('div');    не могу понять, почему не получается подключить svg через use. в html все то же работало нормально, полагаю, дело в задании атрибута у use.
//   // closeBtn.classList.add('close-btn');
//   // modal.appendChild(closeBtn);

//   // const closePic = document.createElement('svg');
//   // closeBtn.appendChild(closePic);

//   // const closeUse = document.createElement('use');
//   // closeUse.setAttributeNS('http://www.w3.org/2000/xlinks', 'xlink:href', './cross.svg#closeBtn') ;
//   // closePic.appendChild(closeUse);

//   closeBtn.addEventListener('click', function(e) {
//     e.preventDefault;
//     modalBody.removeChild(overlay);
//   })
  
//   overlay.addEventListener('click', function(e) {
//     // if (e.target == overlay) {
//     //   closeBtn.click();
//     // }
  
//     if (!e.target.classList.contains('modal')) {
//       closeBtn.click();
//     }
//   })

//   return overlay;
// }

const openModalBtn = document.querySelector('#openModalBtn');                         //реализация модального окна с помощью шаблона
const modalBody = document.querySelector('#modalBody');
const successModal = createModal('Операция выполнена успешно!');

openModalBtn.addEventListener('click', e => {
  e.preventDefault();
  modalBody.appendChild(successModal);
})


function createModal(content) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  //функционал закрытия для overlay
  overlay.addEventListener('click', e => {
    if (e.target == overlay) {
      closeBtn.click();
    }
  })
  
  const template = document.querySelector('#overlayTemplate');
  overlay.innerHTML = template.innerHTML;
  
  //далее пишем функционал закрытия
    const closeBtn = overlay.querySelector('.close-btn');
  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    modalBody.removeChild(overlay);
  })
  
  //далее вставляем сожержимое модального окна в разметку
  const contentElement = overlay.querySelector('.content');
  contentElement.innerHTML = content;

  return overlay;
}