"use strict";

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

export default togglePopup;