import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name:'user',
    initialState:{
       user :{},
       isAuthenticated:false,
       sessionId:'',
    },
    reducers:{
        setUser : (state, action) => {
           state.user = action.payload;
           state.isAuthenticated = true;
           state.sessionId = localStorage.getItem('session_id');
           localStorage.setItem('account_id', action.payload.id);
        },

    }
});


export const {setUser} = authSlice.actions;
export default authSlice.reducer;
export const userSelector = (state) => state.user;
