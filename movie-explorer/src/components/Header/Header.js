import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({ isAuth }) {
  const showMenu = () => {
  };

  return (
    <header className={`header`}>
      <nav className="header__nav">
        <img className="header__logo" alt="logo" src={logo}/>
        <div onClick={showMenu}
             className={`header__burger ${!isAuth ? 'header__burger_hidden' : ''}  burger`}>
          <div className="burger__line burger__line_first"></div>
          <div className="burger__line burger__line_second"></div>
          <div className="burger__line burger__line_third"></div>
        </div>
        <ul
          className={`header__menu menu list ${isAuth ? 'header__menu_hidden' : 'header__menu_notAuth'}`}>
          <li className="menu__item">
            <NavLink className="menu__link link" to="/sign-in">Регистрация</NavLink>
          </li>
          <li className="menu__item menu__item_black">
            <NavLink className="menu__link link" to="/sign-in">Войти</NavLink>
          </li>
        </ul>
        <ul className={`list header__menu  ${!isAuth ? 'header__menu_hidden' : 'header__menu_auth'} `}>
          <li className="menu__item"><NavLink className="menu__link link" to="/movies">Фильмы</NavLink></li>
          <li className="menu__item"><NavLink className="menu__link link" to="/movies">Сохранённые фильмы</NavLink></li>
          <li className="menu__item"><NavLink className="menu__link link" to="/movies">Аккаунт <svg width="12" height="14"
                                                                        viewBox="0 0 12 14"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.5 4C8.5 5.38071 7.38071 6.5 6 6.5C4.61929 6.5 3.5 5.38071 3.5 4C3.5 2.61929 4.61929 1.5 6 1.5C7.38071 1.5 8.5 2.61929 8.5 4ZM10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM4 9.25C1.92893 9.25 0.25 10.9289 0.25 13V14H1.75V13C1.75 11.7574 2.75736 10.75 4 10.75H8C9.24264 10.75 10.25 11.7574 10.25 13V14H11.75V13C11.75 10.9289 10.0711 9.25 8 9.25H4Z"
                  fill="black"/>
          </svg>
          </NavLink></li>
        </ul>
      </nav>
    </header>);

}

export default Header;
