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
          punches: ['00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00'],
          hours: 0,
          minutes: 0,
          regularHours: 0,
          regularMinutes: 0,
          overtimeHours: 0,
          overtimeMinutes: 0,
        },
        {
          name: 'Monday',
          punches: ['00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00'],
          hours: 0,
          minutes: 0,
          regularHours: 0,
          regularMinutes: 0,
          overtimeHours: 0,
          overtimeMinutes: 0,
        },
        {
          name: 'Tuesday',
          punches: ['00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00'],
          hours: 0,
          minutes: 0,
          regularHours: 0,
          regularMinutes: 0,
          overtimeHours: 0,
          overtimeMinutes: 0,
        },
        {
          name: 'Wednesday',
          punches: ['00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00'],
          hours: 0,
          minutes: 0,
          regularHours: 0,
          regularMinutes: 0,
          overtimeHours: 0,
          overtimeMinutes: 0,
        },
        {
          name: 'Thursday',
          punches: ['00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00'],
          hours: 0,
          minutes: 0,
          regularHours: 0,
          regularMinutes: 0,
          overtimeHours: 0,
          overtimeMinutes: 0,
        },
        {
          name: 'Friday',
          punches: ['00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00'],
          hours: 0,
          minutes: 0,
          regularHours: 0,
          regularMinutes: 0,
          overtimeHours: 0,
          overtimeMinutes: 0,
        },
        {
          name: 'Saturday',
          punches: ['00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00'],
          hours: 0,
          minutes: 0,
          regularHours: 0,
          regularMinutes: 0,
          overtimeHours: 0,
          overtimeMinutes: 0,
        },
        
      ]
    }
  }

  setTotals = (dayIndex, hours, minutes) => {
    let days = this.state.days
    days[dayIndex].hours = hours
    days[dayIndex].minutes = minutes

    let totalMinutes = 0
    const overtimeLimit = 40 * 60
    days.forEach(function(day, i) {
      let normalMinutes = 0
      let overtimeMinutes = 0
      let dayMinutes = ((day.hours * 60) + day.minutes)
      totalMinutes += dayMinutes
      if (totalMinutes > overtimeLimit) {
        if (totalMinutes - dayMinutes > overtimeLimit){
          overtimeMinutes = dayMinutes;
        } else {
          overtimeMinutes = (totalMinutes - overtimeLimit);
          normalMinutes = dayMinutes - overtimeMinutes;
        }
      } else {
        normalMinutes = dayMinutes
      }
      days[i].regularHours = Math.floor(normalMinutes/60);
      days[i].regularMinutes = (normalMinutes % 60);
      days[i].overtimeHours = Math.floor(overtimeMinutes/60);
      days[i].overtimeMinutes = (overtimeMinutes % 60);

    })

    this.setState({days: days})
  }

  totalDay = (punches, dayIndex) => {
    function convertToMills(time) {
        return Date.parse('01 Jan 2000 ' + time + ' GMT')
    }
    let totalTime = 0;
    let i = 0;
    while (i < punches.length) {
        if (i % 2 === 0) {
            let punchIn = punches[i];
            let punchInMils = convertToMills(punchIn);
            let punchOut = punches[i+1];
            let punchOutMils = convertToMills(punchOut);
            totalTime += ((punchOutMils - punchInMils) / 60000)
        }
        i+= 2;
    }
    var totalHours = Math.floor(totalTime / 60);
    var totalMinutes = totalTime % 60;
    this.setTotals(dayIndex, totalHours, totalMinutes)
    //return <span>Hours: {totalHours} Minutes: {totalMinutes}</span>

}


  updatePunch = (dayIndex, index = 0, time = '00:00') => {
    
    let days = this.state.days;
    if (typeof(days[dayIndex] !== 'undefined')) {
      days[dayIndex].punches[index] = time
      
      this.totalDay(days[dayIndex].punches, dayIndex)

      /* TODO: reimplement dynamic field generation
       if (punchCount <= currentPunch) {
      const punchCount = days[dayIndex].punches.length
      const currentPunch = index + 1;
        days[dayIndex].punches.push('23:58');
      } */

      this.setState({
        days: days
      })
      

    }
  }
  
  render() {
    const days = this.state.days.map((day, index) => 
      <div className="day" key={day.name} >
        <Day 
          name={day.name} 
          dayIndex={index} 
          punches={day.punches} 
          updatePunch={this.updatePunch.bind(this)}
          setTotals={this.setTotals.bind(this)}
          hours={day.hours}
          minutes={day.minutes}
          regularHours={day.regularHours}
          regularMinutes={day.regularMinutes}
          overtimeHours={day.overtimeHours}
          overtimeMinutes={day.overtimeMinutes}
        />
      </div>
    )

    return (
      <div className="App">
        <header className="App-header">
          <img className="cat" alt="Cat." src="https://cataas.com/cat" />
          <div className="headerText">
            <h1>Shay's Fancy Timesheet Calculator</h1>
            <span>⏲</span>
          </div>
          <img className="cat" alt="Cat." src="https://cataas.com/cat?type=or" />
        </header>
        <div className="calculator">
          {days}
          
        </div>
      </div>
    )
  };
}

export default App;
