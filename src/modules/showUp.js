'use strict';

const showUp = () => {
  const upBtn = document.querySelector(".up-scroll");

  window.addEventListener("scroll", function (e) {
    const upHeight = window.pageYOffset;
    if (upHeight >= 520) {
      upBtn.style.visibility = "visible";
      upBtn.style.opacity = "1";
    } else {
      upBtn.style.visibility = "hidden";
      upBtn.style.opacity = "0";
    }
  });
};

export default showUp;