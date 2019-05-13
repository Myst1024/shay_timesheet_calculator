import React from 'react';
import './App.css';
import TimeInput from './components/TimeInput.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shay's Fancy Timesheet Calculator</h1>
        <span>⏲</span>
      </header>
      <div className="calculator">
        <TimeInput />
      </div>
    </div>
  );
}

export default App;
