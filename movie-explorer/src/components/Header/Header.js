import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ showMenu }) {
  const location = useLocation().pathname;
  const isNavigationHidden = (location === '/signup' || location === '/signin' || location === '/404');
  const isAuth = (location !== '/' )
  const headerHidden = (location === '/404')
  return (
    <header className={`header ${headerHidden ? 'header_hidden': ''}`}>
      <nav className={`header__nav ${isNavigationHidden ? 'header__nav_auth' : ''}`}>
        <NavLink className="link" to="/"><img className="header__logo" alt="logo" src={logo}/></NavLink>
        <div onClick={showMenu}
             className={`header__burger ${(!isAuth || isNavigationHidden) ? 'header__burger_hidden' : ''} burger`}>
          <div className="burger__line burger__line_first"></div>
          <div className="burger__line burger__line_second"></div>
          <div className="burger__line burger__line_third"></div>
        </div>
        <ul
          className={`navigation list ${(isAuth || isNavigationHidden) ? 'navigation_hidden' : 'navigation_notAuth'}`}>
          <li className="navigation__item">
            <NavLink className="navigation__link link" to="/signup">Регистрация</NavLink>
          </li>
          <li className="navigation__item navigation__item_black">
            <NavLink className="navigation__link link" to="/signin">Войти</NavLink>
          </li>
        </ul>
        <Navigation isNavigationHidden={!isAuth || isNavigationHidden} isFullScreen={false}/>
      </nav>
    </header>);

}

export default Header;
