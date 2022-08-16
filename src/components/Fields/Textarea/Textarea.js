import React, {Component} from 'react';
import style from '../Fields.module.css'
import Error from "../../Error/Error";

class Textarea extends Component {
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
          this.props.inputinvalid ?
            <Error error={this.props.error}/> :
            <div
              style={{color: 'white'}}><span>{this.props.numchar}/600 characters left</span>
            </div>
        }
      </div>
    )
  }
}

export default Textarea;