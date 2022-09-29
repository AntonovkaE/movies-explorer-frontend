import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ isAuth, showMenu, }) {
  const location = useLocation().pathname;
  const isNavigationHidden = (location === '/signup' || location === '/signin');
  return (
    <header className={`header`}>
      <nav className={`header__nav ${isNavigationHidden ? 'header__nav_center' : ''}`}>
        <img className="header__logo" alt="logo" src={logo}/>
        <div onClick={showMenu}
             className={`header__burger ${(!isAuth || isNavigationHidden) ? 'header__burger_hidden' : ''} burger`}>
          <div className="burger__line burger__line_first"></div>
          <div className="burger__line burger__line_second"></div>
          <div className="burger__line burger__line_third"></div>
        </div>
        <ul
          className={`header__menu menu list ${(isAuth || isNavigationHidden) ? 'header__menu_hidden' : 'header__menu_notAuth'}`}>
          <li className="menu__item">
            <NavLink className="menu__link link" to="/sign-in">Регистрация</NavLink>
          </li>
          <li className="menu__item menu__item_black">
            <NavLink className="menu__link link" to="/sign-in">Войти</NavLink>
          </li>
        </ul>
        <Navigation isNavigationHidden={!isAuth || isNavigationHidden} isFullScreen={false}/>
      </nav>
    </header>);

}

export default Header;
