import React from 'react'
import { Box, Grid, Skeleton, useMediaQuery } from '@mui/material';

const loaders = [];
for (let i = 0; i < 21; i++) {
  loaders.push(i);
}


const Loader = () => {
    const isMobile = useMediaQuery("(max-width:850px)");
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
    <Box sx={{ width: "70vw" }}>
      <Grid container>
        {isMobile===false && <Grid item xs={12} md={12} lg={12} sm={12}>
          <Box sx={{ width: "93%", overflow: "hidden", margin: "1rem 0" }}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={930}
              height={250}
            />
          </Box>
        </Grid>}
      </Grid>
      <Grid container>
        {loaders.map((item, index) => (
          <Grid item xs={12} sm={12} md={12} lg={4} xl={2} gap={0}>
            <Box sx={{ width: "100%", overflow: "hidden" }}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={isMobile?"100%":"80%"}
                height={200}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "80%" }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "80%" }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "50%" }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
  )
}

export default Loader