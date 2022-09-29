import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import accountIcon from '../../images/account-icon.svg';

function Navigation({ isNavigationHidden, isFullScreen, onClose = () => {} }) {
  return (<ul
    className={`list header__menu  ${isNavigationHidden ? 'header__menu_hidden' : 'header__menu_auth'} ${isFullScreen ? 'header__menu_fullScreen' : ''}`}>
    <li className={`menu__item ${!isFullScreen ? 'menu__item_hidden' : 'menu__item_fullScreen'}`}><NavLink onClick={onClose}
      className="menu__link link"
      to="/">Главная</NavLink></li>
    <li className={`menu__item ${isFullScreen ? 'menu__item_fullScreen' : ''}`}><NavLink onClick={onClose} className="menu__link link"
                                        to="/movies">Фильмы</NavLink></li>
    <li className={`menu__item ${isFullScreen ? 'menu__item_fullScreen' : ''}`}><NavLink onClick={onClose} className="menu__link link" to="/saved-movies">Сохранённые
      фильмы</NavLink></li>
    <li className={`menu__item ${isFullScreen ? 'menu__item_fullScreen menu__item_down' : ''}`}><NavLink onClick={onClose}
      className={`link menu__link ${isFullScreen ? 'menu__link_fullScreen' : ''}`} to="/profile">Аккаунт<img className="menu__accountImg"
      src={accountIcon} alt="иконка пользователя"/>
    </NavLink></li>
  </ul>);
}

export default Navigation;
