/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoBG = document.querySelector('.promo__bg'),
      promoGenre = promoBG.querySelector('.promo__genre'),
      promoAdv = document.querySelectorAll('.promo__adv img'),
      promoContent = document.getElementsByClassName('promo__content'),      
      movieList = document.querySelector('.promo__interactive-list');

promoGenre.textContent = "Драма";

promoBG.style.backgroundImage = "url('img/bg.jpg')";

promoAdv.forEach(item => {
    item.remove();
});

movieList.innerHTML = "";

movieDB.movies.sort().forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${(i + 1) + ' )'} ${film}
            <div class="delete"></div>
        </li>
    `
});


