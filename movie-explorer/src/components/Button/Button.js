import React from 'react';
import './Button.css';

function Button({
  status = '',
  type = 'button',
  text = '',
  onclick = () => {},
  isHidden = false,
  isDisable = false,
}) {
  return (<button onClick={onclick} type={type} disabled={isDisable}
                  className={`button button_${status} ${isHidden ? 'button_hidden' : ''}`}>
    {text}
  </button>);
}

export default Button;
