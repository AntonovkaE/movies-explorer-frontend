import React, { useState } from 'react';
import './Button.css';

function Button({ status, type }) {
  const [text, setText] = useState('Сохранить');
  // if (status === 'saved') {
  //   setText('');
  // }
  return (<button className={`button button_${type} button_${status}`}>
    {text}
  </button>);
}

export default Button;
