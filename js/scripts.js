'use strict';

const booksCollection = document.querySelectorAll('.book'), // Все блоки книг
      elemBody = document.querySelector('body'),
      elemSpam = document.querySelector('.adv');

// Выстраиваем правильный порядок
booksCollection[1].after(booksCollection[0]);
booksCollection[5].after(booksCollection[2]);
booksCollection[3].before(booksCollection[4]);

// Меняем фон.
elemBody.style.backgroundImage = 'url("../image/you-dont-know-js.jpg")'; 

// Меняем заголовок.
const elemLink = document.querySelectorAll('h2 > a');
elemLink[2].innerHTML = "Книга 3. this и Прототипы Объектов";

// Удаляем рекламу.
elemSpam.remove();


// Получаем нужные книги и главы.
const bookTwo = booksCollection[0],
      bookFive = booksCollection[5],
      bookSix = booksCollection[2],
      chaptersBookTwo = bookTwo.querySelectorAll('li'),
      chaptersBookFive = bookFive.querySelectorAll('li'),
      chaptersBookSix = bookSix.querySelectorAll('li');

// Восстанавливаем главы 2-й книги
chaptersBookTwo[3].after(chaptersBookTwo[6]);
chaptersBookTwo[4].before(chaptersBookTwo[8]);
chaptersBookTwo[9].after(chaptersBookTwo[2]); 

// Восстанавливаем главы 5-й книги
chaptersBookFive[1].after(chaptersBookFive[9]);
chaptersBookFive[4].after(chaptersBookFive[2]);
chaptersBookFive[7].after(chaptersBookFive[5]);

// Добавляем главу в 6-ю книгу.
const newChapterSixBook = document.createElement('li');
newChapterSixBook.innerHTML = "Глава 8: За пределами ES6";
chaptersBookSix[8].after(newChapterSixBook);