'use strict';

const countTimer = function (deadLine) {
  const timerHours = document.querySelector("#timer-hours"),
    timerMinutes = document.querySelector("#timer-minutes"),
    timerSeconds = document.querySelector("#timer-seconds");

  function getTimeRemaining() {
    let dataStop = new Date(deadLine).getTime(),
      dataNow = new Date().getTime(),
      timeRamaining = (dataStop - dataNow) / 1000,
      seconds = String(Math.floor(timeRamaining % 60)),
      minutes = String(Math.floor((timeRamaining / 60) % 60)),
      hours = String(Math.floor(timeRamaining / 60 / 60));

    if (hours.length < 2) {
      hours = hours.padStart(2, "0");
    }
    if (minutes.length < 2) {
      minutes = minutes.padStart(2, "0");
    }
    if (seconds.length < 2) {
      seconds = seconds.padStart(2, "0");
    }

    return {
      timeRamaining,
      hours,
      minutes,
      seconds,
    };
  }

  const updateClock = function () {
    const idInterval = setTimeout(updateClock, 1000);
    let timer = getTimeRemaining();

    timerHours.textContent = timer.hours;
    timerMinutes.textContent = timer.minutes;
    timerSeconds.textContent = timer.seconds;

    if (timer.timeRamaining < 0) {
      clearInterval(idInterval);
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };

  setTimeout(updateClock, 1000);
};

export default countTimer;