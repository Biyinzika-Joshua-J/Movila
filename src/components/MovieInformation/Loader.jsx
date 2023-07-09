import React from 'react'
import { Box, Skeleton, Grid } from '@mui/material'

const Loader = () => {
  return (
    <Grid container >
    <Grid item sm={12} xs={12} md={12} lg={4}>
        <Skeleton variant="rectangular" animation='wave' width={270} height={300} />
    </Grid>
    <Grid item sm={12} xs={12} md={12} lg={6}>
    <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "3rem", width: "100%" }}
              />
               <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1.5rem", width: "100%" }}
              />
               <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "100%" }}
              />
               <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "100%" }}
              />
               <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "100%" }}
              />
               <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "100%" }}
              />

<Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "3rem", width: "100%" }}
              />
               <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1.5rem", width: "100%" }}
              />
               <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "100%" }}
              />
               <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "100%" }}
              />
               <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "100%" }}
              />
               <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "100%" }}
              />



<Box sx={{display:'flex',flexDirection:'row', alignItems:'center',flexWrap:'wrap' }}>
            {[1,2,3,4,5,6,7].map((item, index) => <Box sx={{display:'inline-block',margin:'.2rem .5rem'}}>
                    <Skeleton variant="circular" animation='wave' width={50} height={50} />
                </Box>
           )}
            </Box>
              
    </Grid>
   
  </Grid>
  )
}

export default Loader