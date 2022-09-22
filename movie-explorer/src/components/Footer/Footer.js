import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__projectName">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <ul className="list footer__links">
        <li className="footer__link">Яндекс.Практикум</li>
        <li className="footer__link">Github</li>
      </ul>
      <p className="footer__date">©{new Date().getFullYear()}</p>
    </footer>);
}

export default Footer;
