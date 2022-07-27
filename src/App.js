import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchUserList } from './sampleApi';


export const add = (a, b) => {
  return Number(a) + Number(b)
}
export const multiply = (a, b) => {
  return Number(a) * Number(b)
}

function App() {

  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    fetchUserList()
  }, [])
  return (
    <div className="App">
      Testing react app
      <button id='add-btn' onClick={() => setCurrentValue(currentValue + 1)}>
        Add
      </button>
      <button id='remove-btn' onClick={() => currentValue ? setCurrentValue(currentValue - 1) : null}>
        Subtract
      </button>
      <div>
        <span>{currentValue}</span>
      </div>
    </div>
  );

}

export default App;
