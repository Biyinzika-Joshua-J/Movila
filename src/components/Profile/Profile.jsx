import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useGetListQuery } from "../../services/TMDB";
import {RatedCards} from "../index";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const { data: favoriteMovies, refetch:refetchFavorites } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
  const { data: watchlistMovies, refetch:refetchWatchListed } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });

  useEffect(()=>{
    refetchFavorites()
    refetchWatchListed()
  }, [])

  const logout = () => {
    localStorage.clear();
     window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length
        ? <Typography variant="h5">Add favourite or watchlist same movies to see them here!</Typography>
        : (
          <Box>
            <RatedCards title="Favorite Movies" movies={favoriteMovies} />
            <RatedCards title="Watchlist" movies={watchlistMovies} />
          </Box>
        )}
    </Box>
  );
};

export default Profile;
