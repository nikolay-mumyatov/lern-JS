"use strict";

import countTimer from './modules/countTimer';
import toggleMenu from "./modules/toggleMenu";
import togglePopup from "./modules/togglePopup";
import tabs from "./modules/tabs";
import addDot from "./modules/addDot";
import slider from "./modules/slider";
import calc from "./modules/calc";
import pictureChange from "./modules/pictureChange";
import lowScroll from "./modules/lowScroll";
import validateInput from "./modules/validateInput";
import sendForm from "./modules/sendForm";

// Timer
countTimer("15 july 2021");
// Menu
toggleMenu();
// popup
togglePopup();
// Табы
tabs();
// Добавление точек в слайдер
addDot();
// Слайдер
slider();
// Калькулятор
calc();
//Поменять картинку при наведении в блоке Наша команда.
pictureChange();
//Плавный скролл страницы
lowScroll();
// Проверка инпутов
validateInput();
// отправка формы через ajax
sendForm();
