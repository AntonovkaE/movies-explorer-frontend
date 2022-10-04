import React from 'react';
import './AboutMe.css';
import avatar from '../../images/IMG_7838.jpeg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (<section className="aboutMe section">
    <div className="section__content aboutMe__content">
      <h2 className="section__title section__title_aboutMe">Студент</h2>
      <div className="aboutMe__flex">
        <img alt="личное фото" className="aboutMe__photo" src={avatar}/>
        <div className="aboutMe__inf">
          <h3 className="section__heading section__heading_aboutMe">Эльвира</h3>
          <p className="section__subheading section__subheading_aboutMe">
            Фронтенд-разработчик, 28
            лет
          </p>
          <p className="aboutMe__description">
            Я родился и живу в Саратове, закончил факультет
            экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как
            прошёл
            курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной
            работы.
          </p>
          <a target="_blank" href="https://github.com/AntonovkaE" className="link aboutMe__gitHub" rel="noreferrer">GitHub</a>
        </div>
        <Portfolio/>
      </div>
    </div>
  </section>);
}

export default AboutMe;
