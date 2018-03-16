import React from 'react';
import classes from './Button.css';

const delButton = (props) => {
    return (
        <button className={classes.DelButton} onClick={props.click} >Delete</button>
    )
}

export default delButton;