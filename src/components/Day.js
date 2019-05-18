import React from 'react';
import Punch from './Punch.js';



function Day(props) {
    console.log(props);
    return(
        <div className="dayContainer">
            {props.name}
            <button onClick={(e) => props.updatePunch}>click</button>
            {props.punches.map((punch) =>
                <Punch key={punch.key} punchKey={punch.key} day={props.name} updatePunch={props.updatePunch}/>
            )}
            
        </div>
    )
}

export default Day