import React from 'react';
import './App.css';
import Form from "./components/Form/Form";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Creating a form</h1>
        <Form />
      </div>
    )
  }
}

export default App;
