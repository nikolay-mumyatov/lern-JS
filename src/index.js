"use strict";

import modalOpen from "./modules/modalOpen";
import closeModal from "./modules/closeModal";
import showUp from "./modules/showUp";
import lowScroll from "./modules/lowScroll";
import accordeon from "./modules/accordeon";
import slider from "./modules/slider";
import carusel from "./modules/carusel";
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