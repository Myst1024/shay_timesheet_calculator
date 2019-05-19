import React from 'react';
import Punch from './Punch.js';



function Day(props) {
    
    return(
        <div className="dayContainer">
            <h3>{props.name}:</h3>
            <h3>{props.hours}H {props.minutes}M</h3>
            <div className="punchContainer">
                {props.punches.map((punch, i) =>
                    <Punch key={i} day={props.name} time={punch} dayIndex={props.dayIndex} punchIndex={i} updatePunch={props.updatePunch}/>
                )}
            </div>
        </div>
    )
}

export default Day