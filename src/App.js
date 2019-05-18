import React from 'react';
import Day from './components/Day.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      days: [
        {
          name: 'Sunday',
          punches: [
            {
              key: 1558210311111,
              in: 1558210304027,
              out: 1558210307027
            },
            {
              key: 1558210322222,
              in: 1558210309000,
              out: 1558210312000
            },
          ]
        },
        {
          name: 'Monday',
          punches: [
            {
              key: 1558210311121,
              in: 1558210304027,
              out: 1558210307027
            },
            {
              key: 1558210322232,
              in: 1558210309000,
              out: 1558210312000
            },
          ]
        },
        {
          name: 'Tuesday',
          punches: []
        },
        {
          name: 'Wednesday',
          punches: []
        },
        {
          name: 'Thursday',
          punches: []
        },
        {
          name: 'Friday',
          punches: []
        },
        {
          name: 'Saturday',
          punches: []
        },
        
      ]
    }
  }

  updatePunch = (day, key, type, time) => () => {
    debugger;
    let dayToUpdate = this.state.days.find(element => {
      return element.name === day
    })
    console.log(dayToUpdate);
    let newState = {...this.state.newState}
    
    this.setState({newState})
  }
  
  render() {
    const days = this.state.days.map((day) =>
      <Day key={day.name} name={day.name} punches={day.punches} updatePunch={this.updatePunch.bind(this)}/>
    )

    return (
      <div className="App">
        <header className="App-header">
          <h1>Shay's Fancy Timesheet Calculator</h1>
          <span>⏲</span>
        </header>
        <button onClick={this.updatePunch('Monday')}>Click</button>
        <div className="calculator">
          {days}
        </div>
      </div>
    )
  };
}

export default App;
