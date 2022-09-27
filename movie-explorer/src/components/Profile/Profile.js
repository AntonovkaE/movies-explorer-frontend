import React from 'react';
import './Profile.css';
// import Input from '../Input/Input';
import UserForm from '../UserForm/UserForm';
function Profile() {
  return (<section className="section section_withForm profile">
    <UserForm name="edit" title="Привет, Виталий!" buttonText="Редактировать" linkText="Выйти из аккаунта" link="/logout"/>
        {/*<div className="profile__buttons">*/}
        {/*  <button type="submit"*/}
        {/*          className="button profile__button profile__button_edit">Редактировать*/}
        {/*  </button>*/}
        {/*  <button className="button profile__button profile__button_exit">Выйти из аккаунта</button>*/}
        {/*</div>*/}


  </section>);
}

export default Profile;
