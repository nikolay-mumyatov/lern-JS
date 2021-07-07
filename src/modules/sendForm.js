"use strict";

const sendForm = () => {
  const errorMessage = "Ошибка отправки!",
    loadMessage = "Идет загрузка...",
    successMessage = "Спасибо! Мы скоро с вами свяжемся!",
    popupBlock = document.querySelector(".popup");

  const statusMessage = document.createElement("div");
  statusMessage.style.cssText = "font-size: 2rem;";

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

  const formAll = document.querySelectorAll(".form-ajax");
  formAll.forEach((item) => {
    item.addEventListener("submit", (event) => {
      event.preventDefault();
      item.appendChild(statusMessage);
      statusMessage.style.color = "#ffffff";
      const formData = new FormData(item);
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
              popupBlock.style.display = "none";
            }, 3000);
          }
        })
        .catch((error) => (statusMessage.textContent = errorMessage))
        .finally(clearInput());
    });
  });
};

export default sendForm;
