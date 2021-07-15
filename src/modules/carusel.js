'use strict';

const carusel = () => {
  const carousel = document.querySelector(".services-carousel"),
    itemCarousel = document.querySelectorAll(".carousel-item"),
    arrowRight = document.querySelector(".arrow-right"),
    arrowLeft = document.querySelector(".arrow-left");

  let widthItem = 260,
    count = 2,
    positionStart = 0;

  arrowRight.addEventListener("click", () => {
    positionStart -= widthItem * count;
    positionStart = Math.max(
      positionStart,
      -widthItem * (itemCarousel.length - count)
    );
    carousel.style.marginLeft = positionStart + "px";
  });

  arrowLeft.addEventListener("click", () => {
    positionStart += widthItem * count;
    positionStart = Math.min(positionStart, 0);
    carousel.style.marginLeft = positionStart + "px";
  });
};

export default carusel;