import React, {Component} from 'react';
import style from './CompletedForm.module.css'

class CompletedForm extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <h1>{this.props.data.inputs.name} {this.props.data.inputs.lastName}</h1>
      </div>
    );
  }
}

export default CompletedForm;