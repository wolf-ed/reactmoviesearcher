import Movie from '../Movie/Movie';
import React from 'react';
import classes from './MoviesList.module.css'

const MoviesList = (props) => {
    return <section className={classes['movies-container']}>
        {props.moviesArray.map(movie => { return (<Movie 
            key={movie.title + movie.vote_average}
            img={movie.poster_path}
            title={movie.title}
            vote={movie.vote_average}
            overview={movie.overview}
            />)
        })}
    </section>
}
export default MoviesList;