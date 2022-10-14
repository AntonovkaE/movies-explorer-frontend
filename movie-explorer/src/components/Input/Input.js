import React from 'react';
import './Input.css';

function Input({
  form,
  value = '',
  name,
  label,
  onChange = () => {},
  placeholder,
  maxLength,
  minLength,
  message= '',
  type = 'text',
  errors
}) {
  return (
    <label htmlFor={`${name}-input`}
           className={`form__label form__label_${form} ${(form === 'edit' && name === "email") ? 'form__label_without-line' : ''} ${(form === 'edit' && name === 'password') || (form === 'login' && name === 'name') ? 'form__label_hidden' : ''}`}>
      {label}
      <input onChange={onChange} type={type} name={name}
             id={`${name}-input`}
             className={`form__input form__input_${name} form__input_${form}`}
             placeholder={placeholder} maxLength={maxLength} minLength={minLength} autoComplete="on"
             required/>
      <span className={`form__item-error ${name}-input-error`}>{errors.name?.message}</span>
    </label>);
}

export default Input;

