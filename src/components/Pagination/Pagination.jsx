import React from 'react'
import { Typography, Button } from '@mui/material'
import useStyles from './styles'

const Pagination = ({currentPage, setPage, totalPages}) => {

    const classes = useStyles();

    if (totalPages === 0) return null;

    const handlePrev = () => {
        if (currentPage != 1){
            setPage(prev => prev-1)
        }
    }

    const handleNext = () => {
       if (currentPage < totalPages){
        setPage(prev => prev+1)
       }
    }

  return (
    <div className={classes.container}>
        <Button onClick={()=>handlePrev()} className={classes.button} variant='contained' type='button' color='primary'>
            Prev
        </Button>
        <Typography variant='h4' className={classes.pageNumber}>
            {currentPage}
        </Typography>
        <Button onClick={()=>handleNext()} className={classes.button} variant='contained' type='button' color='primary'>
            Next
        </Button>
    </div>
  )
}

export default Pagination