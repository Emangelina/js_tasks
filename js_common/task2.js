//задача2
function getWorthyWorkers (workers) {
  let salarycompare = [];

  for (let i = 0; i<workers.length; i++) {
    let a = workers[i].salary;
    if (a > 1000) {
      salarycompare.push(workers[i].name);
    }
  }

  return salarycompare;
}

const workers = [
  {name:"Сергей", salary:3000},
  {name:"Настя", salary:2500},
  {name:"Маргарита", salary:1800},
  {name:"Наталья", salary:500},
  {name:"Михаил", salary:1000},
  {name:"Любовь", salary:900},
  {name:"Александр", salary:1500},
  {name:"Ирина", salary:700},
];

console.log(getWorthyWorkers(workers));

