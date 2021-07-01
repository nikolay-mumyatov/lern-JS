"use strict";

const lowScroll = () => {
  const linksScroll = document.querySelectorAll("a");

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

export default lowScroll;