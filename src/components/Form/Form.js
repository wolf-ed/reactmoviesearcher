
import { useState } from 'react';
import Input from '../Input/Input';
import React from 'react';

const Form = (props) => {
    const [inputValue, setInputValue] = useState('');
    
    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.onSubmit(inputValue)
        console.log('form')
    }

    const onChangeHandler = (array) => {
        setInputValue(array)
    }

    return <form onSubmit={onSubmitHandler}>
        <Input 
        onSend={onChangeHandler}
        placeholder={'Search movie...'}
        ></Input>
    </form>
};

export default Form;