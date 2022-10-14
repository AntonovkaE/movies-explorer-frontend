import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './UserForm.css';
import Button from '../Button/Button';
// import Input from '../Input/Input';

function UserForm({
  formName, onSubmit, title, spanText, buttonText, linkText, link, children, buttonDisabled
}) {

  return (
    <form onSubmit={onSubmit} className={`form form_${formName}`}>
      <h2 className={`form__heading form__heading_${formName}`}>{title}</h2>
      {children}
      {/*<Input {...register('name', {*/}
      {/*  required: 'Обязательное поле',*/}
      {/*  minLength: {*/}
      {/*    value: 2,*/}
      {/*    message: 'Минимум 2 символа',*/}
      {/*  },*/}
      {/*  maxLength: {*/}
      {/*    value: 30,*/}
      {/*    message: 'Максимальная длина не больше 30 символов',*/}
      {/*  },*/}
      {/*  pattern: {*/}
      {/*    value: /^[A-Za-zа-яА-ЯёЁ\d-\s]*$/,*/}
      {/*    message: `'Разрешены буквы, цифры и дефис'`,*/}
      {/*  },*/}
      {/*})}*/}
      {/*       form={formName}*/}
      {/*       name="name"*/}
      {/*       placeholder=""*/}
      {/*       label="Имя"*/}
      {/*       onChange={handleChangeInput}*/}
      {/*       value={values.name || ''}*/}
      {/*       // maxLength="30"*/}
      {/*       // minLength="2"*/}
      {/*  errors={errors}*/}
      {/*/>*/}
      {/*<Input*/}
      {/*  {...register('email', {*/}
      {/*    required: "поле обязательное",*/}
      {/*    minLength: {*/}
      {/*      value: 2,*/}
      {/*      message: "Минимум 2 символа"*/}
      {/*    },*/}
      {/*    pattern: {*/}
      {/*      value: /^[-\w.]+@([A-z\d][-A-z\d]+\.)+[A-z]{2,4}$/,*/}
      {/*      message: 'Please Enter A Valid Email!',*/}
      {/*    },*/}
      {/*  })}*/}
      {/*  form={formName}*/}
      {/*  name="email"*/}
      {/*  label="E-mail"*/}
      {/*  onChange={handleChangeInput}*/}
      {/*  errors={errors}*/}
      {/*  // maxLength="30"*/}
      {/*  // minLength="2"*/}
      {/*/>*/}
      {/*<Input*/}
      {/*  {...register('password', {*/}
      {/*    required: 'Обязательное поле',*/}
      {/*    minLength: {*/}
      {/*      value: 8,*/}
      {/*      message: 'Пароль должен быть больше 8 символов',*/}
      {/*    },*/}
      {/*  })}*/}
      {/*  form={formName}*/}
      {/*  type="password"*/}
      {/*  name="password"*/}
      {/*  placeholder=""*/}
      {/*  label="Пароль"*/}
      {/*  onChange={handleChangeInput}*/}
      {/*  errors={errors}*/}
      {/*  // minLength="8"*/}
      {/*/>*/}
      <div className="form__buttons">
        <Button
          type="submit"
          status={`${formName !== 'edit' ? 'black button_form-auth' : ''} form__button  button_${formName} `}
          text={buttonText} isDisable={buttonDisabled}
        />
        <div className="form__caption">
          <span className="form__link-caption">{spanText}</span>
          <Link className={`link form__link form__link_${formName}`} to={link}>{linkText}</Link>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
