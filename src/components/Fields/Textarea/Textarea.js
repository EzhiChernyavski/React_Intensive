import React, {Component} from 'react';
import style from '../Fields.module.css'
import Error from "../../Error/Error";

class Textarea extends Component {

  numChar() {
    const maxLetters = 600;
    const quantityLetters = this.props.value.length;
    let remains = maxLetters - quantityLetters;

    return remains;
  }

  render() {
    return (
      <div className={style.wrapper}>
        <label>
          {this.props.label}
          <textarea
            className={style.input}
            {...this.props}
          />
        </label>
        {
          this.props.error ?
            <Error error={this.props.error}/> :
            <div
              style={{color: 'white'}}><span>{this.numChar()}/600 characters left</span>
            </div>
        }
      </div>
    )
  }
}

export default Textarea;