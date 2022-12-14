import React from 'react';
import { Link } from 'react-router-dom';
import './UserForm.css';
import Button from '../Button/Button';

function UserForm({
  formName,
  onSubmit,
  title,
  spanText,
  buttonText,
  onButtonClick = () => {},
  onLinkClick = () => {},
  linkText,
  link,
  children,
  buttonDisabled,
  formResult,
}) {
  const resultError = formResult.error || '';
  const resultMessage = formResult.message || '';
  return (
    <form onSubmit={onSubmit} className={`form form_${formName}`}>
      <h2 className={`form__heading form__heading_${formName}`}>{title}</h2>
      {children}
      <div className="form__buttons">
        <span
          className={`form__message form__message_${resultError ? 'error' : 'success'}`}>{resultMessage}</span>
        <Button
          type="submit" onclick={onButtonClick}
          status={`${formName !== 'edit' ? 'black button_form-auth' : ''} form__button  button_${formName}`}
          text={buttonText} isDisable={buttonDisabled}
        />
        <div className="form__caption">
          <span className="form__link-caption">{spanText}</span>
          <Link onClick={onLinkClick} className={`link form__link form__link_${formName}`}
                to={link}>{linkText}</Link>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
