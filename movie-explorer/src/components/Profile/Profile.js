import React from 'react';
import './Profile.css';
import Input from '../Input/Input';

function Profile() {
  return (
    <section className="section section_profile profile">
      <h2 className="">Привет, Виталий!</h2>
      <form>
        <Input name="name" placeholder="Имя" value="Виталий" maxLength="30" minLength="2"/>
        <Input type="email" name="email" placeholder="E-mail" value="pochta@yandex.ru" maxLength="30" minLength="2"/>
      </form>
      <button className="button profile__button profile__button_edit">Редактировать</button>
      <button className="button profile__button profile__button_exit">Выйти из аккаунта</button>
    </section>);
}

export default Profile;
