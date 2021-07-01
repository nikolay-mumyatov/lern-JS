"use strict";

const pictureChange = () => {
  const teamBox = document.querySelector(".team"),
    imgTeam = teamBox.querySelectorAll(".command__photo");

  imgTeam.forEach((item) => {
    let srcAttr = item.getAttribute("src");
    if (item.hasAttribute("data-img")) {
      item.addEventListener("mouseenter", (event) => {
        item.src = event.target.dataset.img;
      });
      item.addEventListener("mouseleave", (event) => {
        item.src = srcAttr;
      });
    }
  });
};

export default pictureChange;