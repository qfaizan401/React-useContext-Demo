import React from 'react';
import './App.css';
import Parent from './Parent'
import ValueContext from './ValueContext'

function App() {
  let anyValue = 48
  return (
    <ValueContext.Provider value={anyValue}>
      <div>
        Hello from App
        <Parent />
      </div>
    </ValueContext.Provider>
  );
}

export default App;
