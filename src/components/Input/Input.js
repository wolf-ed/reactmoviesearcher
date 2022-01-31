import classes from './Input.module.css';
import { ImSearch } from 'react-icons/im'
import { useState } from 'react';


const Input = (props) => {
const [expand, setExpand] = useState(false)
    
    let classesClicked = `${classes.search} ${expand && classes.active}`

    const expandHandler = () => {
        setExpand(prevState => !prevState)
    }

    return <div className={classesClicked}>
        <input 
        type='text'
        className={classes.input}
        placeholder={props.placeholder}></input>

        <button className={classes.btn} onClick={expandHandler}><ImSearch /></button>
    </div>
}

export default Input;