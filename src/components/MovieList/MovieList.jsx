import React, {useState, useEffect} from 'react'
import { Grid } from '@mui/material'
import useStyles from './styles';
import {Movie} from '../index'

const MovieList = ({movies}) => {
    const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
        {
          movies.results.map((movie, index) => (<Movie key={index} i={index} movie={movie}/>))
        }
    </Grid>
  )
}

export default MovieList