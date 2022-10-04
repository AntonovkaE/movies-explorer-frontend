import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation().pathname;
  const isLocationHidden = location === '/signin' || location === '/signup' || location === '/profile' || location === '/404';
  return (
    <footer className={`footer ${isLocationHidden ? 'footer_hidden' : ''}`}>
      <p className="footer__projectName">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <ul className="list footer__links">
        <li className="footer__link">
          <a className="link footer__link" href="https://practicum.yandex.ru/"
             target="_blank" rel="noreferrer">Яндекс.Практикум
          </a>
        </li>
        <li className="footer__link">
          <a className="link footer__link" href="https://github.com/"
             target="_blank" rel="noreferrer">Github
          </a>
        </li>
      </ul>
      <p className="footer__date">©{new Date().getFullYear()}</p>
    </footer>);
}

export default Footer;
