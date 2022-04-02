//доп задача.1
//функция, определяющая четность числа
function isEven(i) {
  if (i % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isEven(987));

//фильтр четных чисел массива.2
function filter(list) {
  let filteredList = [];
  for (let i = 0; i<list.length; i++) {
    
    function isEven(i) {
      if (list[i] % 2 == 0) {
        return true;
      }
      else {
        return false;
      }
    }
    let result = isEven(i);
    
    if (result == true) {
      filteredList.push(list[i])
    }
  }
  console.log(filteredList);
}

var list = [2, 2, 4, 89, 11, 10, 6, 4, 2, 0, 90, 1000, 1243, 500, 130000]
filter(list);
