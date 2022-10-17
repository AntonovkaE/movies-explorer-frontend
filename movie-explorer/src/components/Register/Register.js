import React, { useState } from 'react';
import './Register.css';
import UserForm from '../UserForm/UserForm';
import { useForm } from 'react-hook-form';

function Register({ currentUser, onRegistration }) {
  const [values, setValues] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const handleRegistration = () => {
    onRegistration(values.name, values.email, values.password);
    reset();
  };

  const handleChangeInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (<section className="section section_withForm register">
    <UserForm onSubmit={handleSubmit(handleRegistration)} formName="register"
              title="Добро пожаловать!"
              spanText="Уже зарегистрированы?" link="/signin" linkText="Войти"
              buttonText="Зарегистрироваться"
              buttonDisabled={!isValid}>
      <label htmlFor={`name-input`}
             className={`form__label form__label_register`}>
        Имя
        <input {... register('name', {
          required: 'Обязательное поле',
          minLength: {
            value: 2,
            message: 'Минимум 2 символа',
          },
          maxLength: {
            value: 30,
            message: 'Максимальная длина не больше 30 символов',
          },
          pattern: {
            value: /^[A-Za-zа-яА-ЯёЁ\d-\s]*$/,
            message: `'Разрешены буквы, цифры и дефис'`,
          },
        })} onChange={handleChangeInput} type="text" name="name"
               id={`name-input`}
               className={`form__input form__input_name form__input_register`}
          // maxLength="30" minLength="2"
               autoComplete="on"
               required
               value={values.name || ''}
        />
        <span className={`form__item-error password-input-error`}>{errors.name?.message}</span>
      </label>
      <label htmlFor={`email-input`}
             className="form__label form__label_register">
        Email
        <input {... register('email', {
          required: 'Обязательное поле',
          minLength: {
            value: 2,
            message: 'Минимум 2 символа',
          },
          pattern: {
            value: /^[-\w.]+@([A-z\d][-A-z\d]+\.)+[A-z]{2,4}$/,
            message: 'Please Enter A Valid Email!',
          },

        })} onChange={handleChangeInput} name="email"
               id="email-input"
               className={`form__input form__input_email form__input_register`}
               maxLength="30"
               required/>
        <span className={`form__item-error password-input-error`}>{errors.email?.message}</span>
      </label>
      <label htmlFor={`password-input`}
             className={`form__label form__label_register`}>
        Пароль
        <input {... register('password', {
          required: 'Обязательное поле',
          minLength: {
            value: 8,
            message: 'Пароль должен быть больше 8 символов',
          },
        })} onChange={handleChangeInput} type="password" name="password"
               id={`password-input`}
               className={`form__input form__input_password form__input_register`}
               minLength="8"
               autoComplete="on"
               required/>
        <span className={`form__item-error password-input-error`}>{errors.password?.message}</span>
      </label>
    </UserForm>
  </section>);
}

export default Register;
