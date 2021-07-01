"use strict";

const addDot = () => {
  const slide = document.querySelectorAll(".portfolio-item"),
    dotsBox = document.querySelector(".portfolio-dots");

  slide.forEach((item, i) => {
    let dot = document.createElement("li");
    dot.classList.add("dot");

    if (i === 0) {
      dot.classList.add("dot-active");
    }

    dotsBox.appendChild(dot);
  });
};

export default addDot;