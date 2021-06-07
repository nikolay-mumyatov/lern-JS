"use strict";

// Получаем элементы
let calcButton = document.getElementById("start"), // Кнопка "рассчитать"
  plusIncome = document.getElementsByTagName("button")[0], // Плюс доходы
  plusExpenses = document.getElementsByTagName("button")[1], // Плюс расходы
  depositCheck = document.querySelector("#deposit-check"), // Чекбокс депозит
  addIncomeItem = document.querySelectorAll(".additional_income-item"), // Возможный доход инпуты ввода
  elemBudgetMonth = document.getElementsByClassName("budget_month-value")[0], // Доходы за месяц
  elemBudgetDay = document.getElementsByClassName("budget_day-value")[0], //  Дневной бюджет
  elemExpensesMonth = document.getElementsByClassName("expenses_month-value")[0], // Расходы за месяц
  elemAddIncomeValue = document.getElementsByClassName("additional_income-value")[0], // Ввод возможных доходов
  elemAddExpensesValue = document.getElementsByClassName("additional_expenses-value")[0], // ВВод возможных расходов
  elemPeriodValue = document.getElementsByClassName("income_period-value")[0], // Накопления за период
  elemMissionValue = document.getElementsByClassName("target_month-value")[0], // Срок достижения цели в месяцах
  elemMoney = document.querySelector(".salary-amount"), // Месячный доход
  elemIncomeTitle = document.querySelector(".income-title"), // Название доп дохода
  elemIncomeAmount = document.querySelector(".income-amount"), // Сумма доп дохода
  elemExpensesTitle = document.querySelector("input.expenses-title"), // Обязательные расходы
  elemExpensesAmount = document.querySelector(".expenses-amount"), // Сумма обяз. расходов
  elemAddExpensesItem = document.querySelector(".additional_expenses-item"), // Возможные расходы, список
  elemMission = document.querySelector(".target-amount"), // Цель накопить
  elemRange = document.querySelector(".period-select"); // Ползунок - период расчета
  

// Функция проверяет входящие данные на число.
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);  
};

let money;
// Проверка money на число, если введенные данные не число, то вопрос повторяется.
const start = function () {
  do {
    money = prompt("Ваш ежемесячный доход?", "100000");
  } while (!isNumber(money));
};
// start();


let appData = {
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 800000,
  period: 8,
  // Основные вопросы клиенту
  ascing: function () {
    if (confirm("Есть ли у вас дополнительный источник дохода?")) {
      let itemIncome;
      do {
        itemIncome = prompt(
          "Введите дополнительный источник дохода",
          "фриланс"
        );
      } while (isNumber(itemIncome));

      let cashIncome = 0;
      do {
        cashIncome = +prompt(
          "Сколько в месяц вы зарабатываете дополнительно?",
          "12000"
        );
      } while (!isNumber(cashIncome));
      appData.income[itemIncome] = cashIncome;
    }

    // Вывод списка возможных расходов
    let addExpenses;
    do {
      addExpenses = prompt(
        "Перечислите возможные расходы за рассчитываемый период через запятую",
        "жку, телефон, интерент"
      );
    } while (isNumber(addExpenses));

    let wordArr = [];
    appData.addExpenses = addExpenses.split(",");
    for (let letter of appData.addExpenses) {
      letter = letter.trim();
      letter = letter[0].toUpperCase() + letter.slice(1);
      wordArr.push(letter);
    }
    console.log(wordArr.join(", "));
    appData.addExpenses = wordArr;

    // Информация о наличии депозита
    appData.deposit = confirm("Есть ли у вас депозит в банке?");

    // Информация о возможных расходах
    for (let i = 0; i < 2; i++) {
      let ask;
      do {
        ask = prompt("Введите обязательную статью расходов.");
      } while (isNumber(ask));

      let sum = 0;
      do {
        sum = prompt("Во сколько это обойдется?");
      } while (!isNumber(sum));

      appData.expenses[ask] = +sum;
    }
  },
  // Функция возвращает сумму всех обязательных расходов за месяц
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }

    console.log(`Сумма расходов: ${appData.expensesMonth} руб`);
  },
  // Функция возвращает Накопления за месяц (Доходы минус расходы)
  getBudget: function () {
    appData.budgetMonth = money - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  // Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат
  getTargetMonth: function () {
    let sumMonth = Math.ceil(appData.mission / appData.budgetMonth);
    if (sumMonth < 0) {
      console.log("Цель не будет достигнута.");
    } else {
      console.log(`Цель будет достигнута через ${sumMonth} мес.`);
    }
  },
  // Определяем уровень дохода
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1199) {
      console.log("У вас средний уровень дохода");
    } else if (appData.budgetDay <= 599 && appData.budgetDay >= 0) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    } else {
      console.log("Что то пошло не так");
    }
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      
      do {
        appData.percentDeposit = prompt(
          "Какой у вас годовой процент у депозита?",5);
      } while (!isNumber(appData.percentDeposit));
      
      do {
        appData.moneyDeposit = prompt("Какая сумма у вас вложена?", "100000");
      } while (!isNumber(appData.moneyDeposit));
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};
// appData.ascing();
// console.log(appData);

// Функция возвращает сумму всех обязательных расходов за месяц
appData.getExpensesMonth();
// Функция возвращает Накопления за месяц (Доходы минус расходы)
appData.getBudget();
// Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат
appData.getTargetMonth();
// Определяем уровень дохода
appData.getStatusIncome();
// Получаем информацию о депозите
appData.getInfoDeposit();
// Сколько сможет накопить клиент исходя из доходов за выбраный период
appData.calcSavedMoney();

// console.log("Наша программа включает в себя данные: ");
// for (let key in appData) {
//   console.log('Ключ: ' + key + ' -  Значение: ' + appData[key]);
// }