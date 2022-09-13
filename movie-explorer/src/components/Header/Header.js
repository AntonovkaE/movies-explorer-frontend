import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({isAuth, theme}) {
  const showMenu = () => {
  }

  return (
    <header className={`header header_${theme}`}>
      <nav className="header__nav">
        <img className="header__logo" alt="logo" src={logo}/>
        <div onClick={showMenu}
             className={`header__burger ${!isAuth ? "header__burger_hidden" : ''}  burger`}>
          <div className="burger__line burger__line_first"></div>
          <div className="burger__line burger__line_second"></div>
          <div className="burger__line burger__line_third"></div>
        </div>
        <ul className={`header__menu menu list ${isAuth ? "header__menu_hidden" : ''}`}>
          <li className="menu__item">
            <NavLink className="menu__link link" to="/sign-in">Регистрация</NavLink>
          </li>
          <li className="menu__item menu__item_black">
            <NavLink className="menu__link link" to="/sign-in">Войти</NavLink>
          </li>
        </ul>
      </nav>
    </header>);

}

export default Header;
