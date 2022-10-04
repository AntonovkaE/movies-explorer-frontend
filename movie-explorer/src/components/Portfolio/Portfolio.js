import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
        <ul aria-label="Портфолио" className="list portfolio-list">
          <li className="portfolio-list__item">
            <a
              target="_blank"
              className="link portfolio-list__link"
              href="https://github.com/AntonovkaE/how-to-learn" rel="noreferrer"
            >
              Статичный
              сайт
              <div className="portfolio-list__icon">↗</div>
            </a>
          </li>
          <li className="portfolio-list__item">
            <a
              target="_blank"
              className="link portfolio-list__link"
              href="https://antonovkae.github.io/russian-travel/index.html" rel="noreferrer"
            >
              Адаптивный
              сайт
              <div className="portfolio-list__icon">↗</div>
            </a>
          </li>
          <li className="portfolio-list__item">
            <a
              target="_blank"
              className="link portfolio-list__link"
              href="https://github.com/AntonovkaE/react-mesto-api-full" rel="noreferrer"
            >
              Одностраничное
              приложение
              <div className="portfolio-list__icon">↗</div>
            </a>
          </li>
        </ul>);
}

export default Portfolio;
