import React, { useState } from 'react';
import './Login.css';
import UserForm from '../UserForm/UserForm';
import { useForm } from 'react-hook-form';

function Login({currentUser, onSubmit, formResult}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    },
  });

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const onLogin = () => {
    onSubmit(email, password)
    reset();
  }

  return (<section className="section section_withForm">
    <UserForm onSubmit={handleSubmit(onLogin)} formName="auth" buttonDisabled={!isValid} title="Рады видеть!"
              spanText="Ещё не зарегистрированы?" link="/signup" linkText="Регистрация"
              buttonText="Войти" formResult={formResult}>
      <label htmlFor={`email-input`}
             className='form__label form__label_login'>
        Email
        <input {...register('email', {
          required: 'Обязательное поле',
          pattern: {
            value: /^[-\w.]+@([A-z\d][-A-z\d]+\.)+[A-z]{2,4}$/,
            message: 'Please Enter A Valid Email!',
          },
          minLength: {
            value: 2,
            message: 'Минимум 2 символа',
          },
          maxLength: {
            value: 30,
            message: 'Максимальная длина не больше 30 символов',
          },
        })} onChange={handleEmailChange} name='email'
               id='email-input'
               className={`form__input form__input_email form__input_login`}
               // value={email || ''}
          />
        <span className={`form__item-error email-input-error`}>{errors.email?.message}</span>
      </label>
      <label htmlFor={`password-input`}
             className={`form__label form__label_login`}>
        Пароль
        <input {...register('password', {
          required: 'Обязательное поле',
          minLength: {
            value: 8,
            message: 'Минимум 8 символа',
          },
        })} onChange={handlePasswordChange} type='password' name='password'
               id={`password-input`}
               className={`form__input form__input_password form__input_login`}
               autoComplete="on"
               value={password || ''}
               />
        <span className={`form__item-error password-input-error`}>{errors.password?.message}</span>
      </label>
    </UserForm>
  </section>);
}

export default Login;
