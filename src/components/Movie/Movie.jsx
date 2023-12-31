import React, {Suspense} from "react";
import { Grid, Typography, Grow, Tooltip, Rating, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Movie = ({ movie, i }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 5}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <Suspense fallback={<p>loading..</p>}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : `https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?w=1200&ssl=1`
            }
            alt="movie image"
            className={classes.image}
            
          />
          </Suspense>
        <Typography className={classes.title} variant="h5">
          {movie.title}
        </Typography>
         <Tooltip
            disableTouchListener 
            title={movie.vote_average/2}
         >
            <div>
                <Rating readOnly value={movie.vote_average/2} precision={0.1} />
            </div>
         </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
