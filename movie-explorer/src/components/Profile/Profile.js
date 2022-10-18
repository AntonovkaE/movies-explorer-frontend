import React, { useState } from 'react';
import './Profile.css';
import UserForm from '../UserForm/UserForm';
import { useForm } from 'react-hook-form';

function Profile({ currentUser, onSubmit, formResult }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const [email, setEmail] = useState(currentUser.email);
  const [userName, setUserName] = useState(currentUser.name);
  const [result, setResult] = useState({})

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const onUpdateUserData = () => {
    if (isDataNotChanged) {
      setResult({ message: 'Данные не изменены', error: true });
      return;
    }
    onSubmit(userName, email)
    setResult(formResult)
    reset();
  };

  const isDataNotChanged = currentUser.name === userName && currentUser.email === email;

  const isButtonDisabled = !isValid || isDataNotChanged;

  return (<section className="section section_withForm profile">
    <UserForm onSubmit={handleSubmit(onUpdateUserData)} formName="edit" title={`Привет, ${currentUser.name}!`} buttonText="Редактировать"
              linkText="Выйти из аккаунта" link="/logout" formResult={result} buttonDisabled={isButtonDisabled}>
      <label htmlFor={`name-input`}
             className={`form__label form__label_profile`}>
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
        })} onChange={handleUserNameChange} type="text" name="name"
               id={`name-input`}
               className={`form__input form__input_name form__input_profile`}
               value={userName || ''}
               />
        <span className={`form__item-error name-input-error`}>{errors.name?.message}</span>
      </label>
      <label htmlFor={`email-input`}
             className="form__label form__label_profile form__label_without-line">
        Email
        <input {... register('email', {
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
            value: /^[-\w.]+@([A-z\d][-A-z\d]+\.)+[A-z]{2,4}$/,
            message: 'Please Enter A Valid Email!',
          },
        })} onChange={handleEmailChange} type="email" name="email"
               id="email-input"
               className={`form__input form__input_email form__input_profile`}
               value={email || ''}
        />
        <span className={`form__item-error email-input-error`}>{errors.email?.message}</span>
      </label>
    </UserForm>

  </section>);
}

export default Profile;
