//                                                                      //задача1. способ1
// const leftBtn = document.querySelector('#left');
// const rightBtn = document.querySelector('#right');
// const sliderList = document.querySelector('#sliderList');
// const computedStyles = getComputedStyle(sliderList);

// rightBtn.addEventListener('click', function() {
//   event.preventDefault();
//   let currentRight = parseInt(computedStyles.right);
  
//   if (currentRight <500) {
//     currentRight +=100;
//     sliderList.style.right = currentRight + 'px';
//   }
// })

// leftBtn.addEventListener('click', function() {
//   event.preventDefault();
//   let currentRight = parseInt(computedStyles.right);

//   if (currentRight >0) {
//     currentRight -= 100;
//     sliderList.style.right = currentRight + 'px';
//   }
// })

//                                                                      //задача1. способ2
// const leftBtn = document.querySelector('#left');
// const rightBtn = document.querySelector('#right');
// const sliderList = document.querySelector('#sliderList');
// const computedStyles = getComputedStyle(sliderList);
// const sliderItems = document.querySelectorAll('.slider__item');

// const itemWidth = getComputedStyle(sliderItems[0]).width;
// const step = parseInt(itemWidth);
// const preShownItems = 300 / step;
// const minRight = 0;
// const maxRight = (sliderItems.length - preShownItems) * step;
// let currentRight = 0;

// sliderList.style.right = currentRight;

// rightBtn.addEventListener ('click', function() {
//   event.preventDefault();

//   if (currentRight < maxRight) {
//     currentRight += step;
//     sliderList.style.right = currentRight + 'px';  }
// })

// leftBtn.addEventListener ('click', function() {
//   event.preventDefault();

//   if (currentRight > minRight) {
//     currentRight -= step;
//     sliderList.style.right = currentRight + 'px';  }
// })

// //способ3 с помощью DOM
// const leftBtn = document.querySelector('#left');
// const rightBtn = document.querySelector('#right');
// const sliderList = document.querySelector('#sliderList');

// rightBtn.addEventListener('click', function() {
//   event.preventDefault;
//   sliderList.appendChild(sliderList.firstElementChild);
// })

// leftBtn.addEventListener('click', function() {
//   event.preventDefault;
//   sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
// })

                                                                        //задача1. способ3 с помощью DOM и функции
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const sliderList = document.querySelector('#sliderList');

const loop = function(direction, event) {
  event.preventDefault;
  if (direction == 'right') {
    sliderList.appendChild(sliderList.firstElementChild);
  }
  else {
    sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
  }
}

rightBtn.addEventListener('click', function() {
  loop('right', event);
})

leftBtn.addEventListener('click', function() {
  loop('left', event);
})
