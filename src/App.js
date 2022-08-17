import React from 'react';
import {initialFormState} from "./Instance";
import './App.css';
import Form from "./components/Form/Form";
import CompletedForm from "./components/CompletedForm/CompletedForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = initialFormState
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
          }
        }))
      } else {
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            [fieldName]: ``,
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
        errors: {
          ...prevState.errors,
          [fieldName]: ``,
        },
      }))
    }

    if (fieldName === 'birthday') {
      if (value.length > 0) {
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            [fieldName]: ``,
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
          }
        }))
      } else if (value.length > 7 && head === patternUrl) {
        this.setState((prevState) => ({
          inputs: {
            ...prevState.inputs,
            [fieldName]: value,
          },
          errors: {
            ...prevState.errors,
            [fieldName]: ``
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
          }
        }))
      } else {
        this.setState((prevState) => ({
          numChar: {
            ...prevState.numChar,
            [fieldName]: remains,
          },
          errors: {
            ...prevState.errors,
            [fieldName]: ``,
          },
        }))
      }
    }

  };

  handleUserSubmit = (event) => {
    event.preventDefault();
    const errors = this.state.errors;
    const arr = Object.values(errors).every(error => error === '');

    if (this.validateForm() && arr) {
      this.setState((prevState) => ({
        ...prevState,
        formValid: true,
      }))
    } else if (!arr) {
      this.setState((prevState) => ({
        ...prevState,
        formValid: false,
      }))
    }
  }

  validateForm() {
    const inputs = this.state.inputs;
    let isValid = true;

    for (let fieldName in inputs) {
      if (!inputs[fieldName]) {
        isValid = false;
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            [fieldName]: `The field is empty. Please fill in.`
          }
        }))
      } else {
        isValid = true;
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            [fieldName]: ``
          }
        }))
      }
    }
    return isValid;
  }

  resetForm = () => {
    // this.setState(() => ({
    //   ...initialFormState
    // }));
    this.setState({...initialFormState});
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
