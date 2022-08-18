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
          value={props.fields.name}
          error={props.errors.name}
          onChange={props.handleUserInput}
        />
        <Input
          label='Last name'
          type='text'
          name='lastName'
          placeholder='Enter your last name'
          value={props.fields.lastName}
          error={props.errors.lastName}
          onChange={props.handleUserInput}
        />
        <Input
          label='Date of birthday'
          type='date'
          name='birthday'
          placeholder='Enter your date of birthday'
          value={props.fields.birthday}
          error={props.errors.birthday}
          onChange={props.handleUserInput}
        />
        <Input
          label='Phone'
          type='tel'
          name='phone'
          placeholder='+7-7777-77-77'
          maxLength='15'
          value={props.fields.phone}
          error={props.errors.phone}
          onChange={props.handleUserInput}
        />
        <Input
          label='Web-site'
          type='url'
          name='webSite'
          placeholder='Enter your web-site'
          value={props.fields.webSite}
          error={props.errors.webSite}
          onChange={props.handleUserInput}
        />
        <Textarea
          label='About you'
          name='aboutYou'
          rows={7}
          placeholder='Write some about you'
          value={props.fields.aboutYou}
          error={props.errors.aboutYou}
          onChange={props.handleUserInput}
        />
        <Textarea
          label='Technology stack'
          name='technologyStack'
          rows={7}
          placeholder='Write your technology stack'
          value={props.fields.technologyStack}
          error={props.errors.technologyStack}
          onChange={props.handleUserInput}
        />
        <Textarea
          label='Descriptions of the latest projects'
          name='lastProject'
          rows={7}
          placeholder='Write some about your latest project'
          value={props.fields.lastProject}
          error={props.errors.lastProject}
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