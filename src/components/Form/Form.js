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
            onChange={this.props.handleUserInput}
            error={this.props.data.errors.name}
          />
          <Input
            label='Last name'
            type='text'
            name='lastName'
            placeholder='Enter your last name'
            value={this.props.data.inputs.lastName}
            onChange={this.props.handleUserInput}
            error={this.props.data.errors.lastName}
          />
          <Input
            label='Date of birthday'
            type='date'
            name='birthday'
            placeholder='Enter your date of birthday'
            value={this.props.data.inputs.birthday}
            onChange={this.props.handleUserInput}
            error={this.props.data.errors.birthday}
          />
          <Input
            label='Phone'
            type='tel'
            name='phone'
            placeholder='7-7777-77-77'
            maxLength='13'
            value={this.props.data.inputs.phone}
            onChange={this.props.handleUserInput}
            error={this.props.data.errors.phone}
          />
          <Input
            label='Web-site'
            type='url'
            name='webSite'
            placeholder='Enter your web-site'
            value={this.props.data.inputs.webSite}
            onChange={this.props.handleUserInput}
            error={this.props.data.errors.webSite}
          />
          <Textarea
            label='About you'
            name='aboutYou'
            rows={7}
            placeholder='Write some about you'
            value={this.props.data.inputs.aboutYou}
            onChange={this.props.handleUserInput}
            error={this.props.data.errors.aboutYou}
            numchar={this.props.data.numChar.aboutYou}
          />
          <Textarea
            label='Technology stack'
            name='technologyStack'
            rows={7}
            placeholder='Write your technology stack'
            value={this.props.data.inputs.technologyStack}
            onChange={this.props.handleUserInput}
            error={this.props.data.errors.technologyStack}
            numchar={this.props.data.numChar.technologyStack}
          />
          <Textarea
            label='Descriptions of the latest projects'
            name='lastProject'
            rows={7}
            placeholder='Write some about your latest project'
            value={this.props.data.inputs.lastProject}
            onChange={this.props.handleUserInput}
            error={this.props.data.errors.lastProject}
            numchar={this.props.data.numChar.lastProject}
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