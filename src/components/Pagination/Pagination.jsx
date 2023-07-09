import React from 'react'
import { Typography, Button, Pagination } from '@mui/material'
import useStyles from './styles'

const PaginationBar = ({total_pages, setPage, page}) => {
    const classes = useStyles();
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.container}>
         <Pagination page={page}  count={total_pages} variant="outlined" shape="rounded" onChange={handleChange} />
    </div>
  )
}

export default PaginationBar