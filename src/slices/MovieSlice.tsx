import type {IMovie} from "../models/IMovie.tsx";
import {createSlice, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {loadMovies} from "./MovieThunck.tsx";

type movieSliceType = {
    movies:IMovie[],
    sortType: "rating+" | "rating-" | "popularity+" | "popularity-" | "title+" | "title-" | null;
}

const initisialState:movieSliceType={movies:[],sortType:null}
export const movieSlice = createSlice({
    name:"movieSlice",
    initialState:initisialState,
    reducers:{
        setSortType: (
            state,
            action: PayloadAction<movieSliceType["sortType"]>
        ) => {
            state.sortType = action.payload;
        }
    },
    extraReducers:builder => builder
        .addCase(loadMovies.fulfilled, (state, action:PayloadAction<IMovie[]>)=>{
            state.movies = action.payload
        })
        .addCase(loadMovies.rejected, (state, action)=>{
            console.log(state)
            console.log(action)
        })
        .addMatcher(isRejected(loadMovies),(state)=>{
            console.log(state);
        })

});
export const movieSliceActions = {
    ...movieSlice.actions,loadMovies
}