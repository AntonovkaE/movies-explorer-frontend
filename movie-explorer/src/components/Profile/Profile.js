import React, { useState } from 'react';
import './Profile.css';
import UserForm from '../UserForm/UserForm';
import { FormWithValidation, validate } from '../FormWithValidation/FormWithValidation';
// import useForm from '../../utils/useForm'
import { useForm } from 'react-hook-form';
function Profile({currentUser}) {
  // const { values, errors, handleChange, onSubmit } = FormWithValidation(validate);
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
  const [userName, setUserName] = useState('name')
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handleUserNameChange = (event) => {
    setUserName(event.target.name)
  }
  const [email, setEmail] = useState('email')
  return (<section className="section section_withForm profile">
    <UserForm formName="edit" title="Привет, Виталий!" buttonText="Редактировать" linkText="Выйти из аккаунта" link="/logout">
      <label htmlFor={`name-input`}
             className={`form__label form__label_profile`}>
        Имя
        <input {...register('name', {
          required: 'Обязательное поле',
          pattern: {
            value: /^[A-Za-zа-яА-ЯёЁ\d-\s]*$/,
            message: `'Разрешены буквы, цифры и дефис'`,
          },
        })} onChange={handleUserNameChange} type="text" name='name'
               id={`name-input`}
               className={`form__input form__input_name form__input_profile`}
               maxLength='30' minLength='2'
               autoComplete="on"
               value={userName}
               required/>
        <span className={`form__item-error name-input-error`}>{errors.name?.message}</span>
      </label>
      <label htmlFor={`email-input`}
             className='form__label form__label_profile form__label_without-line'>
        Email
        <input {...register('email', {
          required: 'Обязательное поле',
          pattern: {
            value: /^[-\w.]+@([A-z\d][-A-z\d]+\.)+[A-z]{2,4}$/,
            message: 'Please Enter A Valid Email!',
          },
        })} onChange={handleEmailChange} type='email' name='email'
               id='email-input'
               className={`form__input form__input_email form__input_profile`}
               maxLength='30'  minLength='2'
               autoComplete="on"
               value={email}
               required/>
        <span className={`form__item-error email-input-error`}>{errors.name?.message}</span>
      </label>
    </UserForm>

  </section>);
}

export default Profile;
