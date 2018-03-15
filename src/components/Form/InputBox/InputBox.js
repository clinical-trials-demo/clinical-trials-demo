import React from 'react';
import './InputBox.css';

const inputBox = (props) => {
    return (
        <div>
        <input type="text" placeholder={props.plcHolder} />
        </div>
    )
}

export default inputBox;
