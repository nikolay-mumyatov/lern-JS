"use strict";

import modalOpen from "./modules/togglePopup";
import closeModal from "./modules/tabs";
import showUp from "./modules/addDot";
import lowScroll from "./modules/slider";
import accordeon from "./modules/calc";
import slider from "./modules/pictureChange";
import carusel from "./modules/lowScroll";
import validateInput from "./modules/validateInput";
import sendForm from "./modules/sendForm";

// Открытие модального окна
modalOpen();
// Закрытие модального окна
closeModal();
// Кнопка наверх
showUp();
// Плавный скролл по якорю
lowScroll();
// Табы
accordeon();
// Слайдер
slider();
// Слайдер-карусель
carusel();
// Валидация ввода в инпуты
validateInput();
// Отправка формы через AJAX
sendForm();