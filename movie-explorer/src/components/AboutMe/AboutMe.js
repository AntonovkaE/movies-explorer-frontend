import React from 'react';
import './AboutMe.css'
import avatar from '../../images/IMG_7838.jpeg'

function AboutMe() {
  return(<section className="aboutMe section">
    <div className="section__content aboutMe__content">
      <h2 className="section__title">Студент</h2>
      <img className="aboutMe__photo" src={avatar}/>
      <h3 className="section__heading section__heading_aboutMe">Эльвира</h3>
      <p className="section__subheading section__subheading_aboutMe">Фронтенд-разработчик, 28 лет</p>
      <p className="aboutMe__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
      <a href="https://github.com/AntonovkaE" className="link aboutMe__gitHub">GitHub</a>
      <ul aria-label="Портфолио" className="list portfolio-list">
        <li className="portfolio-list__item">
          <a className="link" href="https://github.com/AntonovkaE/react-mesto-api-full">Статичный сайт</a>
        </li>
        <li className="portfolio-list__item">
          <a className="link" href="https://antonovkae.github.io/russian-travel/index.html">Адаптивный сайт</a>
        </li>
        <li className="portfolio-list__item">
          <a className="link" href="https://github.com/AntonovkaE/how-to-learn">Одностраничное приложение</a>
        </li>
      </ul>
    </div>
  </section>)
}

export default AboutMe;
