import classes from './Input.module.css';
import { ImSearch } from 'react-icons/im'
import { useState } from 'react';
import React from 'react';


const Input = (props) => {
const [expand, setExpand] = useState(false)
const [enteredValue, setEnteredValue] = useState('');
    
    let classesClicked = `${classes.search} ${expand && classes.active}`

    const expandHandler = () => {
        setExpand(prevState => !prevState)
    }

    const onChangeHandler = event => {
        props.onSend(event.target.value)
        setEnteredValue(event.target.value)
    }

    return <div className={classesClicked}>
        <input 
        type='text'
        className={classes.input}
        placeholder={props.placeholder}
        value={enteredValue}
        onChange={onChangeHandler}></input>
        <button className={classes.btn} onClick={expandHandler}><ImSearch /></button>
    </div>
}

export default Input;