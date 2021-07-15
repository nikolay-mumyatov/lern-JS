'use strict';

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

export default validateInput;