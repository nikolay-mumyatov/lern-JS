'use strict';

const carusel = () => {
  const carousel = document.querySelector(".services-carousel"),
    itemCarousel = document.querySelectorAll(".carousel-item"),
    arrowRight = document.querySelector(".arrow-right"),
    arrowLeft = document.querySelector(".arrow-left");

  let widthItem = 15,
    count = 1,
    positionStart = 0,
    num = 5;

  window.addEventListener("resize", () => {
    let widthWindow = document.documentElement.clientWidth;
    if (widthWindow <= 767) {
      widthItem = 16;
      num = 6;
    }
  });

  arrowRight.addEventListener("click", () => {
    positionStart = widthItem * count;
    count++;
    if (count === num) {
      positionStart = Math.max(
        positionStart,
        -widthItem * (itemCarousel.length - count)
      );
      carousel.style.transform = `translateX(-${positionStart}%)`;
      count = 0;
    } else {
      positionStart = Math.max(
        positionStart,
        -widthItem * (itemCarousel.length - count)
      );
      carousel.style.transform = `translateX(-${positionStart}%)`;
    }
  });

  arrowLeft.addEventListener("click", () => {
    positionStart += widthItem * count;
    positionStart = Math.min(positionStart, 0);
    carousel.style.transform = `translateX(${positionStart}%)`;
    count = 1;
  });
};

export default carusel;