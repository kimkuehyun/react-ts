import React from 'react';
import './App.css';
import Greetings from './components/Greetings';

function App() {
  const onClick = (name: string) => {
    alert(`${name}`);
  }

  return (
    <div className="App">
      <Greetings name='손소독' onClick={onClick} />
    </div>
  );
}

export default App;
