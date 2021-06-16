"use strict";

setInterval(function () {
  // Timer
  const countTimer = function (deadLine) {
    const greetingElem = document.querySelector(".greeting"),
      todayElem = document.querySelector(".today"),
      nowTimeElem = document.querySelector(".now-time"),
      counterElem = document.querySelector(".counter");

    let data = new Date();

    let dataStop = new Date(deadLine).getTime(),
      dataNow = new Date().getTime(),
      dayRamaining = Math.ceil((dataStop - dataNow) / 1000 / 86400);

    // Время суток
    const greeting = function () {
      if (data.getHours() >= 6 && data.getHours() <= 11) {
        greetingElem.textContent = "Доброе утро!";
      } else if (data.getHours() >= 12 && data.getHours() <= 22) {
        greetingElem.textContent = "Добрый день!";
      } else {
        greetingElem.textContent = "Доброй ночи!";
      }
    };
    greeting();

    // Преобразуем дни недели
    let todayDay = data.getDay();
    let nowWeekDay;
    switch (todayDay) {
      case 0:
        nowWeekDay = "Воскресенье";
        break;
      case 1:
        nowWeekDay = "Понедельник";
        break;
      case 2:
        nowWeekDay = "Вторник";
        break;
      case 3:
        nowWeekDay = "Среда";
        break;
      case 4:
        nowWeekDay = "Четверг";
        break;
      case 5:
        nowWeekDay = "Пятница";
        break;
      case 6:
        nowWeekDay = "Суббота";
        break;
    }
    todayElem.textContent = `Сегодня: ${nowWeekDay}`;

    // Выводим время
    let time = data.toLocaleTimeString("en");
    nowTimeElem.textContent = `Текущее время: ${time}`;

    // Выводим дни до Нового года
    let stringDayRemaining = String(dayRamaining).slice(-1);
    let countDay = "";

    if (Number(stringDayRemaining) === 1) {
      countDay = "день";
    } else if (
      Number(stringDayRemaining) >= 2 &&
      Number(stringDayRemaining) <= 4
    ) {
      countDay = "дня";
    } else {
      countDay = "дней";
    }
    counterElem.textContent = `До нового года осталось ${dayRamaining} ${countDay}.`;
  };

  countTimer("01 January 2022");
}, 1000);
