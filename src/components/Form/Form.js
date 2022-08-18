import React from 'react';
import style from './Form.module.css'
import Input from "../Fields/Input/Input";
import Textarea from "../Fields/Textarea/Textarea";
import Button from "../Button/Button";


const Form = (props) => {

  return (
    <div className={style.wrapper}>
      <form onSubmit={props.handleUserSubmit}>
        <Input
          label='Name'
          type='text'
          name='name'
          placeholder='Enter your name'
          value={props.data.inputs.name}
          error={props.data.errors.name}
          onChange={props.handleUserInput}
        />
        <Input
          label='Last name'
          type='text'
          name='lastName'
          placeholder='Enter your last name'
          value={props.data.inputs.lastName}
          error={props.data.errors.lastName}
          onChange={props.handleUserInput}
        />
        <Input
          label='Date of birthday'
          type='date'
          name='birthday'
          placeholder='Enter your date of birthday'
          value={props.data.inputs.birthday}
          error={props.data.errors.birthday}
          onChange={props.handleUserInput}
        />
        <Input
          label='Phone'
          type='tel'
          name='phone'
          placeholder='+7-7777-77-77'
          maxLength='15'
          value={props.data.inputs.phone}
          error={props.data.errors.phone}
          onChange={props.handleUserInput}
        />
        <Input
          label='Web-site'
          type='url'
          name='webSite'
          placeholder='Enter your web-site'
          value={props.data.inputs.webSite}
          error={props.data.errors.webSite}
          onChange={props.handleUserInput}
        />
        <Textarea
          label='About you'
          name='aboutYou'
          rows={7}
          placeholder='Write some about you'
          value={props.data.inputs.aboutYou}
          error={props.data.errors.aboutYou}
          onChange={props.handleUserInput}
        />
        <Textarea
          label='Technology stack'
          name='technologyStack'
          rows={7}
          placeholder='Write your technology stack'
          value={props.data.inputs.technologyStack}
          error={props.data.errors.technologyStack}
          onChange={props.handleUserInput}
        />
        <Textarea
          label='Descriptions of the latest projects'
          name='lastProject'
          rows={7}
          placeholder='Write some about your latest project'
          value={props.data.inputs.lastProject}
          error={props.data.errors.lastProject}
          onChange={props.handleUserInput}
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
            reset={props.resetForm}
          />
        </div>
      </form>
    </div>
  )
}

export default Form;