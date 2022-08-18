import React, {Component} from 'react';
import style from '../Fields.module.css'
import Error from "../../Error/Error";



const Textarea = (props) => {

  const numChar = () => {
    const maxLetters = 600;
    const quantityLetters = props.value.length;
    let remains = maxLetters - quantityLetters;

    return remains;
  }

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
            style={{color: 'white'}}><span>{numChar()}/600 characters left</span>
          </div>
      }
    </div>    
  )
}


export default Textarea;