
import { useState } from 'react';
import Input from '../Input/Input';
import React from 'react';

const Form = (props) => {
    const [inputValue, setInputValue] = useState('');
    
    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.onSubmit(inputValue)
        setInputValue('')
    }

    const onChangeHandler = (array) => {
        setInputValue(array)
    }

    return <form onSubmit={onSubmitHandler}>
        <Input 
        placeholder={'Search movie...'}
        value={inputValue}
        onType={onChangeHandler}
        ></Input>
    </form>
};

export default Form;