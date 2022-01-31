import classes from './Header.module.css'
import Form from '../Form/Form';
import React from 'react';

const Header = (props) => {

    return <header className={classes.header}>
        <Form onSubmit={props.onInput}/>
    </header>
}

export default Header;