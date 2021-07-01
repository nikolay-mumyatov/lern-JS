"use strict";

const toggleMenu = () => {
  const btnMenu = document.querySelector(".menu"),
    menu = document.querySelector("menu");

  const handlerMenu = () => {
    menu.classList.toggle("active-menu");
  };

  btnMenu.addEventListener("click", handlerMenu);

  document.addEventListener("click", (event) => {
    let target = event.target;
    target = target.closest("menu");
    if (target) {
      handlerMenu();
    }
  });
};

export default toggleMenu;