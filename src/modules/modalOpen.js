'use strict';

const modalOpen = () => {
  const modalCallback = document.querySelector(".modal-callback"),
    modalOverlay = document.querySelector(".modal-overlay"),
    form = document.querySelector("form");

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

export default modalOpen;