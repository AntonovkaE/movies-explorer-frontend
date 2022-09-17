import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (<section className="section aboutProject ">
    <h2 className="aboutProject__title">
      О проекте
    </h2>
    <div className="aboutProject__paragraph paragraph">
      <h3 className="paragraph__heading">Дипломный проект включал 5 этапов</h3>
      <p className="paragraph__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
        доработки.</p>
    </div>
    <div className="aboutProject__paragraph">
      <h3 className="paragraph__heading">На выполнение диплома ушло 5 недель</h3>
      <p className="paragraph__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
        защититься.</p>
    </div>
    <div>
      <div>
        <div>1 неделя</div>
        <p>Back-end</p>
      </div>
      <div>
        <div>4 недели</div>
        <p>Front-end</p>
      </div>
    </div>
  </section>);
}

export default AboutProject;
