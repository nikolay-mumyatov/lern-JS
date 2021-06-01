"use strict";
// Переменные

let money = +prompt("Ваш ежемесячный доход?"), 
  income = 'Фриланс', 
  addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"), 
  deposit = confirm("Есть ли у вас депозит в банке?"),
  mission = 800000,
  period = 8;

// Функция возвращает тип данных
function showTypeOf(data) {
  console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);

// - lesson_03 -

let mandatoryExpensesOne = prompt('Введите обязательную статью расходов.'),
    costExpensesOne = +prompt('Во сколько это обойдется?'),
    mandatoryExpensestwo = prompt('Введите обязательную статью расходов.'),
    costExpensesTwo = +prompt('Во сколько это обойдется?');


// - lesson_04 -

// Функция возвращает сумму всех обязательных расходов за месяц
let totalExpenses;
function getExpensesMonth(costOne, costTwo) {
  totalExpenses = costOne + costTwo;
}
getExpensesMonth(costExpensesOne, costExpensesTwo);
console.log(`Сумма расходов: ${totalExpenses} руб`);


// Вывод возможных расходов
addExpenses = addExpenses.toLowerCase();
console.log(`Список возможных расходов: ${addExpenses.split(", ")}`);


// Функция возвращает Накопления за месяц (Доходы минус расходы)
let accumulatedMonth;
function getAccumulatedMonth(a, b) {
  accumulatedMonth = a - b;
}
getAccumulatedMonth(money, totalExpenses);
console.log(`Сумма накоплений: ${accumulatedMonth} руб`);


// Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат
let missionMonth;
function getTargetMonth(a, b) {
  missionMonth = a / b;
}
getTargetMonth(mission, accumulatedMonth);
console.log(
  `Колличество месяцев до достижения цели: ${Math.ceil(missionMonth)}`
);


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
