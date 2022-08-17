import React, {Component} from 'react';
import style from '../Fields.module.css'
import Error from "../../Error/Error";

class Input extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <label>
          {this.props.label}
          <input
            className={style.input}
            {...this.props}
          />
        </label>
        {
          this.props.error && <Error error={this.props.error}/>
        }
      </div>
    )
  }
}

export default Input;