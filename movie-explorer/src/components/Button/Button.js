import React from 'react';
import './Button.css';

function Button({ status = '', type = 'button', text = '', onclick = () => {} }) {
  return (<button onClick={onclick} type={`${type}`} className={`button button_${status}`}>
    {text}
  </button>);
}

export default Button;
