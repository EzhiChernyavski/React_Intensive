import React, {Component} from 'react';
import style from './Button.module.css'

class Button extends Component {
  render() {
    return (
      <button
        className={style[this.props.class]}
        type={this.props.type}
        onClick={this.props.reset}
      >
        {this.props.title}
      </button>
    );
  }
}

export default Button;