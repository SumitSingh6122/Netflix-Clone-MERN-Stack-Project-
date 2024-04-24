import {createSlice} from "@reduxjs/toolkit";

const movieslice=createSlice({
    name:"Movie",
    initialState:{
        playMovie:null,
        TrendingMovie:null,
        UpcomingMovie:null,
        TopRatedMovie:null,
        trailerMovie:null,
        playid:"",
    },
    reducers:{
       getPlayMovie:(state,action)=>{
        state.playMovie=action.payload;
       },
       getTrendingMovie:(state,action)=>{
     state.TrendingMovie=action.payload;
       },
       getUpcomingMovie:(state,action)=>{
        state.UpcomingMovie=action.payload;
          },
          getTopRatedMovie:(state,action)=>{
            state.TopRatedMovie=action.payload;
              },
              getTrailerMovie:(state,action)=>{
                state.trailerMovie=action.payload;
              },
              getId:(state,action)=>{
                state.playid=action.payload;
              }
    }
})
export const {getPlayMovie,getTrendingMovie,getUpcomingMovie,getTopRatedMovie,getTrailerMovie,getId}=movieslice.actions;
export default movieslice.reducer;