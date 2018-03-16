import React from 'react';
import classes from './Button.css';

const buttonadd = (props) => {
    return (
        <button className={classes.Buttonadd} onClick={props.click} disabled={props.disabled}>Add</button>
    )
}

export default buttonadd;