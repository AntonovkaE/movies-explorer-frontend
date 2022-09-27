import React from 'react';
import './Register.css';
import UserForm from '../UserForm/UserForm';

function Register() {
  return (<section className="section section_withForm register">
    <UserForm name="register" title="Добро пожаловать!"
              spanText="Уже зарегистрированы?" link="/signin" linkText="Войти"
              buttonText="Зарегистрироваться">
    </UserForm>
  </section>);
}

export default Register;
