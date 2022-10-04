import React from 'react';
import './Button.css';

function Button({
  status = '',
  type = 'button',
  text = '',
  onclick = () => {},
  isHidden = false,
}) {
  return (<button onClick={onclick} type={type}
                  className={`button button_${status} ${isHidden ? "button_hidden" : ""}`}>
    {text}
  </button>);
}

export default Button;
