import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form/Form";
import CompletedForm from "./components/CompletedForm/CompletedForm";
// import {initialFormState} from "./Instance";
import {checkingForFirstCapitalizeLetter} from "./features/checkingForFirstCapitalizeLetter";
import {checkingForNumberOfPhoneFormat} from './features/checkingForNumberOfPhoneFormat';
import {checkingWebsiteLink} from './features/chekingWebsiteLink';
import {checkingQuantityOfCharacters} from './features/checkingQuantityOfCharacters';


const inputsInitial = {
  name: '',
  lastName: '',
  birthday: '',
  phone: '',
  webSite: '',
  aboutYou: '',
  technologyStack: '',
  lastProject: '',
}

function App() {

  const [fields, setFields] = useState(inputsInitial);
  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);
  // const [state, setState] = useState(initialFormState);

  const handleUserInput = (event) => {
    const {name, value} = event.target;
    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateFields(name, value);
  }

  function validateFields(fieldName, value) {

    if (fieldName === 'name' || fieldName === 'lastName') {
      checkingForFirstCapitalizeLetter(value) ?
        setErrors((prevState) => ({
          ...prevState,
          [fieldName]: `Write your ${fieldName} with a capital letter`
        })) :
        setErrors((prevState) => ({
          ...prevState,
          [fieldName]: ``,
        }))
    }

    if (fieldName === 'birthday') {
      if (value.length > 0) {
        setErrors((prevState) => ({
          ...prevState,
          [fieldName]: ``,
        }))
      }
    }

    if (fieldName === 'phone') {

      const checkedNum = checkingForNumberOfPhoneFormat(value);
      setFields((prevState) => ({
        ...prevState,
        [fieldName]: checkedNum,
      }));

      setErrors((prevState) => ({
        ...prevState,
        [fieldName]: ``,
      }));

    }

    if (fieldName === 'webSite') {

      checkingWebsiteLink(value) ?
        setErrors((prevState) => ({
            ...prevState,
            [fieldName]: `The URL must start with https://`,
          }
        )) :
        setErrors((prevState) => ({
          ...prevState,
          [fieldName]: ``,
        }))
    }

    if (fieldName === 'aboutYou' || fieldName === 'technologyStack' || fieldName === 'lastProject') {

      setErrors((prevState) => ({
        ...prevState,
        [fieldName]: checkingQuantityOfCharacters(value),
      }))
    }
  }

  const handleUserSubmit = (event) => {
    event.preventDefault();
    const isErrorNotExist = Object.values(errors).every(error => error === '');
    if (validateForm() && isErrorNotExist) {
      setFormValid(true)
    } else if (!isErrorNotExist) {
      setFormValid( false)
    }
  };

  function validateForm() {
    const inputs = fields;
    let isValid = true;

    for (let fieldName in inputs) {
      if (!inputs[fieldName]) {
        isValid = false;
        setErrors((prevState) => ({
          ...prevState,
          [fieldName]: `The field is empty. Please fill in.`
        }))
      }
    }
    return isValid;
  }

  const resetForm = () => {
    setFields({...inputsInitial})
    setErrors({});
    setFormValid(false);
  }


  return (
    <div className="App">
      {formValid ? <h1>{fields.name} {fields.lastName}</h1> : <h1>Creating a form</h1>}
      {formValid ? <CompletedForm data={fields}/> :
        <Form
          fields={fields}
          errors={errors}
          formValid={formValid}
          handleUserInput={handleUserInput}
          validateFields={validateFields}
          handleUserSubmit={handleUserSubmit}
          validateForm={validateForm}
          resetForm={resetForm}
        />}
    </div>
  )
}

export default App;
