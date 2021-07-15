'use strict';

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

export default accordeon;