# Дипломный проект Movie Explorer

https://user-images.githubusercontent.com/67238673/203473005-556f6352-0c2d-40a7-8981-c3db4f0b721c.mov


[Фронтенд часть на сервере](https://movie.antonovskaya.nomoredomains.sbs)

[Бэкенд часть на GitHub](https://github.com/AntonovkaE/movies-explorer-api)

[макет](https://disk.yandex.ru/d/cM7wFvYO041klQ)


--- 

2-я часть (frontend) дипломного проекта Яндекс.Практикум по специальности Веб-разработчик.

npm i — установка зависимостей

npm start — запускает сервер

npm run build — Создает оптимизированную версию приложения

---

## Функционал проекта:

- Регистрация
- Авторизация
- Поиск фильмов
- Сохранение и удаление фильмов
- Редактирование профиля пользователя
- Валидация полей форм с помощью React User Form.

---

## Технологии:
- React
- Семантика HTML элементов
- CSS
- Все классы названы по БЭМ
- Вёрстка на Flex layout и/или Grid layout.
- Adaptive & Responsive
- JavaScript
- Использование модулей Js
- Работа с внешним и реализованном в первой части Api, применяя fetch
- Promise
- Create React App
- Разметка портирована в JSX.
- React hooks
- Аутентификация на React
- ES6 Деструктуризация.

---

## Роуты:
- /   отображается страница «О проекте»;
- /signup   отображаются страницы регистрации;
- /signin   отображаются страницы авторизации;

### защищенные авторизацией:
- /saved-movies  отображается страница «Сохранённые фильмы»;
- /profile   отображается страница с профилем пользователя;
- /movies   отображается страница «Фильмы»;
