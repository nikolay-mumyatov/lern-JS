'use strict';

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

  formCallback.addEventListener("submit", (event) => {
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

export default sendForm;