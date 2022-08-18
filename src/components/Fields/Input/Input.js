import React from 'react';
import style from '../Fields.module.css'
import Error from "../../Error/Error";


const Input = (props) => {
  return (
    <div className={style.wrapper}>
      <label>
        {props.label}
        <input
          className={style.input}
          {...props}
        />
      </label>
      {
        props.error && <Error error={props.error}/>
      }
    </div>
  )
}

export default Input;