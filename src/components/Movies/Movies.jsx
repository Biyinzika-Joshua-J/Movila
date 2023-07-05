import React, {useState, useEffect} from 'react'
import { Box, useMediaQuery, CircularProgress, Typography } from '@mui/material'
import { useGetMoviesQuery } from '../../services/TMDB'
import {MovieList} from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import {Pagination} from '../index';

const Movies = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const {genreIdOrCategoryName} = useSelector(state => state.currentGenreOrCategory);
  const {searchQuery} = useSelector(state => state.currentGenreOrCategory);
  const {data, error, isFetching} = useGetMoviesQuery({genreIdOrCategoryName, page, searchQuery});

  if (isFetching){
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <CircularProgress size={'4rem'}/>
      </Box>
    )
  }

  if (!data?.results?.length){
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
      <MovieList numberOfMovies={data.results.length} movies={data}/>
      <Pagination currentPage={page} setPage={setPage} totalPages={data?.total_pages}/>
    </div>
  )
}

export default Movies