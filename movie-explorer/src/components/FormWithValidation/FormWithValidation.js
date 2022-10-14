import React, { useCallback } from 'react';

export function FormWithValidation(validate) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {

    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    // setIsValid(target.closest('form').checkValidity());
    setIsValid(!errors.name || !errors.email || !errors.password || true )
    console.log(isValid)
  };

  const onSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setErrors((validate(values)));
    console.log(errors)
    // setIsValid(true);
    // console.log(errors)
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return { values, handleChange, onSubmit, errors, isValid, resetForm };
}

export function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  } else if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  } else if (!values.name) {
    errors.name = 'Name is required';
  } else if (!/^[0-9A-ZА-ЯЁ]+$/i.test(values.name)) {
    errors.name = 'Имя может состоять из букв, пробела'
  }
  console.log(errors)
  return errors;
};
