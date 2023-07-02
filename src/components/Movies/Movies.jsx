import React, {useState, useEffect} from 'react'
import { Box, useMediaQuery, CircularProgress, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useGetMoviesQuery } from '../../services/TMDB'
import {MovieList} from '../index';

const Movies = () => {

  const {data, error, isFetching} = useGetMoviesQuery();

  if (isFetching){
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <CircularProgress size={'4rem'}/>
      </Box>
    )
  }

  if (!data.results.length){
    return (
      <Box display={'flex'} mt={'20px'} justifyContent={'center'}>
        <Typography variant='h4'>
            No movies that match that names.
            <br/>
            Please search for something else
        </Typography>
      </Box>
    )
  }

  if (error){
    return (
      <Box display={'flex'} justifyContent={'center'}>
          <Typography variant='h4'>
            An error has occured..
        </Typography>
      </Box>
    )
  }




  return (
    <div>
      <MovieList movies={data}/>
    </div>
  )
}

export default Movies