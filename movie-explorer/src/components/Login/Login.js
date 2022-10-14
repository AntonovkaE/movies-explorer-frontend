import React, { useState } from 'react';
import './Login.css';
import UserForm from '../UserForm/UserForm';
import { FormWithValidation, validate } from '../FormWithValidation/FormWithValidation';
import { useForm } from 'react-hook-form';
// import useForm from '../../utils/useForm';

function Login({currentUser}) {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    },
  });
  // const { register } = useForm();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  // const { values, errors, handleChange, onSubmit } = FormWithValidation(validate);
  return (<section className="section section_withForm">
    <UserForm name="formName" title="Рады видеть!"
              spanText="Ещё не зарегистрированы?" link="/signup" linkText="Регистрация"
              buttonText="Войти">
      <label htmlFor={`email-input`}
             className='form__label form__label_login'>
        Email
        <input {...register('email', {
          required: 'Обязательное поле',
          pattern: {
            value: /^[-\w.]+@([A-z\d][-A-z\d]+\.)+[A-z]{2,4}$/,
            message: 'Please Enter A Valid Email!',
          },
        })} onChange={handleEmailChange} type='email' name='email'
               id='email-input'
               className={`form__input form__input_email form__input_login`}
               maxLength='30'  minLength='2'
               autoComplete="on"
               required/>
        <span className={`form__item-error email-input-error`}>{errors.name?.message}</span>
      </label>
      <label htmlFor={`password-input`}
             className={`form__label form__label_login`}>
        Пароль
        <input {...register('password', {
          required: 'Обязательное поле',
          pattern: {
            message: 'Password must be 8 or more characters',
          },
        })} onChange={handlePasswordChange} type='password' name='password'
               id={`password-input`}
               className={`form__input form__input_password form__input_login`}
               minLength='8'
               autoComplete="on"
               required/>
        <span className={`form__item-error password-input-error`}>{errors.name?.message}</span>
      </label>
    </UserForm>
  </section>);
}

export default Login;
