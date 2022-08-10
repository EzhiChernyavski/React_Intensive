import React, {Component} from 'react';
import style from './Button.module.css'

class Button extends Component {
  render() {
    return (
      <div className={style.buttonWrapper}>
        <input className={style.button} type="submit" value="Save"/>
        <input className={style.button} type="reset" value="Cancel"/>
      </div>
    );
  }
}

export default Button;