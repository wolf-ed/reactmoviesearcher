import classes from './Movie.module.css';
import React from 'react';

const Movie = (props) => {

    return <div className={classes.movie}>
        <img src={props.img} alt='movie-poster' />
        <div className={classes['movie-info']}>
            <h3>{props.title}</h3>
            <span>{props.vote}</span>
        </div>
        <div className={classes.overview}>
            <h3>Overwie</h3>
            {props.overview}
        </div>
    </div>

}

export default Movie;