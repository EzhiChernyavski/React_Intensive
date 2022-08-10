import React, {Component} from 'react';
import style from '../Fields.module.css'

class Textarea extends Component {
  render() {
    return (<div className={style.wrapper}>
        <label>
          {this.props.label}
          <textarea className={style.input} name={this.props.name} rows={this.props.rows}  placeholder={this.props.placeholder}/>
        </label>
      </div>);
  }
}

export default Textarea;