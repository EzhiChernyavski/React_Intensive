import React from 'react';
import style from '../Fields.module.css'
import Error from "../../Error/Error";


const Textarea = (props) => {


  const maxLetters = 600;

  return (
    <div className={style.wrapper}>
      <label>
        {props.label}
        <textarea
          className={style.input}
          {...props}
        />
      </label>
      {
        props.error ?
          <Error error={props.error}/> :
          <div
            style={{color: 'white'}}>
            <span>{maxLetters - props.value.length}/600 characters left</span>
          </div>
      }
    </div>
  )
}


export default Textarea;