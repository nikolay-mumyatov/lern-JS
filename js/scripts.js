"use strict";
// Переменные

// Функция проверяет входящие данные на число.
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);  
};


let money,
  income = 'Фриланс', 
  addExpenses, 
  deposit,
  mission = 800000,
  period = 8;


// Проверка money на число, если введенные данные не число, то вопрос повторяется.
const start = function () {
  do {
    money = prompt("Ваш ежемесячный доход?", "100000");
  } while (!isNumber(money));
};
start();


addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  "жку, телефон, интерент"
);

deposit = confirm("Есть ли у вас депозит в банке?");


// Функция возвращает тип данных
function showTypeOf(data) {
  console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);


// Функция возвращает сумму всех обязательных расходов за месяц
let expenses = [];
function getExpensesMonth(costOne, costTwo) {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt("Введите обязательную статью расходов.","Продукты");

    do {
      sum += +prompt("Во сколько это обойдется?", "23000");
    } while (!isNumber(sum));

  }
  console.log(expenses);
  return sum;
}
let expensesAmount = getExpensesMonth();
console.log(expensesAmount);
console.log(`Сумма расходов: ${expensesAmount} руб`);


// Вывод возможных расходов
addExpenses = addExpenses.toLowerCase();
console.log(`Список возможных расходов: ${addExpenses.split(", ")}`);


// Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth(money, totalExpenses) {
  return money - totalExpenses;
}
let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
console.log(`Сумма накоплений: ${accumulatedMonth} руб`);


// Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат
function getTargetMonth(mission, accumulatedMonth) {
  let sumMonth = mission / accumulatedMonth;
  if (sumMonth < 0) {
    console.log('Цель не будет достигнута.');
  } else {
    console.log(`Цель будет достигнута через ${Math.ceil(sumMonth)} мес.`);
  }
}
getTargetMonth(mission, accumulatedMonth);


// Узнаем дневной бюджет
let budgetDay = accumulatedMonth / 30;
console.log(`Бюджет на день: ${Math.ceil(budgetDay)} руб`);


// Определяем уровень дохода
function getStatusIncome() {
  if (budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода");
  } else if (budgetDay >= 600 && budgetDay < 1199) {
    console.log("У вас средний уровень дохода");
  } else if (budgetDay <= 599 && budgetDay >= 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
  } else {
    console.log("Что то пошло не так");
  }
}
getStatusIncome();
