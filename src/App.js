import React, {useEffect, useState} from 'react';
import './App.css';
import Form from "./components/Form/Form";
import CompletedForm from "./components/CompletedForm/CompletedForm";
import Notification from "./components/Notification/Notification";
import {initialFormState} from "./Instance";
import {checkingForFirstCapitalizeLetter} from "./features/checkingForFirstCapitalizeLetter";
import {checkingForNumberOfPhoneFormat} from './features/checkingForNumberOfPhoneFormat';
import {checkingWebsiteLink} from './features/chekingWebsiteLink';
import {checkingQuantityOfCharacters} from './features/checkingQuantityOfCharacters'


function App() {
  const [state, setState] = useState(initialFormState);
  const [isShowPopUp, setIsShowPopUp] = useState(false)

  const handleUserInput = (event) => {
    const {name, value} = event.target;
    setState((prevState) => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        [name]: value
      }
    }));
    validateFields(name, value)
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  function validateFields(fieldName, value) {

    if (fieldName === 'name' || fieldName === 'lastName') {
      checkingForFirstCapitalizeLetter(value) ?
        setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            [fieldName]: `Write your ${fieldName} with a capital letter`
          }
        })) :
        setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            [fieldName]: ``,
          },
        }))
    }

    if (fieldName === 'birthday') {
      if (value.length > 0) {
        setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            [fieldName]: ``,
          },
        }))
      }
    }

    if (fieldName === 'phone') {

      const checkedNum = checkingForNumberOfPhoneFormat(value);
      setState((prevState) => ({
        ...prevState,
        inputs: {
          ...prevState.inputs,
          [fieldName]: checkedNum,
        }, errors: {
          ...prevState.errors,
          [fieldName]: ``,
        },
      }))

    }

    if (fieldName === 'webSite') {

      checkingWebsiteLink(value) ?
        setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            [fieldName]: `The URL must start with https://`
          }
        })) :
        setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            [fieldName]: ``
          },
        }))
    }

    if (fieldName === 'aboutYou' || fieldName === 'technologyStack' || fieldName === 'lastProject') {

      setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          [fieldName]: checkingQuantityOfCharacters(value)
        }
      }))
    }
  }

  const handleUserSubmit = (event) => {
    event.preventDefault();
    const isErrorNotExist = Object.values(state.errors).every(error => error === '');

    if (validateForm() && isErrorNotExist) {
      setState((prevState) => ({
        ...prevState,
        formValid: true,
      }))
      setIsShowPopUp(true);
    } else if (!isErrorNotExist) {
      setState((prevState) => ({
        ...prevState,
        formValid: false,
      }))
    }
  };

  function validateForm() {
    const inputs = state.inputs;
    let isValid = true;

    for (let fieldName in inputs) {
      if (!inputs[fieldName]) {
        isValid = false;
        setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            [fieldName]: `The field is empty. Please fill in.`
          }
        }))
      }
    }
    return isValid;
  }

  const resetForm = () => {
    setState({...initialFormState});
  }

  return (
    <div className="App">
      {state.formValid ? <h1>{state.inputs.name} {state.inputs.lastName}</h1> :
        <h1>Creating a form</h1>}
      {state.formValid ? <CompletedForm data={state.inputs}/> :
        <Form
          data={state}
          handleUserInput={handleUserInput}
          validateFields={validateFields}
          handleUserSubmit={handleUserSubmit}
          validateForm={validateForm}
          resetForm={resetForm}
        />}
      <Notification isShowPopUp={isShowPopUp} setIsShowPopUp={setIsShowPopUp}/>
    </div>
  )
}

export default App;
