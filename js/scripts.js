"use strict";

const modalOpen = () => {
  const phoneBtn = document.querySelector("#phone-modal"),
    modalCallback = document.querySelector(".modal-callback"),
    modalOverlay = document.querySelector(".modal-overlay");

  console.log(phoneBtn);

  phoneBtn.addEventListener("click", function (event) {
    event.preventDefault();

    modalCallback.style.display = "block";
    modalOverlay.style.display = "block";
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
      upBtn.style.visibility = 'visible';
      upBtn.style.opacity = '1';
    } else {
      upBtn.style.visibility = 'hidden';
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
