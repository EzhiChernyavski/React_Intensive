import React, {Component} from 'react';
import style from './Form.module.css'
import Input from "../Fields/Input/Input";
import Textarea from "../Fields/Textarea/Textarea";
import Button from "../Button/Button";

class Form extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <form onSubmit={this.props.handleUserSubmit}>
          <Input
            label='Name'
            type='text'
            name='name'
            placeholder='Enter your name'
            value={this.props.data.inputs.name}
            error={this.props.data.errors.name}
            onChange={this.props.handleUserInput}
          />
          <Input
            label='Last name'
            type='text'
            name='lastName'
            placeholder='Enter your last name'
            value={this.props.data.inputs.lastName}
            error={this.props.data.errors.lastName}
            onChange={this.props.handleUserInput}
          />
          <Input
            label='Date of birthday'
            type='date'
            name='birthday'
            placeholder='Enter your date of birthday'
            value={this.props.data.inputs.birthday}
            error={this.props.data.errors.birthday}
            onChange={this.props.handleUserInput}
          />
          <Input
            label='Phone'
            type='tel'
            name='phone'
            placeholder='+7-7777-77-77'
            maxLength='15'
            value={this.props.data.inputs.phone}
            error={this.props.data.errors.phone}
            onChange={this.props.handleUserInput}
          />
          <Input
            label='Web-site'
            type='url'
            name='webSite'
            placeholder='Enter your web-site'
            value={this.props.data.inputs.webSite}
            error={this.props.data.errors.webSite}
            onChange={this.props.handleUserInput}
          />
          <Textarea
            label='About you'
            name='aboutYou'
            rows={7}
            placeholder='Write some about you'
            value={this.props.data.inputs.aboutYou}
            error={this.props.data.errors.aboutYou}
            onChange={this.props.handleUserInput}
          />
          <Textarea
            label='Technology stack'
            name='technologyStack'
            rows={7}
            placeholder='Write your technology stack'
            value={this.props.data.inputs.technologyStack}
            error={this.props.data.errors.technologyStack}
            onChange={this.props.handleUserInput}
          />
          <Textarea
            label='Descriptions of the latest projects'
            name='lastProject'
            rows={7}
            placeholder='Write some about your latest project'
            value={this.props.data.inputs.lastProject}
            error={this.props.data.errors.lastProject}
            onChange={this.props.handleUserInput}
          />
          <div className={style.buttonWrapper}>
            <Button
              class='buttonSave'
              title='Save'
              type='submit'
            />
            <Button
              class='buttonCancel'
              title='Cancel'
              type='reset'
              reset={this.props.resetForm}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;