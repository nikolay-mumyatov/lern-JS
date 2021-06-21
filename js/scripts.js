window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Timer
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

  countTimer("17 june 2021");

  // Menu
  const toggleMenu = () => {
    const btnMenu = document.querySelector(".menu"),
      menu = document.querySelector("menu");

    const handlerMenu = () => {
      menu.classList.toggle("active-menu");
    };

    btnMenu.addEventListener("click", handlerMenu);

    document.addEventListener("click", (event) => {
      let target = event.target;
      target = target.closest('menu');
      if (target){
        handlerMenu();
      }
    });
  };
  toggleMenu();

  // popup
  const togglePopup = () => {
    const popup = document.querySelector(".popup"),
      popupBtn = document.querySelectorAll(".popup-btn"),
      popupClose = document.querySelector(".popup-close"),
      popupContent = document.querySelector(".popup-content");

    popupBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        popup.style.display = "block";

        let screenWidth = window.innerWidth; // width display

        if (screenWidth > 768) {
          let count = 0,
            interval;

          const animationPopup = () => {
            interval = requestAnimationFrame(animationPopup);

            if (count < 50) {
              popupContent.style.opacity = `${count * 2}%`;
              count++;
            } else {
              cancelAnimationFrame(interval);
            }
          };
          interval = requestAnimationFrame(animationPopup);
        } else {
          return;
        }
      });
    });

    popupClose.addEventListener("click", () => {
      popup.style.display = "none";
    });
  };
  togglePopup();

  // Табы
  const tabs = () => {
    const tabHeader = document.querySelector(".service-header"),
      tab = tabHeader.querySelectorAll(".service-header-tab"),
      tabContent = document.querySelectorAll(".service-tab");

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add("active");
          tabContent[i].classList.remove("d-none");
        } else {
          tab[i].classList.remove("active");
          tabContent[i].classList.add("d-none");
        }
      }
    };

    tabHeader.addEventListener("click", (event) => {
      let target = event.target;
      target = target.closest(".service-header-tab");

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };

  tabs();

  //Плавный скролл страницы
  const linksScroll = document.querySelectorAll("a");

  for (let item of linksScroll) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      let _this = this;

      const linkHref = _this.getAttribute("href");
      document.querySelector(linkHref).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
