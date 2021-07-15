"use strict";

const modalOpen = () => {
  const modalCallback = document.querySelector(".modal-callback"),
    modalOverlay = document.querySelector(".modal-overlay");

  document.body.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;
    if (
      target.matches(".callback-btn") ||
      target.matches(".button-services") ||
      target.matches(".absolute")
    ) {
      modalCallback.style.display = "block";
      modalOverlay.style.display = "block";
    }
  });
};
modalOpen();

const closeModal = () => {
  document.body.addEventListener("click", (e) => {
    let target = e.target;
    if (target.matches(".modal-overlay") || target.matches(".cross")) {
      document.querySelector(".modal-callback").style.display = "none";
      document.querySelector(".modal-overlay").style.display = "none";
    }
  });
};
closeModal();

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
showUp();

const lowScroll = () => {
  const linksScroll = document.querySelectorAll(".scroll");

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
};

lowScroll();

const accordeon = () => {
  const accordeon = document.querySelector(".accordeon"),
    tab = accordeon.querySelectorAll(".accordeon-element"),
    tabContent = document.querySelectorAll(".accordeon-element-content");

  const toggleTab = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tab[i].classList.add("active");
        tabContent[i].classList.remove("hidden-content");
      } else {
        tab[i].classList.remove("active");
        tabContent[i].classList.add("hidden-content");
      }
    }
  };

  accordeon.addEventListener("click", (event) => {
    let target = event.target;
    target = target.closest(".accordeon-element");

    if (target) {
      tab.forEach((item, i) => {
        if (item === target) {
          toggleTab(i);
        }
      });
    }
  });
};
accordeon();

const slider = () => {
  const slide = document.querySelectorAll(".item");

  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, "slider-item-active");
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, "slider-item-active");
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  startSlide(3000);
};
slider();

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
    positionStart = Math.max(positionStart, -widthItem * (itemCarousel.length - count)
    );
    carousel.style.marginLeft = positionStart + "px";
  });

  arrowLeft.addEventListener("click", () => {
    positionStart += widthItem * count;
    positionStart = Math.min(positionStart, 0);
    carousel.style.marginLeft = positionStart + "px";
  });
};
carusel();
