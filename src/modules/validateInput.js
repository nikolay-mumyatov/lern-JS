"use strict";

const validateInput = () => {
  const inputCalc = document.querySelectorAll(".number");
  inputCalc.forEach((elem) => {
    elem.addEventListener("blur", () => {
      elem.value = elem.value.replace(/\D/g, "");
      elem.value = elem.value.trim();
      elem.value = elem.value.replace(/^-+|-+$/g, "");
    });
  });

  const inputWord = document.querySelectorAll(".input-text");
  inputWord.forEach((item) => {
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

  const inputName = document.querySelectorAll(".form-name");
  inputName.forEach((item) => {
    item.addEventListener("blur", () => {
      if (item.value.length < 2 || item.value.length > 50) {
        item.value = "";
      }
    });
  });

  const inputEmail = document.querySelectorAll(".input-email");
  inputEmail.forEach((item) => {
    item.addEventListener("blur", () => {
      item.value = item.value.replace(/[^a-zA@\-_.!~*']/g, "");
      item.value = item.value.trim();
      item.value = item.value.replace(/^-+|-+$/g, "");
    });
  });

  const inputPhone = document.querySelectorAll(".input-phone");
  inputPhone.forEach((item) => {
    item.addEventListener("blur", () => {
      item.value = item.value.replace(/[^1-9()0/-/+]/g, "");
      item.value = item.value.trim();
      item.value = item.value.replace(/^-+|-+$/g, "");
    });
  });
};

export default validateInput;