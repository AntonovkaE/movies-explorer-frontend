import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './UserForm.css';
import Button from '../Button/Button';
// import Input from '../Input/Input';

function UserForm({
  formName, onSubmit, title, spanText, buttonText, linkText, link, children, buttonDisabled, formResult
}) {
  return (
    <form onSubmit={onSubmit} className={`form form_${formName}`}>
      <h2 className={`form__heading form__heading_${formName}`}>{title}</h2>
      {children}
      <div className="form__buttons">
        <span className={`form__message form__message_${formResult.error ? 'error' : 'success'}`}>{formResult.message}</span>
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
