'use strict';

const start = function() {
  let userNumber = +prompt("Угадай число от 1 до 100");
  let botNumber = 47;
  if (isNaN(parseFloat(userNumber))) {
    alert("Введи число!");
    start();
  } else if (userNumber === null) {
    alert("Игра окончена!");
    return;
  } else if (userNumber === botNumber) {
    alert("Поздравляю, Вы угадали!!!");
    return userNumber;
  } else if (userNumber > botNumber) {
    alert("Загаданное число меньше!");
    start();
  } else {
    alert("Загаданное число больше!");
    start();
  }
};
let result = start();
console.log(result);