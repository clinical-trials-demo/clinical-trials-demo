import React from 'react';
import './Button.css';

const button = (props) => {
    return (
        <input type="submit" value={props.val} onClick={props.click} />
    )
}


export default button ;

