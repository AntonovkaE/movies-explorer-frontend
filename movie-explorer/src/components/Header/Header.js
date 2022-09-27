import React from 'react';
import logo from '../../images/logo.svg';
import accountIcon from '../../images/account-icon.svg';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header({ isAuth }) {
  const location = useLocation().pathname;
  console.log(location);
  const showMenu = () => {
  };
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
        <ul
          className={`list header__menu  ${(!isAuth || isNavigationHidden) ? 'header__menu_hidden' : 'header__menu_auth'} `}>
          <li className="menu__item"><NavLink className="menu__link link"
                                              to="/movies">Фильмы</NavLink></li>
          <li className="menu__item"><NavLink className="menu__link link" to="/saved-movies">Сохранённые
            фильмы</NavLink></li>
          <li className="menu__item"><NavLink className="menu__link link" to="/profile">Аккаунт <img
            src={accountIcon} alt="иконка пользователя"/>
          </NavLink></li>
        </ul>
      </nav>
    </header>);

}

export default Header;
