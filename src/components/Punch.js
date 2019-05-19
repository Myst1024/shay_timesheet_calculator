import React from 'react';
import TextField from '@material-ui/core/TextField';

class Punch extends React.Component {
    
    render() {
        return (
            <div>
                <TextField 
                    type="time"
                    value = {this.props.time}
                    onChange={(e) => {this.props.updatePunch(this.props.dayIndex, this.props.punchIndex, e.target.value)}}
                />
            </div>
        );
    }
}

export default Punch