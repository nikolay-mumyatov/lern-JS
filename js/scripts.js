"use strict";

const modalOpen = () => {
  const modalCallback = document.querySelector(".modal-callback"),
    modalOverlay = document.querySelector(".modal-overlay"),
    form = document.querySelector('form');

  document.body.addEventListener("click", (event) => {
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
carusel();




const validateInput = () => {
  const inputName = document.querySelectorAll(".form-name");
  inputName.forEach((item) => {
    item.addEventListener("blur", () => {
      item.value = item.value.replace(/[^а-яА-ёЁ -]/g, "");
      item.value = item.value.trim();
      item.value = item.value.replace(/-{2,}/g, "-");
      item.value = item.value.replace(/[ ]{2,}/g, " ");
      item.value = item.value.replace(/^-+|-+$/g, "");
      if (item.classList.contains("bio")) {
        item.value = item.value.replace(/( |^)[а-яё]/g, function (x) {
          return x.toUpperCase();
        });
      }
    });
  });
  
  const inputPhone = document.querySelectorAll(".input-phone");
  inputPhone.forEach((item) => {
    item.addEventListener("blur", () => {
      item.value = item.value.replace(/[^1-9()0/+]/g, "");
      item.value = item.value.trim();
    });
  });
};
validateInput();









const sendForm = () => {
  const errorMessage = "Ошибка! Письмо не отправлено.",
    loadMessage = "Идет загрузка...",
    successMessage = "Спасибо! Мы скоро с вами свяжемся!",
    modalBlock = document.querySelector(".modal-callback"),
    modalOverlay = document.querySelector(".modal-overlay");

  const statusMessage = document.createElement("div");
  statusMessage.style.cssText = "font-size: 16px";

  const postData = (body) => {
    return fetch("../server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  const clearInput = () => {
    const inputItem = document.querySelectorAll("input");
    inputItem.forEach((item) => {
      item.value = "";
    });
  };

  const formCallback = document.querySelector("#form-callback");
    console.log(formCallback);

    formCallback.addEventListener('submit', (event) => {
      event.preventDefault();
      formCallback.appendChild(statusMessage);
      statusMessage.style.color = "#000000";
      const formData = new FormData(formCallback);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      statusMessage.textContent = loadMessage;

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(response);
          } else {
            setTimeout(function () {
              statusMessage.textContent = "";
            }, 3000);
            statusMessage.textContent = successMessage;
            setTimeout(function () {
              modalBlock.style.display = "none";
              modalOverlay.style.display = "none";
            }, 3000);
          }
        })
        .catch((error) => (statusMessage.textContent = errorMessage))
        .finally(clearInput());
    });
};
sendForm();