const inputNumber = document.querySelector('#number');
const inputColor = document.querySelector('#color');
const outList = document.querySelector('#outList');

inputNumber.addEventListener('change', e => {
  const numValue = e.target.value;
  const markup = createMarkup(numValue);

  // outList.innerHTML = markup.innerHTML;
  outList.innerHTML = markup;
})

const createMarkup = numValue => {
  let markup = "";
  // let markup = document.createElement('div');
  
  for (let i=0; i<numValue; i++) {
    const outItem = document.createElement('li');
    outItem.classList.add('outItem');
    outItem.textContent = i + 1;
    // markup.appendChild(outItem);
    markup += outItem.outerHTML;
  }
  return markup
}

const colorItem = (item, color) => {
  item.style.backgroundColor = color;
}
let changed = false;

inputColor.addEventListener('change', e => {
  const colorValue = e.target.value;
  const outItems = outList.querySelectorAll('.outItem');
  // outItems.forEach(element => {
  //   element.style.backgroundColor = colorValue;
  // });

  changed = !changed;

  for (i=0; i<outItems.length; i++) {
    const currentItem = outItems[i];
    const itemNumber = i + 1;
    let colorToApply ='';

    if (changed == true) {
      colorToApply = itemNumber %2 !== 0 ? colorValue : 'transparent';
    } else {
      colorToApply = itemNumber %2 == 0 ? colorValue : 'transparent';
    }
    colorItem(currentItem, colorToApply);

    // if (changed == true) {
    //   if (itemNumber % 2 !== 0) {
    //     colorItem(currentItem, colorValue);
    //   } else {
    //     colorItem(currentItem, "transparent")
    //   }
    // } else {
    //   if (itemNumber % 2 == 0) {
    //     colorItem(currentItem, colorValue);
    //   } else {
    //     colorItem(currentItem, "transparent")
    //   }
    // }

    // if (changed == true) {                                                           //если переменная colorToApply задается внутри тернарного оператора, то код может выглядеть так
    //   const colorToApply = itemNumber %2 !== 0 ? colorValue : 'transparent';
    //   colorItem(currentItem, colorToApply);
    // } else {
    //   const colorToApply = itemNumber %2 == 0 ? colorValue : 'transparent';
    //   colorItem(currentItem, colorToApply);
    // }
  }

})

// function div(a, b) {
//     if (b<0) {
//       throw new Error('b должен быть положительным числом!');
//     } else if (b==0) {
//       throw new Error('На ноль делить нельзя!');
//     } else if (b==undefined) {
//       throw new Error('b должен быть передан!');
//     } else if(!isFinite(b)) {
//       throw new Error('b должен быть числом!');
//     } 
//     return a/b;
// }

// try {
//   var result = div(10, 0);
//   console.log(result);
// } catch (e) {
//   console.log(e.message);
// }

