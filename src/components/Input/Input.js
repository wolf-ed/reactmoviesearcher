import classes from './Input.module.css';
import { ImSearch } from 'react-icons/im'
import { useState } from 'react';
import React from 'react';


const Input = (props) => {
const [expand, setExpand] = useState(false)
    
    let classesClicked = `${classes.search} ${expand && classes.active}`

    const expandHandler = () => {
        setExpand(prevState => !prevState)
    }

    const onChangeHandler = event => {
        props.onType(event.target.value)
    }

    return <div className={classesClicked}>
        <input 
        type='text'
        className={classes.input}
        placeholder={props.placeholder}
        value={props.value}
        onChange={onChangeHandler}></input>
        <button className={classes.btn} onClick={expandHandler}><ImSearch /></button>
    </div>
}

export default Input;