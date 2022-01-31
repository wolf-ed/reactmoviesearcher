import classes from './Form.module.css';
import { useState } from 'react';
import Input from '../Input/Input';

const Form = (props) => {
    const [inputValue, setInputValue] = useState('');
    
    const onSubmitHandler = (event) => {
        event.preventDefault()

    }

    const onChangeHandler = (event) => {
        setInputValue(event.target.value)
    }

    return <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input 
        onChange={onChangeHandler}
        placeholder={'Search movie...'}></Input>
        <p>{inputValue}</p>
    </form>
};

export default Form;