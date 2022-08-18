import React from 'react';
import style from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={style[props.class]}
      type={props.type}
      onClick={props.reset}
    >
      {props.title}
    </button>
  )
};

export default Button;