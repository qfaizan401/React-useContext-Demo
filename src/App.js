import React from 'react';
import './App.css';
import Parent from './Parent'

function App() {
  let [Number, setNumber] = React.useState(45)
  return (
    <div>
      Hello from App
      <Parent num={Number}/>
      <button onClick={() => {setNumber(Number+=1)}}>Increase Number</button>
    </div>
  );
}

export default App;
