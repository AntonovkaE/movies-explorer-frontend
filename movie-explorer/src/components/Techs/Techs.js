import React from 'react';
import './Techs.css'

function Techs() {
  return(<section className="techs section">
    <div className="section__content">
      <h2 className="section__title">Технологии</h2>
      <h3 className="section__heading techs__heading">7 технологий</h3>
      <p className="section__subheading_techs">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="list techs-list">
        <li className="techs-list__item" >
          HTML
        </li>
        <li className="techs-list__item" >
          CSS
        </li>
        <li className="techs-list__item" >
          JS
        </li>
        <li className="techs-list__item" >
          React
        </li>
        <li className="techs-list__item" >
          Git
        </li>
        <li className="techs-list__item" >
          Express.js
        </li>
        <li className="techs-list__item" >
          mongoDB
        </li>
      </ul>
    </div>
  </section>)
}

export default Techs;
