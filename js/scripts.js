"use strict";

const start = function () {
  let botNumber = 47;

  const check = function () {
    let userNumber = +prompt("Угадай число от 1 до 100");
    if (userNumber === null) {
      alert("Игра окончена!");
      return;
    } else if (isNaN(parseFloat(userNumber))) {
      alert("Введи число!");
      check();
    } else if (userNumber === botNumber) {
      alert("Поздравляю, Вы угадали!!! Игра окончена!");
      return;
    } else if (userNumber > botNumber) {
      alert("Загаданное число меньше!");
      check();
    } else {
      alert("Загаданное число больше!");
      check();
    }
  };
  check();
};
let result = start();
