import classes from './Footer.module.css';
import { BsGithub } from 'react-icons/bs';
import React from 'react';

const Footer = () => {
    return <footer className={classes.footer}>
        <h2>
            <BsGithub />
            <a className={classes.gitLink}
                href="https://github.com/wolf-ed/reactmoviesearcher"
                target="_blank"
                rel="noopener noreferrer"
            >GitHub</a>
        </h2>
    </footer>
}

export default Footer;
