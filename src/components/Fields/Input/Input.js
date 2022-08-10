import React, {Component} from 'react';
import style from '../Fields.module.css'

class Input extends Component {
  //Т.к не добавляются никакие новые методы и переменные constructor можно не писать
  render() {
    return (
      <div className={style.wrapper}>
        <label>
          {this.props.label}
          <input
            className={style.input}
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}
          />
        </label>
      </div>
    );
  }
}

export default Input;