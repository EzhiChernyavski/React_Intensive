import React from 'react';
import './App.css';
import Form from "./components/Form/Form";
import CompletedForm from "./components/CompletedForm/CompletedForm";

class App extends React.Component {
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
      this.validateFields(name, value)
    });
  }

  validateFields(fieldName, value) {

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
    const inputsInvalid = this.state.inputsInvalid;
    for (let input in inputsInvalid ) {
      if (this.validateForm() && !inputsInvalid[input]) {
        this.setState((prevState) => ({
          ...prevState,
          formValid: true,
        }))
      } else {
        this.setState((prevState) => ({
          ...prevState,
          formValid: false,
        }))
      }
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
    return (
      <div className="App">
        {this.state.formValid ?
          <h1>{this.state.inputs.name} {this.state.inputs.lastName}</h1> :
          <h1>Creating a form</h1>
        }
        {
          this.state.formValid ? <CompletedForm data={this.state.inputs}/> :
            <Form
              data={this.state}
              handleUserInput={this.handleUserInput}
              validateFields={this.validateFields}
              handleUserSubmit={this.handleUserSubmit}
              validateForm={this.validateForm}
              resetForm={this.resetForm}
            />
        }
      </div>
    )
  }
}

export default App;
