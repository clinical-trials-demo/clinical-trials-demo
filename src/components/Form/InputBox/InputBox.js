import React from 'react';
import './InputBox.css';

const inputBox = (props) => {
    return (
        
        <input type="text" placeholder={props.plcHolder} onChange={props.change}/>
        
    )
}

export default inputBox;
