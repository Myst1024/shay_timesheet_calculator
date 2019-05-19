import React from 'react';
import Punch from './Punch.js';



function Day(props) {
    
    return(
        <div className="dayContainer">
            <h3>{props.name}:</h3>
            
            <div className="punchContainer">
                {props.punches.map((punch, i) =>
                    <Punch key={i} day={props.name} time={punch} dayIndex={props.dayIndex} punchIndex={i} updatePunch={props.updatePunch}/>
                )}
            </div>
            <div className="totals">
                <span>R: {props.regularHours}H {props.regularMinutes}M</span>
                <br />
                <span>OT: {props.overtimeHours}H {props.overtimeMinutes}M</span>
                <br />
                <span>Total: {props.hours}H {props.minutes}M</span>
            </div>
        </div>
    )
}

export default Day