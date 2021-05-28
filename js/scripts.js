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
console.log(budgetDay);