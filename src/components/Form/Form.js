import React, {Component} from 'react';
import style from './Form.module.css'
import Input from "../Fields/Input/Input";
import Textarea from "../Fields/Textarea/Textarea";
import Button from "../Button/Button";
import CompletedForm from "../CompletedForm/CompletedForm";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        name: '',
        lastName: '',
        birthday: '',
        phone: '',
        webSite: '',
        aboutYou: '',
        technologyStack: '',
        lastProject: '',
      },
      inputsInvalid: {
        name: false,
        lastName: false,
        birthday: false,
        phone: false,
        webSite: false,
        aboutYou: false,
        technologyStack: false,
        lastProject: false,
      },
      errors: {},
      numChar: {
        aboutYou: 0,
        technologyStack: 0,
        lastProject: 0,
      },
      formValid: false,
    };
    this.initialState = this.state;
  }

  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        [name]: value
      }
    }), () => {
      this.validateField(name, value)
    });
  }

  validateField(fieldName, value) {

    if (fieldName === 'name' || fieldName === 'lastName') {
      if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            [fieldName]: `Write your ${fieldName} with a capital letter`
          },
          inputsInvalid: {
            ...prevState.inputsInvalid,
            [fieldName]: true,
          },
        }))
      } else {
        this.setState((prevState) => ({
          inputsInvalid: {
            ...prevState.inputsInvalid,
            [fieldName]: false,
          },
        }))
      }
    }

    if (fieldName === 'phone') {
      const phoneNumber = value.replace(/[^\d]/g, '');
      const phoneNumberLength = phoneNumber.length;
      let phoneFormatted = '';

      if (phoneNumberLength < 2) {
        phoneFormatted = phoneNumber;
      } else if (phoneNumberLength < 6) {
        phoneFormatted = `${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1)}`
      } else if (phoneNumberLength < 9) {
        phoneFormatted = `${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1, 5)}-${phoneNumber.slice(5)}`
      } else if (phoneNumberLength < 11) {
        phoneFormatted = `${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1, 5)}-${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8)}`
      }

      this.setState((prevState) => ({
        inputs: {
          ...prevState.inputs,
          [fieldName]: phoneFormatted,
        },
        inputsInvalid: {
          ...prevState.inputsInvalid,
          [fieldName]: false,
        },
      }))
    }

    if (fieldName === 'birthday') {
      if (value.length > 0) {
        this.setState((prevState) => ({
          inputsInvalid: {
            ...prevState.inputsInvalid,
            [fieldName]: false,
          },
        }))
      }
    }

    if (fieldName === 'webSite') {
      const patternUrl = 'https://';
      let arr = [...value];
      let head = arr.slice(0, 8).join('');

      if (head !== patternUrl) {
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            [fieldName]: `The URL must start with https://`
          },
          inputsInvalid: {
            ...prevState.inputsInvalid,
            [fieldName]: true,
          },
        }))
      } else if (value.length > 7 && head === patternUrl) {
        this.setState((prevState) => ({
          inputs: {
            ...prevState.inputs,
            [fieldName]: value,
          },
          inputsInvalid: {
            ...prevState.inputsInvalid,
            [fieldName]: false,
          },
        }))
      }
    }

    if (fieldName === 'aboutYou' || fieldName === 'technologyStack' || fieldName === 'lastProject') {
      const maxLetters = 600;
      let quantityLetters = value.length;
      let remains = maxLetters - quantityLetters;
      const cutValue = value.substring(0, maxLetters);

      if (remains <= 0) {
        this.setState((prevState) => ({
          inputs: {
            ...prevState.inputs,
            [fieldName]: cutValue,
          },
          errors: {
            ...prevState.errors,
            [fieldName]: `Exceeded the limit of characters in the field`
          },
          inputsInvalid: {
            ...prevState.inputsInvalid,
            [fieldName]: true,
          },
        }))
      } else {
        this.setState((prevState) => ({
          numChar: {
            ...prevState.numChar,
            [fieldName]: remains,
          },
          inputsInvalid: {
            ...prevState.inputsInvalid,
            [fieldName]: false,
          },
        }))
      }
    }

  };

  handleUserSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {

      this.setState((prevState) => ({
        ...prevState,
        formValid: true,
      }))
    }

  }

  validateForm() {
    const input = this.state.inputs;
    let isValid = true;
    for (let fieldName in input) {
      if (!input[fieldName]) {
        isValid = false;
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            [fieldName]: `The field is empty. Please fill in.`
          },
          inputsInvalid: {
            ...prevState.inputsInvalid,
            [fieldName]: true,
          },
        }))
      }
    }
    return isValid;
  }

  resetForm = () => {
    const initialState = this.initialState
    const obj = this.state;

    for (let field in obj) {
      this.setState((prevState) => ({
        ...prevState,
        [field]: initialState[field]
      }))
    }
  }

  render() {
    if (!this.state.formValid) {
      return (
        <div className={style.wrapper}>
          <form onSubmit={this.handleUserSubmit}>
            <Input
              label='Name'
              type='text'
              name='name'
              placeholder='Enter your name'
              value={this.state.inputs.name}
              onChange={this.handleUserInput}
              inputinvalid={this.state.inputsInvalid.name ? 1 : undefined}
              error={this.state.errors.name}
            />
            <Input
              label='Last name'
              type='text'
              name='lastName'
              placeholder='Enter your last name'
              value={this.state.inputs.lastName}
              onChange={this.handleUserInput}
              inputinvalid={this.state.inputsInvalid.lastName ? 1 : undefined}
              error={this.state.errors.lastName}
            />
            <Input
              label='Date of birthday'
              type='date'
              name='birthday'
              placeholder='Enter your date of birthday'
              value={this.state.inputs.birthday}
              onChange={this.handleUserInput}
              inputinvalid={this.state.inputsInvalid.birthday ? 1 : undefined}
              error={this.state.errors.birthday}
            />
            <Input
              label='Phone'
              type='tel'
              name='phone'
              placeholder='7-7777-77-77'
              maxLength='13'
              value={this.state.inputs.phone}
              onChange={this.handleUserInput}
              inputinvalid={this.state.inputsInvalid.phone ? 1 : undefined}
              error={this.state.errors.phone}
            />
            <Input
              label='Web-site'
              type='url'
              name='webSite'
              placeholder='Enter your web-site'
              value={this.state.inputs.webSite}
              onChange={this.handleUserInput}
              inputinvalid={this.state.inputsInvalid.webSite ? 1 : undefined}
              error={this.state.errors.webSite}
            />
            <Textarea
              label='About you'
              name='aboutYou'
              rows={7}
              placeholder='Write some about you'
              value={this.state.inputs.aboutYou}
              onChange={this.handleUserInput}
              inputinvalid={this.state.inputsInvalid.aboutYou ? 1 : undefined}
              error={this.state.errors.aboutYou}
              numchar={this.state.numChar.aboutYou}
            />
            <Textarea
              label='Technology stack'
              name='technologyStack'
              rows={7}
              placeholder='Write your technology stack'
              value={this.state.inputs.technologyStack}
              onChange={this.handleUserInput}
              inputinvalid={this.state.inputsInvalid.technologyStack ? 1 : undefined}
              error={this.state.errors.technologyStack}
              numchar={this.state.numChar.technologyStack}
            />
            <Textarea
              label='Descriptions of the latest projects'
              name='lastProject'
              rows={7}
              placeholder='Write some about your latest project'
              value={this.state.inputs.lastProject}
              onChange={this.handleUserInput}
              inputinvalid={this.state.inputsInvalid.lastProject ? 1 : undefined}
              error={this.state.errors.lastProject}
              numchar={this.state.numChar.lastProject}
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
                reset={this.resetForm}
              />
            </div>
          </form>
        </div>
      );
    } else {
      return <CompletedForm data={this.state}/>
    }

  }
}

export default Form;