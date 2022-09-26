import React from 'react';
import './Profile.css';
import Input from '../Input/Input';

function Profile() {
  return (<section className="section section_profile profile">
    <h2 className="profile__heading">Привет, Виталий!</h2>
    <form className="form form_edit">
      <div>
        <Input form="edit-form" name="name" placeholder="" label="Имя" value="Виталий"
               maxLength="30" minLength="2"/>
        <Input form="edit-form" type="email" name="email" placeholder="" label="E-mail"
               value="pochta@yandex.ru"
               maxLength="30" minLength="2" line={false}/>
      </div>
      <div className="profile__buttons">
        <button type="submit"
                className="button profile__button profile__button_edit">Редактировать
        </button>
        <button className="button profile__button profile__button_exit">Выйти из аккаунта</button>
      </div>
    </form>

  </section>);
}

export default Profile;
