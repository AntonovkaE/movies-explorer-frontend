import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (<section className="section aboutProject ">
    <div className="section__content section__content_aboutProject">
      <h2 className="aboutProject__title section__title">
        О проекте
      </h2>
      <div className="aboutProject__paragraphs">
        <div className="aboutProject__paragraph paragraph">
          <h3 className="paragraph__heading">Дипломный проект включал 5 этапов</h3>
          <p className="paragraph__text">Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные
            доработки.</p>
        </div>
        <div className="aboutProject__paragraph paragraph">
          <h3 className="paragraph__heading">На выполнение диплома ушло 5 недель</h3>
          <p className="paragraph__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
            было соблюдать, чтобы успешно
            защититься.</p>
        </div>
      </div>

      <div className="aboutProject__deadlines deadlines">
        <div className="deadlines__item deadlines__item_back">
          <div className="deadlines__heading deadlines__heading_back">1 неделя</div>
          <p className="deadlines__subheading">Back-end</p>
        </div>
        <div className="deadlines__item deadlines__item_front">
          <div className="deadlines__heading deadlines__heading_front">4 недели</div>
          <p className="deadlines__subheading">Front-end</p>
        </div>
      </div>
    </div>
  </section>);
}

export default AboutProject;
