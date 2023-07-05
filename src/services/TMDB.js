import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { type } from '@testing-library/user-event/dist/type';

const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;


export const tmdbApi = createApi({
    reducerPath:'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints:(builder)=>({

        getGenres : builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}` 
        }),
        getMovies : builder.query({
            query: ({genreIdOrCategoryName, page, searchQuery}) => {
                // Get movies
                if (searchQuery.length >= 1){
                    console.log(searchQuery)
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
                }
                // fetch by category
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string'){
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;    
                }
                // fetch by genre id
                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number'){
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;    
                }
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            }
        }),
        getMovie: builder.query({
            query : (id)=> `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
        }),
        getRecommendations: builder.query({
            query: ({id:movie_id, list})=>`/movie/${movie_id}/${list}?api_key=${tmdbApiKey}&page=1`
        }),
        getActor: builder.query({
            query: (id) => `person/${id}?api_key=${tmdbApiKey}`,
          }),
      
          // Get Movies by Actor
          getMoviesByActorId: builder.query({
            query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
          }),
    })
})


export const {useGetMoviesQuery, useGetGenresQuery, useGetMovieQuery, useGetRecommendationsQuery, useGetActorQuery, useGetMoviesByActorIdQuery} = tmdbApi;


















