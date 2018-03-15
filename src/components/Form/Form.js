import React from 'react';
import Button from './Button/Button';
import InputBox from './InputBox/InputBox'

import classes from './Form.css';

const form =() => {    
        return(
            <div className={classes.innerDiv}>
            <div className={classes.Form}>
                <InputBox plcHolder='Study Name' />
                <InputBox plcHolder='Site Name 1' />
                <InputBox plcHolder='Site Name 2' />
                <InputBox plcHolder='Site Name 3' />
                <InputBox plcHolder='Site Name 4' />
                <InputBox plcHolder='Site Name 5' />
                <Button val='Submit'/>
                <Button val='OK'/>
            </div>    
            </div>
            
        )
}

export default form;

