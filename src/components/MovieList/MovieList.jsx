import React, {useState, useEffect} from 'react'
import { Grid, Box } from '@mui/material'
import useStyles from './styles';
import {Movie} from '../index'

const MovieList = ({movies, numberOfMovies}) => {
  
    const classes = useStyles();
    if (!movies){
      return <Box>
        An error occured
      </Box>
    }
  return (
    <Grid container className={classes.moviesContainer}>
        {
          movies?.results.slice(0, numberOfMovies).map((movie, index) => (<Movie key={index} i={index} movie={movie}/>))
        }
    </Grid>
  )
}

export default MovieList