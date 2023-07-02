import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const genreOrCategory = createSlice({
    name:'genreOrCategory',
    initialState:{
        genreIdOrCategoryName:'',
        page:1,
        searchQuery:'',
    },
    reducers:{
        selectGenreOrCategory : (state, action) => {
            state.genreIdOrCategoryName = action.payload;
            state.searchQuery = '';
        },

        searchMovie : (state, action) => {
            state.searchQuery = action.payload;
        },



    }
});


export const {selectGenreOrCategory, searchMovie} = genreOrCategory.actions;
export default genreOrCategory.reducer;
