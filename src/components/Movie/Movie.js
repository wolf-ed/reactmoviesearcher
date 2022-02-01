import classes from './Movie.module.css';
import React from 'react';

const Movie = (props) => {
    const getVoteColor = movieRate => {
        if(movieRate >= 8){
            return 'green'
        }
        else if(movieRate >= 5){
            return 'orange'
        }else{
            return 'red'
        }
    }

    const rateColor = getVoteColor(props.vote)

    return <li className={classes.movie}>
        <img src={props.img} alt='movie-poster' />
        <div className={classes['movie-info']}>
            <h3>{props.title}</h3>
            <span className={classes[`${rateColor}`]}>{props.vote}</span>
        </div>
        <div className={classes.overview}>
            <h3>Overwie</h3>
            {props.overview}
        </div>
    </li>

}

export default Movie;