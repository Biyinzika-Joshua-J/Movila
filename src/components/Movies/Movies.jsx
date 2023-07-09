import React, { useState, useEffect } from "react";
import {
  Box,
  useMediaQuery,
  CircularProgress,
  Typography,
  Grid,
  Skeleton,
} from "@mui/material";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { Pagination, FeaturedMovie } from "../index";
import Loader from "./Loader";


const Movies = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
  const isMobile = useMediaQuery("(max-width:750px)");

  if (isFetching) {
    return (
     <Loader/>
    );
  }

  if (!data?.results?.length) {
    return (
      <Box display={"flex"} mt={"20px"} justifyContent={"center"}>
        <Typography variant="h4">
          No movies that match that names.
          <br />
          Please search for something else
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <Typography variant="h4">An error has occured..</Typography>
      </Box>
    );
  }

  return (
    <div>
      <FeaturedMovie movie={data.results[0]} />
      <MovieList numberOfMovies={data.results.length} movies={data} />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data?.total_pages}
      />
    </div>
  );
};

export default Movies;
