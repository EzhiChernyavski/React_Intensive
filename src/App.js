import React from 'react';
import {initialFormState} from "./Instance";
import './App.css';
import Form from "./components/Form/Form";
import CompletedForm from "./components/CompletedForm/CompletedForm";
import {checkingForFirstCapitalizeLetter} from "./features/checkingForFirstCapitalizeLetter";
import {checkingForNumberOfPhoneFormat} from './features/checkingForNumberOfPhoneFormat';
import {checkingWebsiteLink} from './features/chekingWebsiteLink';
import {checkingQuantityOfCharacters} from './features/checkingQuantityOfCharacters'

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
        ...prevState.inputs, [name]: value
      }
    }), () => {
      this.validateFields(name, value)
    });
  }

  validateFields(fieldName, value) {

    if (fieldName === 'name' || fieldName === 'lastName') {
      checkingForFirstCapitalizeLetter(value) ?
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors, [fieldName]: `Write your ${fieldName} with a capital letter`
          }
        })) :
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors, [fieldName]: ``,
          },
        }))
    }

    if (fieldName === 'birthday') {
      if (value.length > 0) {
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors, [fieldName]: ``,
          },
        }))
      }
    }

    if (fieldName === 'phone') {

      const checkedNum = checkingForNumberOfPhoneFormat(value);
      this.setState((prevState) => ({
        inputs: {
          ...prevState.inputs, [fieldName]: checkedNum,
        }, errors: {
          ...prevState.errors, [fieldName]: ``,
        },
      }))

    }

    if (fieldName === 'webSite') {

      checkingWebsiteLink(value) ?
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors, [fieldName]: `The URL must start with https://`
          }
        })) :
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors, [fieldName]: ``
          },
        }))
    }

    if (fieldName === 'aboutYou' || fieldName === 'technologyStack' || fieldName === 'lastProject') {

      this.setState((prevState) => ({
        errors: {
          ...prevState.errors, [fieldName]: checkingQuantityOfCharacters(value)
        }
      }))
    }
  };

  handleUserSubmit = (event) => {
    event.preventDefault();
    const arr = Object.values(this.state.errors).every(error => error === '');

    if (this.validateForm() && arr) {
      this.setState((prevState) => ({
        ...prevState, formValid: true,
      }))
    } else if (!arr) {
      this.setState((prevState) => ({
        ...prevState, formValid: false,
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
            ...prevState.errors, [fieldName]: `The field is empty. Please fill in.`
          }
        }))
      }
    }
    return isValid;
  }

  resetForm = () => {
    this.setState({...initialFormState});
  }


  render() {
    return (<div className="App">
      {this.state.formValid ? <h1>{this.state.inputs.name} {this.state.inputs.lastName}</h1> :
        <h1>Creating a form</h1>}
      {this.state.formValid ? <CompletedForm data={this.state.inputs}/> : <Form
        data={this.state}
        handleUserInput={this.handleUserInput}
        validateFields={this.validateFields}
        handleUserSubmit={this.handleUserSubmit}
        validateForm={this.validateForm}
        resetForm={this.resetForm}
      />}
    </div>)
  }
}

export default App;
