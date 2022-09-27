import React from 'react';
import './Login.css';
import UserForm from '../UserForm/UserForm';

function Login() {
  return (<section className="section section_withForm">
    <UserForm name="login" title="Рады видеть!"
              spanText="Ещё не зарегистрированы?" link="/signup" linkText="Регистрация"
              buttonText="Войти">
    </UserForm>
  </section>);
}

export default Login;
