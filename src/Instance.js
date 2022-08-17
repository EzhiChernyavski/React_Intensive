export const initialFormState = {
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
