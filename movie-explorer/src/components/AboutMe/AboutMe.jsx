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
            С 2020 года начала свое обучение в IT, за это время прошла несколько разных курсов  по основам программирования и изучала основы языков (C#, Python, JS), но остановилась на Frontend разработке.
            В 2022 году окончила курс от Яндекс.Практикума по Веб-разработке, на которой получила возможность поработать с React, Node.js и Express. Я мама 3 летнего ребенка и все мое обучение было во время его сна, обычно не больше 3 часов в день, но строго каждый день.
            В свободное время учу Английский и Немецкие язык.
          </p>
          <a target="_blank" href="https://github.com/AntonovkaE" className="link aboutMe__gitHub" rel="noreferrer">GitHub</a>
        </div>
        <Portfolio/>
      </div>
    </div>
  </section>);
}

export default AboutMe;
