"use strict";

const toggleMenu = () => {
  const btnMenu = document.querySelector(".menu"),
    menu = document.querySelector("menu"),
    menuLink = document.querySelectorAll(".menu__link"),
    closeBtn = document.querySelector(".close-btn");

  const handlerMenu = () => {
    menu.classList.toggle("active-menu");
  };

  btnMenu.addEventListener("click", handlerMenu);
  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    handlerMenu();
  });
  menuLink.forEach((item) => {
    item.addEventListener("click", handlerMenu);
  });
};

export default toggleMenu;