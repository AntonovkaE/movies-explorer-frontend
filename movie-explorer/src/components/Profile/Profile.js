import React from 'react';
import './Profile.css';
import UserForm from '../UserForm/UserForm';
function Profile() {
  return (<section className="section section_withForm profile">
    <UserForm name="edit" title="Привет, Виталий!" buttonText="Редактировать" linkText="Выйти из аккаунта" link="/logout"/>

  </section>);
}

export default Profile;
