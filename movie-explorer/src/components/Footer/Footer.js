import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation().pathname;
  const isLocationHidden = location === '/signin' || location === '/signup' || location === '/profile' || location === '/404'
  return (
    <footer className={`footer ${isLocationHidden ? 'footer_hidden' : ''}`}>
      <p className="footer__projectName">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <ul className="list footer__links">
        <li className="footer__link">Яндекс.Практикум</li>
        <li className="footer__link">Github</li>
      </ul>
      <p className="footer__date">©{new Date().getFullYear()}</p>
    </footer>);
}

export default Footer;
