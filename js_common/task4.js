//доп задача.1
//функция, определяющая четность числа
function isEven(i) {
  return i % 2 == 0;
}

//фильтр четных чисел массива.2
function filter(list, someFunction) {
  let filteredList = [];
  for (let i = 0; i<list.length; i++) {
    
    if (someFunction(list[i]) == true) {
      filteredList.push(list[i])
    }
  }
  console.log(filteredList);
}

var list = [2, 2, 4, 89, 11, 10, 6, 4, 2, 0, 90, 1000, 1243, 500, 130000]
filter(list, isEven);
