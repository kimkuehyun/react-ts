import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const onSubmit = (form: {
    name: string;
    desc: string;
  }) => {
    console.log(form);
  };

  return (
    <div className="App">
      <Form onSubmit={onSubmit} />
    </div>
  );
}

export default App;
