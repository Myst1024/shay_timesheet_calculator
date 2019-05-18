import React from 'react';
import TextField from '@material-ui/core/TextField';

function Punch(props) {
    console.log(props);
    props.updatePunch()
    return (
        <div>
            
            IN: <TextField 
                type="time" 
                inputProps={{punch:"in"}} 
                onChange={(e) => props.updatePunch(props.day, props.punchKey, 'in', e.target.value)}
            />
            OUT: <TextField 
                type="time" 
                inputProps={{punch:"out"}} 
                onChange={(e) => props.updatePunch(props.day, props.punchKey, 'out', e.target.value)}
            />
            TOTAL: 
        </div>
    );
}

export default Punch