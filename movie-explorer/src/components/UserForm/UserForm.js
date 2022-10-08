import React, {useCallback} from 'react';
import { Link } from 'react-router-dom';
import './UserForm.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { FormWithValidation } from '../FormWithValidation/FormWithValidation';
import { validate } from '../FormWithValidation/FormWithValidation';
import useForm from '../../utils/useForm';
function UserForm({
  name, title, spanText, buttonText, linkText, link,
}) {
  const {values, errors, handleChange, handleSubmit} = useForm(() => {console.log('ok')}, validate)

  return (
    <form className={`form form_${name}`}>
      <h2 className={`form__heading form__heading_${name}`}>{title}</h2>
      <Input
        form={name}
        name="name"
        placeholder=""
        label="Имя"
        value="Виталий"
        maxLength="30"
        minLength="2"
      />
      <Input
        form={name}
        type="email"
        name="email"
        placeholder=""
        label="E-mail"
        value="pochta@yandex.ru"
        maxLength="30"
        minLength="2"
      />
      <Input
        form={name}
        type="password"
        name="password"
        placeholder=""
        label="Пароль"
        value=""
        maxLength=""
        minLength="2"
      />
      <div className="form__buttons">
        <Button
          type="submit"
          status={`${name !== 'edit' ? 'black button_form-auth' : ''} form__button  button_${name} `}
          text={buttonText}
        />
        <div className="form__caption">
          <span className="form__link-caption">{spanText}</span>
          <Link className={`link form__link form__link_${name}`} to={link}>{linkText}</Link>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
