import React, { useState, useEffect } from "react";
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
  Tooltip,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  useGetMovieQuery,
  useGetRecommendationsQuery,
} from "../../services/TMDB";
import useStyles from "./styles";
import genreIcons from "../../assets/genres/index";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { MovieList } from "../index";

const MovieInformation = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const {
    data: recommendations,
    isFetching: isFetchingRecommendations,
    error: isErrorWhileFetchingRecommendations,
  } = useGetRecommendationsQuery({ id: id, list: "/recommendations" });
  const classes = useStyles();
  const isMovieFavorited = true;
  const isMovieWatchListed = true;
  const [open, setOpen] = useState(false);

  if (isFetchingRecommendations) {
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CircularProgress size={"8rem"} />
      </Box>
    );
  }

  if (isErrorWhileFetchingRecommendations) {
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        An error occured while fetching the recomendations...
      </Box>
    );
  }

  if (isFetching) {
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CircularProgress size={"8rem"} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        An error occured while fetching the movie...
      </Box>
    );
  }
  console.log(data);

  const addToFavorites = () => {
    console.log("test");
  };

  const addToWatchList = () => {
    console.log("test");
  };

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4}>
        <img
          src={
            data.backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
              : `https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?w=1200&ssl=1`
          }
          alt="movie image"
          className={classes.poster}
        />
      </Grid>
      <Grid item container direction={"column"} lg={"7"}>
        <Typography variant="h3" align={"center"} gutterBottom>
          {data?.title} ({data.release_date.split("-")[0]})
        </Typography>
        <Typography variant="h5" align={"center"} gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display={"flex"} align="center">
            <Tooltip disableTouchListener title={data?.vote_average / 2}>
              <div>
                <Rating
                  readOnly
                  value={data?.vote_average / 2}
                  precision={0.1}
                />
              </div>
            </Tooltip>
            <Typography
              variant="subtitle1"
              style={{ marginLeft: "10px" }}
              gutterBottom
            >
              {data?.vote_average / 2} / 5
            </Typography>
          </Box>
          <Typography variant="h6" align={"center"} gutterBottom>
            {data?.runtime} mins /{" "}
            {data?.spoken_languages.length > 0
              ? data?.spoken_languages[0].name
              : ""}
          </Typography>
        </Grid>
        <Grid item className={classes.genreContainer}>
          {data?.genres?.map(({ name, id }, index) => (
            <Link
              key={index}
              className={classes.links}
              to="/"
              onClick={() => dispatch(selectGenreOrCategory(id))}
            >
              <img
                src={genreIcons[name.toLowerCase()]}
                alt="icon"
                className={classes.genreImage}
                height={30}
              />
              <Typography
                color={"textPrimary"}
                variant="subtitle1"
                gutterBottom
              >
                {name}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography style={{ marginTop: "10px" }} variant="h5" gutterBottom>
          Overview
        </Typography>
        <Typography style={{ marginBottom: "2rem" }} gutterBottom>
          {data?.overview}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Top Cast
        </Typography>
        <Grid item container spacing={2}>
          {data &&
            data.credits?.cast
              ?.map(
                (character, index) =>
                  character.profile_path && (
                    <Grid
                      item
                      key={index}
                      xs={4}
                      md={2}
                      component={Link}
                      to={`/actors/${character.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Link to={`/actors/${character.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`}
                          alt="cast actor"
                          className={classes.castImage}
                        />
                        <Typography color={"textPrimary"}>
                          {character?.name}
                        </Typography>
                      </Link>
                      <Typography color={"texSecondary"}>
                        {character?.character.split("/")[0]}
                      </Typography>
                    </Grid>
                  )
              )
              .slice(0, 6)}
        </Grid>
        <Grid style={{ marginTop: "2rem" }} item container>
          <div className={classes.buttonsContainer}>
            <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
              <ButtonGroup size="small" variant="outlined">
                <Button
                  target="_blank"
                  href={data?.homepage}
                  rel="noopener noreferrer"
                  endIcon={<Language />}
                >
                  Website
                </Button>

                <Button
                  target="_blank"
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  rel="noopener noreferrer"
                  endIcon={<MovieIcon />}
                >
                  IMDB
                </Button>

                <Button onClick={() => setOpen(true)} endIcon={<Theaters />}>
                  Trailer
                </Button>
              </ButtonGroup>
              <ButtonGroup size="small" variant="outlined">
                <Button
                  onClick={() => addToFavorites()}
                  endIcon={
                    isMovieFavorited ? <FavoriteBorderOutlined /> : <Favorite />
                  }
                >
                  {isMovieFavorited ? "Unfavorite" : "favorite"}
                </Button>

                <Button
                  onClick={() => addToWatchList()}
                  endIcon={isMovieWatchListed ? <Remove /> : <PlusOne />}
                >
                  WatchList
                </Button>

                <Button
                  onClick={() => {}}
                  endIcon={<ArrowBack />}
                  sx={{ borderColor: "primary.main", textUnderline: "none" }}
                >
                  <Typography
                    style={{ textDecoration: "none" }}
                    component={Link}
                    to={"/"}
                    color={"inherit"}
                    variant="subtitle2"
                  >
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Box marginTop={"5rem"} width={"100%"}>
        <Typography variant="h3" gutterBottom align="center">
          You might also like
        </Typography>
        {recommendations ? (
          <MovieList numberOfMovies={12} movies={recommendations} />
        ) : (
          "No recommendations available"
        )}
      </Box>
      <Modal
        closeAfterTransition
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        {data?.videos?.results?.length > 0 && (
          <iframe
            autoPlay
            className={classes.video}
            frameBorder="0"
            title="Trailer"
            src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
            allow="autoplay"
          />
        )}
      </Modal>
    </Grid>
  );
};

export default MovieInformation;
