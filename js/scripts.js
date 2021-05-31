"use strict";
// Переменные

let money = 70000, 
  income = 'Фриланс', 
  addExpenses = 'Оплата квартиры, Атомобиль, Оплата связи', 
  deposit = true,
  mission = 800000,
  period = 8;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);

addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(', '));

let budgetDay = money / 30;
console.log(budgetDay.toFixed(2)); // Дневной бюджет

// - lesson_03 -

money = prompt("Ваш ежемесячный доход?");
addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
deposit = confirm("Есть ли у вас депозит в банке?");

let mandatoryExpensesOne = prompt('Введите обязательную статью расходов.'),
    costExpensesOne = prompt('Во сколько это обойдется?'),
    mandatoryExpensestwo = prompt('Введите обязательную статью расходов.'),
    costExpensesTwo = prompt('Во сколько это обойдется?');

let budgetMonth = money - costExpensesOne - costExpensesTwo;
console.log(`Бюджет на месяц: ${budgetMonth}`);

let missionMonth = mission / budgetMonth;
console.log(`${Math.ceil(missionMonth)} месяцев до достижения цели.`);

budgetDay = budgetMonth / 30;
console.log(`Ежедневный бюджет: ${Math.floor(budgetDay)}`); // Дневной бюджет

if (budgetDay >= 1200){
  console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 600 && budgetDay < 1199) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay <= 599 && budgetDay >= 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else {
  console.log('Что то пошло не так');
}

// жку, автомобиль, интернет, телефон, развлечения;